import React from 'react'
import Layout from '../components/Layout'
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
  const { data, errors } = props
  const page = data && data.page
  const pageBuilder = page && page._rawPageBuilder

  console.log(page._rawPageBuilder)
  return (
    <Layout>
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {pageBuilder && <RenderModules modules={page._rawPageBuilder} />}
    </Layout>
  )
}

export default LandingPage
