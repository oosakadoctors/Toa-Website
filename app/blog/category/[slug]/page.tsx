import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: any
  categories?: { title: string; slug: string }[]
}

async function getCategoryData(slug: string) {
  const query = `{
    "category": *[_type == "category" && slug.current == $slug][0]{
      title,
      description
    },
    "posts": *[_type == "post" && references(*[_type == "category" && slug.current == $slug]._id)] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      "categories": categories[]->{ title, "slug": slug.current }
    }
  }`

  return await client.fetch(query, { slug })
}

export async function generateStaticParams() {
  const query = `*[_type == "category"]{ "slug": slug.current }`
  const categories: { slug: string }[] = await client.fetch(query)

  return categories.map((cat) => ({
    slug: cat.slug,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const { category, posts } = await getCategoryData(slug)

  if (!category) {
    notFound()
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Centered Hero / Header Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-white border border-blue-100/60 p-8 sm:p-14 mb-12 shadow-sm text-center flex flex-col items-center">
        {/* Background Decorative Elements */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-xs font-medium text-gray-500 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              ブログ
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{category.title}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-blue-200/60 shadow-xs text-blue-700 text-xs font-semibold mb-4 backdrop-blur-xs">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            カテゴリー
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
            {category.title}
          </h1>

          {/* Description: Set to 20px (text-[20px]) on mobile, sm:text-lg on larger screens */}
          {category.description && (
            <p className="text-[20px] sm:text-lg text-gray-600 leading-relaxed font-normal max-w-xl mx-auto">
              {category.description}
            </p>
          )}

          {/* Post Counter */}
          <div className="mt-6 pt-6 border-t border-blue-100/80 w-full flex items-center justify-center gap-2 text-xs font-medium text-gray-500">
            <span>全 <strong className="text-gray-900 font-bold">{posts.length}</strong> 件の記事</span>
          </div>
        </div>
      </section>

      {/* Posts Grid Layout */}
      {posts.length === 0 ? (
        <div className="py-16 text-center text-gray-500 bg-gray-50/80 rounded-3xl border border-dashed border-gray-200">
          このカテゴリーの記事はまだありません。
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Main Image Container */}
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

                {/* Category Badges on Top Left of Image */}
                {post.categories && post.categories.length > 0 && (
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {post.categories.map((cat) => (
                      <span
                        key={cat.slug}
                        className="bg-white/90 backdrop-blur-md text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-xs"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Body */}
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

                {/* Post Title: Set to 20px (text-[20px]) on mobile, sm:text-lg on larger screens */}
                <h2 className="text-[20px] sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-4">
                  {post.title}
                </h2>

                {/* Action Footer */}
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
      )}
    </main>
  )
}