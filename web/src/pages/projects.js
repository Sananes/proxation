import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/ProjectPreviewGrid/ProjectPreviewGrid'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

export const query = graphql`
  query ProjectsPageQuery {
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
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout pageTitle="Referenzen">
      <SEO title="Referenzen" />
      <Container>
        {projectNodes && projectNodes.length > 0 && (
          <ProjectPreviewGrid
            title="Unsere Referenzen
            im eCommerce"
            subheading="Als E-Commerce Agentur und zertifizierter shopware solutions Partner setzen wir Ihre Wünsche
        und Vorstellungen elegant und effizient in einen modernen Online Shop um."
            nodes={projectNodes}
          />
        )}
      </Container>
    </Layout>
  )
}

export default ProjectsPage
