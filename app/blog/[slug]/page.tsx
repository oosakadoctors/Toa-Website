import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

// Next.js 15+ typing for params as a Promise
interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    mainImage,
    body
  }`

  return await client.fetch(query, { slug })
}

// Generate static params for SSG builds
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`
  const posts: { slug: string }[] = await client.fetch(query)

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await the params Promise to resolve the slug
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">{post.title}</h1>
      
      {post.publishedAt && (
        <time className="text-sm text-gray-500 block mb-6">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
      )}

      {post.mainImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={urlFor(post.mainImage).width(1200).height(675).url()}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Render portable text body content */}
      <div className="prose lg:prose-lg max-w-none">
        {post.body && <PortableText value={post.body} />}
      </div>
    </article>
  )
}