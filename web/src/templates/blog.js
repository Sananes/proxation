import React from 'react'
import { graphql, Link } from 'gatsby'
import { mapEdgesToNodes, blocksToText } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/BlogPostPreviewGrid'
import Container from '../components/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import SectionHeading from '../components/SectionHeading'
import VisibilitySensor from '../components/VisibilitySensor'

import styles from './scss/Blog.module.scss'

export const query = graphql`
  query BlogPageQuery($limit: Int!, $skip: Int!) {
    page: sanityPage(slug: { current: { regex: "/blog/" } }) {
      id
      seo {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      title
      _rawBody
    }
    posts: allSanityPost(limit: $limit, skip: $skip, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
              fluid {
                ...GatsbySanityImageFluid
              }
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = props => {
  const { data, errors } = props
  const page = (data && data.page) || []
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  const { currentPage, numPages, slug } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? slug : slug + (currentPage - 1).toString()
  const nextPage = slug + (currentPage + 1).toString()

  return (
    <Layout pageTitle="Unser Blog">
      <SEO
        title={page.seo.title || page.title || 'Unser Blog'}
        description={page.seo && page.seo.description}
        image={page.seo.image && page.seo.image.asset.url}
      />
      <Container className={styles.root}>
        <div className={styles.pageHeader}>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <SectionHeading
                align="center"
                isVisible={isVisible}
                textSize="largest"
                title="Unser Blog"
                subheading={page._rawBody && blocksToText(page._rawBody)}
                className={styles.pageHeader}
              />
            )}
          </VisibilitySensor>
        </div>
        {postNodes && postNodes.length > 0 && (
          <>
            <BlogPostPreviewGrid nodes={postNodes} />
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export default BlogPage
