import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import styles from './scss/Page.module.scss'
import Container from '../components/Container'
import BlockContent from '../components/block-content'
export const query = graphql`
  query ImpressumPageQuery {
    page: sanityPage(slug: { current: { regex: "/impressum/" } }) {
      id
      title
      _rawBody
    }
  }
`

const ImpressumPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page

  if (!page) {
    throw new Error(
      'Missing "Datenschutz" page data. Open the studio at http://localhost:3333 and add "Datenschutz" page data and restart the development server.'
    )
  }

  return (
    <Layout pageTitle={page.title}>
      <SEO title={page.title} />
      <Container narrow={true} className={styles.container}>
        <h1 className={styles.title}>{page.title}</h1>
        {page._rawBody && <BlockContent blocks={page._rawBody} />}
      </Container>
    </Layout>
  )
}

export default ImpressumPage
