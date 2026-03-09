exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      posts: allWpPost {
        nodes {
          id
          slug
        }
      }
      pages: allWpPage {
        nodes {
          id
          slug
        }
      }
    }
  `)

  // Crear páginas de posts
  result.data.posts.nodes.forEach(post => {
    createPage({
      path: `/${post.slug}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        id: post.id,
      },
    })
  })

  // Crear páginas de WordPress pages
  result.data.pages.nodes.forEach(page => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.id,
      },
    })
  })
}