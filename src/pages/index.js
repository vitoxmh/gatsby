import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const posts = data.allWpPost.nodes

  return (
    <div>
      <h1>Posts</h1>

      {posts.map(post => (
        <div key={post.id}>
          <Link to={`/${post.slug}`}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
{
  allWpPost {
    nodes {
      id
      slug
      title
    }
  }
}
`