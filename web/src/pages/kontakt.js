import React from 'react'
import { graphql, Link } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import cn from 'classnames'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import styles from './scss/Contact.module.scss'
import ContactForm from '../components/ContactForm/ContactForm'
import Image from 'gatsby-image/withIEPolyfill'
import GatsbyLink from '../components/GatsbyLink'

export const query = graphql`
  query ContactPageQuery {
    site: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      email
      phone
    }
    page: sanityKontakt(_id: { regex: "/(drafts.|)kontakt/" }) {
      title
      subheading
      notice
      availability
      projects {
        cardImage {
          asset {
            fluid(maxWidth: 250) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
        title
        type
      }
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
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.pageTitle}>{page.title}</h2>
          <p className={styles.subheading}>{page.subheading}</p>

          <div className={styles.info}>
            <h6>Rufen sie uns an</h6>
            <a href={'tel:' + data.site.phone} className={styles.anchor}>
              {data.site.phone}
            </a>
          </div>

          <div className={styles.info}>
            <h6>Schreiben Sie uns eine E-Mail</h6>
            <a href={'mailto:' + data.site.email}>{data.site.email}</a>
          </div>

          <ul className={styles.projects}>
            <>
              <h3 className={styles.projectsTitle}>Latest Projects</h3>
              {page.projects.map(project => (
                <li>
                  <Link to={'project/' + project.slug.current} className={styles.project}>
                    <div className={styles.imageWrapper}>
                      <Image
                        fluid={project.cardImage.asset.fluid}
                        alt={project.title}
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.details}>
                      <h3>{project.title}</h3>
                      <span>{project.type}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </>
          </ul>
        </div>
        <div className={styles.right}>
          <div
            className={cn(styles.notice, {
              [styles.available]: page.availability === 'available',
              [styles.unavailable]: page.availability === 'not-available',
              [styles.busy]: page.availability === 'busy'
            })}
          >
            <span className={styles.bullet}></span>
            <p>{page.notice}</p>
          </div>

          <ContactForm isDark={false} />
        </div>
      </div>
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
