import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../containers/layout'
import Seo from '../components/Seo'
import RenderModules from '../components/RenderModules'
import Container from '../components/Container'
import GraphQLErrorList from '../components/graphql-error-list'

export const query = graphql`
  query LandingPageQuery($id: String!) {
    page: sanityLandingPage(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      seo {
        title
        description
      }
      _rawPageBuilder(resolveReferences: { maxDepth: 6 })
    }
  }
`

const LandingPage = props => {
  const { data, errors, location } = props
  const page = (data || []).page && data.page
  const pageBuilder = page && page._rawPageBuilder
  return (
    <Layout>
      {page.title && (
        <Seo
          title={(page.seo && page.seo.title) || page.title}
          description={page.seo && page.seo.description}
        />
      )}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {pageBuilder && (
        <div>
          <RenderModules location={location} modules={page._rawPageBuilder} />
        </div>
      )}
    </Layout>
  )
}

export default LandingPage
