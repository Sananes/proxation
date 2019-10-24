import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/BlogPost'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import { blocksToText } from '../lib/helpers'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      _rawExcerpt
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          url
          _id
          fluid {
            ...GatsbySanityImageFluid
          }
        }
        alt
      }
      title
      slug {
        current
      }
      seo {
        title
        description
      }
      _rawBody
      authors {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  return (
    <Layout pageTitle="Unser Blog">
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || post.seo.title || 'Untitled'}
          image={post.mainImage.asset.url || null}
          description={
            blocksToText((post._rawExcerpt && post._rawExcerpt) || []) ||
            (post.seo && post.seo.description) ||
            null
          }
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  )
}

export default BlogPostTemplate
