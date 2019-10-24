import React from 'react'
import { graphql, Link } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
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
      <SEO title="Unser Blog" />
      <Container className={styles.root}>
        <div className={styles.pageHeader}>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <SectionHeading
                align="center"
                isVisible={isVisible}
                type="large"
                title="Unser Blog"
                subheading="Eine Sammlung von Nachrichten und Mitteilungen, Nerds Talks und Company-Carry-Ons."
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
