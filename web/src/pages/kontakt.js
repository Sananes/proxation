import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import styles from './scss/Contact.module.scss'
import ContactSection from '../sections/ContactSection'

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      title
      _rawBody
    }

    contact: sanityPageHome {
      sectionContact {
        _rawHeading
        image {
          asset {
            fluid(maxWidth: 450) {
              ...GatsbySanityImageFluid
            }
            url
          }
          alt
          caption
        }
      }
    }
  }
`

const ContactPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data.page
  const contact = data.contact.sectionContact

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} image={contact.image.asset.src} />
      <Container className={styles.root}>
        <ContactSection
          className={styles.contact}
          data={contact}
          animate={true}
          sectionColor="white"
        />
      </Container>
    </Layout>
  )
}
ContactPage.defaultProps = {
  data: {
    page: {
      title: 'No title'
    }
  }
}
export default ContactPage
