import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/Seo'
import Features from '../sections/Features'
import Layout from '../containers/layout'
import CarouselSection from '../sections/CarouselSection'
import ContactSection from '../sections/ContactSection'
import Clients from '../sections/ClientsSection'
import SupportSection from '../sections/SupportSection'
import AgencySection from '../sections/AgencySection'
import TestimonialsSection from '../sections/TestimonialsSection'
import Hero from '../sections/Hero'
import styles from './scss/Index.module.scss'
import 'pure-react-carousel/dist/react-carousel.es.css'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    page: sanityPageHome {
      seo {
        title
        description
        image {
          asset {
            url
            fluid {
              src
            }
          }
        }
      }
    }

    agency: sanityPageHome {
      _rawSectionThree(resolveReferences: { maxDepth: 10 })
    }

    clients: sanityPageHome {
      _rawClients(resolveReferences: { maxDepth: 10 })
    }

    hero: sanityPageHome {
      heroHome {
        title
        subheading
        caption
        position
        button {
          text
          url
        }
      }
    }

    contact: sanityPageHome {
      _rawSectionContact(resolveReferences: { maxDepth: 10 })
    }

    home: allSanityPageHome {
      edges {
        node {
          _rawSupport(resolveReferences: { maxDepth: 10 })
          _rawFeatures(resolveReferences: { maxDepth: 10 })
          _rawProjects(resolveReferences: { maxDepth: 10 })
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors, location } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const site = (data || {}).site
  const seo = (data || {}).page.seo

  const projectNodes = (data || {}).home && data.home.edges.map(edge => edge.node._rawProjects)[0]

  const supportSectionNode =
    (data || {}).home && data.home.edges.map(edge => edge.node._rawSupport)[0]

  const clients = (data || {}).clients._rawClients

  const featuresNodes = (data || {}).home && data.home.edges.map(edge => edge.node._rawFeatures)[0]

  const hero = (data || {}).hero.heroHome

  const agencySectionNodes = (data || {}).agency && data.agency._rawSectionThree

  const isVisible = true
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
    <SEO title={seo.title} image={seo.image && seo.image.asset.fluid.src} />
      <Hero visible={isVisible} {...hero} location={location} />
      <CarouselSection
        className={styles.projects}
        data={projectNodes}
        length={projectNodes.length}
        slug="project"
        animate={true}
        isVisible={isVisible}
      />
      <Clients {...clients} animate={true} />
      <TestimonialsSection animate={true} />
      <Features {...featuresNodes} animate={true} />
      <SupportSection {...supportSectionNode} animate={true} />
      <AgencySection data={agencySectionNodes} animate={true} />
      <ContactSection data={data.contact._rawSectionContact} animate={true} />
    </Layout>
  )
}

export default IndexPage
