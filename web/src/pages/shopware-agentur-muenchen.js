import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import Hero from '../sections/Hero'
import styles from './scss/Shopware.module.scss'
import Icon from '../components/icons'
import cn from 'classnames'

export const query = graphql`
  query ShopwarePageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody
    }
    people: allSanityPerson {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
  }
`

const ShopwarePage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  const personNodes =
    data && data.people && mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs)

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout pageTitle="Shopware" fullWidth={true}>
      <SEO title={page.title} />
      <section className={styles.root}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Ihre Shopware Agentur in München</h1>
            <p>Wir sind zertifizierter shopware Technology-, Business- & Solution Partner</p>
            <ul className={styles.badges}>
              <li className={styles.badgeItem}>
                <Icon symbol="shopware" className={styles.badgeIcon}></Icon>
                <strong className={styles.bold}>Solutions</strong> Partner
              </li>
              <li className={cn(styles.badgeItem, styles.badgeTechnology)}>
                <Icon symbol="shopware" className={styles.badgeIcon}></Icon>
                <strong className={styles.bold}>Technology</strong> Partner
              </li>
              <li className={cn(styles.badgeItem, styles.badgeBusiness)}>
                <Icon symbol="shopware" className={styles.badgeIcon}></Icon>
                <strong className={styles.bold}>Business</strong> Partner
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ShopwarePage
