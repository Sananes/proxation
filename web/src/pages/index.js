import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import Image from 'gatsby-image/withIEPolyfill'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/Seo'
import Features from '../sections/Features'
import VisibilitySensor from '../components/VisibilitySensor'
import Layout from '../containers/layout'
import Section from '../components/Section'
import CarouselSection from '../sections/CarouselSection'
import SupportSection from '../sections/SupportSection'
import AgencySection from '../sections/AgencySection'
import Hero from '../modules/Hero'
import styles from './scss/Index.module.scss'
import 'pure-react-carousel/dist/react-carousel.es.css'
import post from '../../../studio/schemas/post'
import BlockText from '../components/block-text'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
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
            heading {
              caption
              title
              subHeading
            }
            image {
              asset {
                fluid(maxWidth: 800) {
                  ...GatsbySanityImageFluid
                }
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
            heading {
              caption
              title
            }
            features {
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

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
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
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const homepageComponents = [1, 2, 3, 4, 5]

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

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []
  const projectNodes = (data || {}).home && data.home.edges.map(edge => edge.node.projects)[0]

  const supportSectionHeadingNodes =
    (data || {}).home && data.home.edges.map(edge => edge.node.support.heading)[0]

  const supportSectionNode = (data || {}).home && data.home.edges.map(edge => edge.node.support)[0]

  const featuresHeadingNodes =
    (data || {}).home && data.home.edges.map(edge => edge.node.features.heading)[0]
  const featuresNodes =
    (data || {}).home && data.home.edges.map(edge => edge.node.features.features)[0]

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
    <Layout fullScreen={false}>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <VisibilitySensor once>{({ isVisible }) => <Hero visible={isVisible} />}</VisibilitySensor>

      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <CarouselSection
            className={styles.projects}
            data={projectNodes}
            length={projectNodes.length}
            slug="project"
            isVisible={isVisible}
          />
        )}
      </VisibilitySensor>

      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Features data={featuresNodes} headingData={featuresHeadingNodes} isVisible={isVisible} />
        )}
      </VisibilitySensor>

      <SupportSection
        data={supportSectionNode}
        headingData={supportSectionHeadingNodes}
        animate={true}
      />
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <AgencySection
            data={sectionThreeItemNodes}
            headingData={sectionThreeHeadingNodes}
            isVisible={isVisible}
          />
        )}
      </VisibilitySensor>
    </Layout>
  )
}

export default IndexPage
