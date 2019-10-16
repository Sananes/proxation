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

    clients: sanityPageHome {
      clients {
        heading {
          title
        }
        clients {
          _key
          title
          image {
            alt
            caption
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }

    contact: sanityPageHome {
      sectionContact {
        sectionColor
        heading {
          caption
          title
        }
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
          sectionThree {
            heading {
              caption
              title
              subHeading
            }
            items {
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
          support {
            sectionColor
            heading {
              caption
              title
              subHeading
            }
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
            sectionColor
            heading {
              caption
              title
            }
            items {
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
              button {
                text
                url
              }
            }
          }
          projects {
            mainImage {
              crop {
                _key
                _type
                top
                bottom
                left
                right
              }
              hotspot {
                _key
                _type
                x
                y
                height
                width
              }
              asset {
                fluid(maxWidth: 800) {
                  ...GatsbySanityImageFluid
                }
                _id
              }
              alt
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
  const { data, errors } = props

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

  const featuresNodes = (data || {}).home && data.home.edges.map(edge => edge.node.features)[0]

  const sectionThreeHeadingNodes =
    (data || {}).home && data.home.edges.map(edge => edge.node.sectionThree.heading)[0]

  const sectionThreeItemNodes =
    (data || {}).home && data.home.edges.map(edge => edge.node.sectionThree.items)[0]

  const isVisible = true
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <Seo title={site.title} description={site.description} keywords={site.keywords} />
      <Hero visible={isVisible} />
      <CarouselSection
        className={styles.projects}
        data={projectNodes}
        length={projectNodes.length}
        slug="project"
        animate={true}
        isVisible={isVisible}
      />

      <Clients data={data.clients.clients} animate={true} />

      <Features {...featuresNodes} animate={true} />
      <SupportSection {...supportSectionNode} animate={true} />
      <AgencySection
        data={sectionThreeItemNodes}
        headingData={sectionThreeHeadingNodes}
        animate={true}
      />
      <ContactSection data={data.contact.sectionContact} animate={true} />
    </Layout>
  )
}

export default IndexPage
