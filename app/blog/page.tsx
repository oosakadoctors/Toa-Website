import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: any
  category?: {
    title: string
    slug: { current: string }
  }
}

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    "category": category->{ title, slug }
  }`

  return await client.fetch(query)
}

export default async function BlogListPage() {
  const posts = await getPosts()

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          婚活ブログ・お役立ちコラム
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          婚活のコツや成婚ノウハウ、最新の情報をまとめてご紹介しています。
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
              {post.mainImage ? (
                <img
                  src={urlFor(post.mainImage).width(600).height(375).url()}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}

              {/* Category Badge */}
              {post.category && (
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  {post.category.title}
                </span>
              )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6">
              {/* Date */}
              {post.publishedAt && (
                <time className="text-xs font-medium text-gray-400 mb-2 block">
                  {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </time>
              )}

              {/* Title */}
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-4">
                {post.title}
              </h2>

              {/* Footer / Read More indicator */}
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50 text-xs font-semibold text-blue-600">
                <span>記事を読む</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}