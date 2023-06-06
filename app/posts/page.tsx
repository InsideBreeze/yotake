import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'


export default function Posts() {
	return (
		<div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
              <Link href={post.slug} className='no-underline hover:after:w-[0px]'>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>

	)
}
