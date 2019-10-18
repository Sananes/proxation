import React from 'react'
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
      _rawPageBuilder(resolveReferences: { maxDepth: 10 })
    }
  }
`

const LandingPage = props => {
  const { data, errors, location } = props
  const page = data && data.page
  const pageBuilder = page && page._rawPageBuilder

  return (
    <Layout location={location}>
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
