import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { client } from '@/sanity/lib/client' // Adjust path if needed

const BASE_URL = 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp'

// Helper function to recursively find all `page.tsx` or `page.jsx` files
function getAppRoutes(dir: string, baseDir: string = dir): string[] {
  let routes: string[] = []
  const items = fs.readdirSync(dir, { withFileTypes: true })

  for (const item of items) {
    const fullPath = path.join(dir, item.name)

    if (item.isDirectory()) {
      // Skip route groups like (auth), private folders _components, or api routes
      if (item.name.startsWith('_') || item.name.startsWith('api') || item.name === 'studio') {
        continue
      }
      routes = routes.concat(getAppRoutes(fullPath, baseDir))
    } else if (item.isFile() && (item.name === 'page.tsx' || item.name === 'page.jsx')) {
      // Convert directory path to route path
      let relativePath = path.relative(baseDir, path.dirname(fullPath))

      // Clean up Next.js route groups like (marketing)
      relativePath = relativePath.replace(/\([^)]+\)\/?/g, '')

      // Skip dynamic route folders like [slug] since we fetch those separately from Sanity
      if (!relativePath.includes('[')) {
        const route = relativePath === '' ? '' : `/${relativePath.replace(/\\/g, '/')}`
        routes.push(route)
      }
    }
  }

  return routes
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Scan your `app` directory automatically for static pages
  const appDirectory = path.join(process.cwd(), 'app')
  const staticRoutes = getAppRoutes(appDirectory)

  const staticPages = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('daily' as const) : ('monthly' as const),
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Fetch all dynamic Sanity blog post slugs
  let blogUrls: MetadataRoute.Sitemap = []
  try {
    const posts = await client.fetch<Array<{ slug: { current: string }; _updatedAt: string }>>(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug, _updatedAt }`
    )

    blogUrls = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug.current}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Failed to fetch posts for sitemap:', error)
  }

  // Combine static pages and Sanity blog posts
  return [...staticPages, ...blogUrls]
}