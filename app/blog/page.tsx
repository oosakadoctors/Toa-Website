import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image' // Optional helper for Sanity images

// Define TypeScript type for the blog post preview
interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: any
}

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage
  }`
  
  return await client.fetch(query)
}

export default async function BlogListPage() {
  const posts = await getPosts()

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link 
            key={post._id} 
            href={`/blog/${post.slug.current}`}
            className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {post.mainImage && (
              <div className="relative h-48 w-full bg-gray-100">
                {/* Standard img tag or Next.js Image component */}
                <img
                  src={urlFor(post.mainImage).width(600).height(400).url()}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              {post.publishedAt && (
                <time className="text-xs text-gray-500 mt-2 block">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}