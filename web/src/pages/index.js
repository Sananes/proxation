import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import Seo from '../components/Seo'
import Features from '../sections/Features'
import Layout from '../containers/layout'
import CarouselSection from '../sections/CarouselSection'
import ContactSection from '../sections/ContactSection'
import Clients from '../sections/ClientsSection'
import SupportSection from '../sections/SupportSection'
import AgencySection from '../sections/AgencySection'
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

    agency: sanityPageHome {
      sectionThree {
        _rawHeading
        items {
          _key
          title
          _rawContent
          image {
            alt
            caption
            asset {
              url
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
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
      sectionContact {
        sectionColor
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

    home: allSanityPageHome {
      edges {
        node {
          support {
            sectionColor
            _rawHeading
            image {
              asset {
                _id
                fluid(maxWidth: 800) {
                  ...GatsbySanityImageFluid
                }
                url
              }
              alt
              caption
            }
            button {
              text
              url
            }
          }
          features {
            sectionColumns
            sectionColor
            _rawHeading
            items {
              _key
              title
              _rawContent
              image {
                alt
                caption
                asset {
                  _id
                  _key
                  url
                  fluid(maxWidth: 800) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              button {
                text
                url
              }
            }
          }
          projects {
            _id
            cardImage {
              asset {
                fluid(maxWidth: 800) {
                  ...GatsbySanityImageFluid
                }
                _id
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

  const projectNodes = (data || {}).home && data.home.edges.map(edge => edge.node.projects)[0]

  const supportSectionNode = (data || {}).home && data.home.edges.map(edge => edge.node.support)[0]

  const clients = (data || {}).clients._rawClients

  const featuresNodes = (data || {}).home && data.home.edges.map(edge => edge.node.features)[0]

  const hero = (data || {}).hero.heroHome

  const agencySectionNodes = (data || {}).agency && data.agency.sectionThree

  const isVisible = true
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <Seo title={site.title} description={site.description} keywords={site.keywords} />
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
      <Features {...featuresNodes} animate={true} />
      <SupportSection {...supportSectionNode} animate={true} />
      <AgencySection data={agencySectionNodes} animate={true} />
      <ContactSection data={data.contact.sectionContact} animate={true} />
    </Layout>
  )
}

export default IndexPage
