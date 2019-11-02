import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/ProjectPreviewGrid/ProjectPreviewGrid'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, blocksToText } from '../lib/helpers'

export const query = graphql`
  query ProjectsPageQuery {
    page: sanityPage(slug: { current: { regex: "/e-commerce-referenzen/" } }) {
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
    projects: allSanityProject(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          cardImage {
            asset {
              _id
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const ProjectsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page

  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout pageTitle="Referenzen">
      <SEO
        title={page.seo && page.seo.title}
        description={page.seo && page.seo.description}
        image={page.seo.image && page.seo.image.asset.url}
      />
      <Container>
        {projectNodes && projectNodes.length > 0 && (
          <ProjectPreviewGrid
            title={page.title}
            subheading={blocksToText(page._rawBody)}
            nodes={projectNodes}
          />
        )}
      </Container>
    </Layout>
  )
}

export default ProjectsPage
