import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { mapEdgesToNodes } from '../../lib/helpers'
import BlogPostPreviewGrid from '../BlogPostPreviewGrid'
import GraphQLErrorList from '../graphql-error-list'

const RelatedBlogPosts = props => {
  function filteredPosts(data) {
    const posts = data.filter(item => item.id !== props.current)
    return posts.splice(0, 2)
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          posts: allSanityPost {
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
      `}
      render={data => (
        <>
          <BlogPostPreviewGrid
            className={props.className}
            nodes={filteredPosts(mapEdgesToNodes(data.posts))}
            {...props}
          />
        </>
      )}
    />
  )
}

export default RelatedBlogPosts
