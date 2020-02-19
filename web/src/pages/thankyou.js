import React from 'react'
import SEO from '../components/Seo'
import Container from '../components/Layout'
import Layout from '../containers/layout'
import Section from '../components/Section'
import styles from './scss/Page.module.scss'

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank you!" />
    <Section align="center" className={styles.pageTitle}>
      <h1>Ihre Nachricht wurde erfolgreich gesendet!</h1>
      <p>Bitte erlauben Sie 1-3 Tage, bevor wir antworten!</p>
    </Section>
  </Layout>
)

export default ThankYouPage
