import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import SectionHeading from '../components/SectionHeading'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import VisibilitySensor from '../components/VisibilitySensor'

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanityProject(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
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

const ProjectsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        {projectNodes && projectNodes.length > 0 && (
          <ProjectPreviewGrid
            title="Unsere Referenzen
            im eCommerce"
            lead="Als E-Commerce Agentur und zertifizierter shopware solutions Partner setzen wir Ihre Wünsche
        und Vorstellungen elegant und effizient in einen modernen Online Shop um."
            nodes={projectNodes}
          />
        )}
      </Container>
    </Layout>
  )
}

export default ProjectsPage
