import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/Project'
import SEO from '../components/Seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      projectLink
      startedAt
      endedAt
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
          _id
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
        alt
      }
      relatedProjects {
        title
        _id
        cardImage {
          asset {
            _id
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
      }
      services
      title
      slug {
        current
      }
      type
      excerpt
      _rawBody
      members {
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

const ProjectTemplate = props => {
  const { data, errors } = props
  const project = data && data.project
  return (
    <Layout fullWidth={true} title={project.title}>
      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} />}
    </Layout>
  )
}

export default ProjectTemplate
