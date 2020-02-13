/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors
  const blogSlug = `/e-commerce-blog/`
  const postEdges = (result.data.allSanityPost || {}).edges || []
  const postsPerPage = 6
  const numPages = Math.ceil(postEdges.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    const path = i === 0 ? blogSlug : blogSlug + (i + 1)
    reporter.info(`Creating blog list pages: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/blog.js'),
      context: {
        slug: blogSlug,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  postEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    const path = `/blog/${slug.current}`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id }
    })
  })
}

async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanityProject || {}).edges || []

  projectEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/project/${slug}/`

    reporter.info(`Creating project page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id }
    })
  })
}

async function createLandingPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityLandingPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const landingPageEdges = (result.data.allSanityLandingPage || {}).edges || []

  landingPageEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    const path = `/${slug.current}`

    reporter.info(`Creating landing page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/landing-page.js'),
      context: { id }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await createProjectPages(graphql, actions, reporter)
  await createLandingPages(graphql, actions, reporter)
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type sanitySectionContact implements Node {
      id: String
    },
    type sanityTextColumnsWithImage implements Node {
      id: String
    },
    type sanitySectionThreeHome implements Node {
      id: String
    }
  `
  createTypes(typeDefs)
}
