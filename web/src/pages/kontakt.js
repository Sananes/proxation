import React from 'react'
import { graphql, Link } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import cn from 'classnames'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import styles from './scss/Contact.module.scss'
import ContactForm from '../components/ContactForm/ContactForm'
import Image from 'gatsby-image/withIEPolyfill'
import VisibilitySensor from '../components/VisibilitySensor'
import ShopwareBadges from '../components/ShopwareBadges'
import { fadeOnVisible, getSanityImageFluid } from '../lib/helpers'
import { Spring } from 'react-spring/renderprops'

export const query = graphql`
  query ContactPageQuery {
    site: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      email
      phone
    }
    page: sanityKontakt(_id: { regex: "/(drafts.|)kontakt/" }) {
      seo {
        title
        description
      }
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
      _rawSectionContact(resolveReferences: { maxDepth: 10 })
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
  const contact = data.contact._rawSectionContact
  console.log(contact)

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.seo.title} />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {props => (
                  <h2 style={props} className={styles.pageTitle}>
                    {page.title}
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {props => (
                  <p style={props} className={styles.subheading}>
                    {page.subheading}
                  </p>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {props => (
                  <div className={styles.info} style={props}>
                    <h6>Rufen sie uns an</h6>
                    <a href={'tel:' + data.site.phone} className={styles.anchor}>
                      {data.site.phone}
                    </a>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {props => (
                  <div className={styles.info} style={props}>
                    <h6>Schreiben Sie uns eine E-Mail</h6>
                    <a href={'mailto:' + data.site.email}>{data.site.email}</a>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <ul className={styles.projects}>
            <>
              <VisibilitySensor once>
                {({ isVisible }) => (
                  <Spring to={fadeOnVisible(isVisible)}>
                    {props => (
                      <h3 className={styles.projectsTitle} style={props}>
                        Neueste Referenzen
                      </h3>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
              {page.projects.map(project => (
                <VisibilitySensor once>
                  {({ isVisible }) => (
                    <Spring to={fadeOnVisible(isVisible)}>
                      {props => (
                        <li style={props}>
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
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
              ))}
            </>
          </ul>
        </div>
        <div className={styles.right}>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {props => (
                  <div
                    style={props}
                    className={cn(styles.notice, {
                      [styles.available]: page.availability === 'available',
                      [styles.unavailable]: page.availability === 'not-available',
                      [styles.busy]: page.availability === 'busy'
                    })}
                  >
                    <span className={styles.bullet}></span>
                    <p>{page.notice}</p>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <ContactForm isDark={false} />
          <ShopwareBadges className={styles.badges} />
        </div>
      </div>
      <div className={styles.michaelSection}>
      <div className={styles.container}>
        <Image fluid={getSanityImageFluid(contact.image)} />
        <div className={styles.content}>
          <h2>Harte Arbeit & Ideenreich-tum zahlen sich aus.</h2>
          <p>
            In <strong>2013</strong> habe ich Proxation mit Fokus auf Digitalisierung von
            Vertriebsprozessen gegründet. Nach einem Zugewinn von Kunden wie die Knauf Insulation
            GmbH und versicherungsnahe Vertriebsunternehmen konnte die Gesellschaft bereits{' '}
            <strong>2014</strong> in eine GmbH umgewandelt werden.
          </p>
          <p>
            Mit stetigem Wachstum haben wir uns anschließend auf E-Commerce spezialisiert. Mit
            shopware Plugins wie unserem Bestseller 'Auto-Complete' konnten wir uns schnell einen
            Namen als fähiger Shopware Entwickler machen und zählen mittlerweile zu den 15
            wichtigsten Plugin-Herstellern im Shopware-Ökosystem. Mehr als 1000 Online-Shops
            vertrauen auf unsere Lösungen.
          </p>{' '}
          <p>
            <strong>Heute</strong>, fast 6 Jahre nach Gründung, sind wir stolzer Technologie-,
            Solution- & Business Partner der Shopware AG mit Fokus auf mobile Commerce - Lösungen
            und E-Commerce Beratung.
          </p>
        </div>
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
