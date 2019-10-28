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
  const contact = data.contact

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container className={styles.root}>
        {/* } <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>{page.title}</h1>
            <BlockContent blocks={page._rawBody || []} />
          </div>
          <div className={styles.info}>
            <form className={styles.form}>
              <FormGroup label="Full Name" name="fullName" />
              <FormGroup label="Email Address" name="email" />
              <FormGroup label="Company" name="company" />
              <FormGroup label="Budget" type="select" name="budget" />
              <FormGroup
                className={styles.message}
                label="Message"
                name="message"
                type="textarea"
              />
              <Button
                className={styles.button}
                text="Kontakt Aufnehmen"
                type="button"
                size="large"
                color="primary"
              />
            </form>
          </div>
  </div> */}
        <ContactSection
          className={styles.contact}
          data={contact.sectionContact}
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
