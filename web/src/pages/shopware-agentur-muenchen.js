import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/Seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import styles from './scss/Shopware.module.scss'
import Icon from '../components/icons'
import cn from 'classnames'
import { Spring } from 'react-spring/renderprops'
import SectionHeading from '../components/SectionHeading'
import VisibilitySensor from '../components/VisibilitySensor'
import SupportSection from '../sections/SupportSection'
import Clients from '../sections/ClientsSection'
import RichText from '../sections/RichText'
import Image from 'gatsby-image/withIEPolyfill'
import Section from '../components/Section'
import FullHeight from 'react-div-100vh'

export const query = graphql`
  query ShopwarePageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody
    }
    clients: sanityPageHome {
      _rawClients(resolveReferences: { maxDepth: 10 })
    }
    plugins: file(relativePath: { eq: "shopware/plugins.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hosting: file(relativePath: { eq: "shopware/hosting.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    programming: file(relativePath: { eq: "shopware/programming.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
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
  const clients = (data || {}).clients._rawClients
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const animation = {
    from: { opacity: 0, transform: 'translateY(-24px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  }

  function animationVisible(isVisible) {
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
    }
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
    <Layout pageTitle="Shopware" fullWidth={true} className={styles.root}>
      <SEO title={page.title} />

      <FullHeight className={styles.hero}>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={200}>
          {props => (
            <div style={props} className={styles.container}>
              <div className={styles.content}>
                <Spring from={animation.from} to={animation.to} delay={500}>
                  {props => <h1 style={props}>Ihre Shopware 5 Agentur in München</h1>}
                </Spring>

                <Spring from={animation.from} to={animation.to} delay={700}>
                  {props => (
                    <p style={props}>
                      Die Zukunft von Shopware 5 ist für uns eine Herzensangelegenheit. Shopware 5
                      steht für mehr Emotionen, stimmungsvolles Erleben im Shop und einzigartige
                      Produkterlebnisse. Wir sind zertifizierter shopware Technology-, Business- &
                      Solution Partner
                    </p>
                  )}
                </Spring>
                <Spring from={animation.from} to={animation.to} delay={800}>
                  {props => (
                    <ul style={props} className={styles.badges}>
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
                  )}
                </Spring>
              </div>
            </div>
          )}
        </Spring>
      </FullHeight>

      <section className={styles.intro}>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <div className={styles.left}>
              <SectionHeading
                align="left"
                caption="DEUTSCHLANDS ERFOLGREICHSTES SHOPSYSTEM"
                title="Proxation und Shopware — Hand in Hand für Ihren Erfolg!"
                subheading="Deutschlands erfolgreichstes shopsystem und eine der führenden agenturen münchens arbeiten zusammen. Das Shopsystem shopware stammt von der shopware AG mit Sitz in Schöppingen, Deutschland und ist aktuell das fortschrittlichste E-Commerce System auf dem europäischen Markt.
              Shopware setzt sich insbesondere durch leichte Bedienung, Open-Source Komponenten und exzellenter Performance von der internationalen Konkurrenz ab. Ein großer Pluspunkt ist die bereits sehr umfangreiche Standard-Funktionalität des Basissystems, mit der Sie ohne große Entwicklungsaufwände viele weitere Prozesse abbilden können. Die hohe Flexibilität des Systems lässt maximale Individualisierung zu und bedeutet für Sie, dass Sie Konfiguratoren oder Schnittstellen-Anbindungen jederzeit vornehmen können. Als erfolgreiche shopware Agentur und Plugin Entwickler helfen wir Ihnen dabei, Ihren Wunsch Online Shop mit Hilfe von shopware ins Leben zu rufen."
                isVisible={isVisible}
              />
            </div>
          )}
        </VisibilitySensor>

        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={animationVisible(isVisible)}>
              {animate => (
                <div style={animate} className={styles.right}>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <a href="#">
                        <Icon symbol="file" />
                        <h3>Documentation</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#">
                        <Icon symbol="view" />
                        <h3>Live Demo</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#">
                        <Icon symbol="download" />
                        <h3>Download Broshure</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={animationVisible(isVisible)}>
              {animate => (
                <div style={animate} className={styles.listFeatures}>
                  <Image
                    fluid={data.hosting.childImageSharp.fluid}
                    alt="Unsere shopware Agentur Leistungen auf einen Blick"
                  />
                  <h3>Unsere shopware Agentur Leistungen auf einen Blick</h3>
                  <ul>
                    <li>
                      Webshop erstellen (Import von Artikeldaten, Versandschnittstellen,
                      Datenmigration usw.)
                    </li>
                    <li>Kreation von anspruchsvollen responsive Shop-Designs</li>
                    <li>Template / Theme-Programmierung</li>
                    <li>Shopware Plug-In Entwicklung</li>
                    <li>Entwicklung von Produkt-Konfiguratoren</li>
                    <li>Bestellprozessoptimierungen</li>
                    <li>extJS-Entwicklung (Programmierung von Anpassungen im Backend)</li>
                    <li>Anbindung von Warenwirtschaftssystemen, z.B. Pickware, Sage</li>
                    <li>Kontinuierlicher Support und schneller Service</li>
                  </ul>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={animationVisible(isVisible)}>
              {animate => (
                <div style={animate} className={styles.listFeatures}>
                  <Image
                    fluid={data.programming.childImageSharp.fluid}
                    alt="Unsere shopware Agentur Leistungen auf einen Blick"
                  />
                  <h3 style={animate}>Hervorragende Online Shops - Unser Versprechen an Sie!</h3>

                  <ul>
                    <li>Zertifizierte shopware Agentur in München</li>
                    <li>
                      Unsere Plug-Ins haben allesamt herausragende Bewertungen im Community Store
                      und haben mehrere "Plug-in of the Week" - Awards erhalten
                    </li>
                    <li>Jederzeit erreichbar. Schneller und unkomplizierter Notfall-Service</li>
                    <li>Kurze Reaktionszeiten auf Ihre Anliegen</li>
                    <li>Erfahrung mit Kunden mit mehr als 50 Mio. € Jahresumsatz</li>
                    <li>
                      Proaktives Ansprechen von Verbesserungs -und Optimierungsvorschlägen zur
                      Steigerung Ihrer Shop conversion & sales
                    </li>
                  </ul>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </section>

      <Clients
        {...clients}
        title="Unsere Referenzen"
        className={styles.clients}
        sectionColor="highlight"
      />

      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Section>
            <SectionHeading
              align="center"
              isVisible={isVisible}
              caption="Shopware Agentur München - Zu Ihren Diensten"
              title="Neuer Shop gefällig?"
              subheading="Sie möchten für Ihr Unternehmen einen shopware Shop einrichten oder optimieren? Schreiben Sie uns eine E-Mail mit Ihren Wünschen und wir helfen Ihnen dabei, Ihren Traum-Webshop zu erstellen. Oder rufen Sie einfach gleich bei uns an und erläutern Sie uns Ihre aktuellen Anforderungen direkt am Telefon!"
              isVisible={isVisible}
            />
          </Section>
        )}
      </VisibilitySensor>

      <SupportSection
        textSize="small"
        sectionColor="white"
        heading={{
          title: 'Welche Warenwirtschaftssysteme gibt es für Shopware?',
          subheading:
            'Ihnen ist wichtig, Ihren Kunden neben einem ansprechenden Shop auch einen durchdachten Bestellprozess zu bieten? Hierfür ist die Nutzung eines Warenwirtschaftssystems (ERP) zu empfehlen. Dies ermöglicht den automatischen Abgleich aller Artikelinformationen und Produktdaten, die Bereitstellung aktueller Lagerbestände, den Import von Kunden- und Orderdaten sowie die automatische Benachrichtigung an Kunden bei Änderungen. Die automatischen Abgleiche und Aktionen erfolgen in der Regel über eine Schnittstelle von Warenwirtschaftssystem zu Ihrem shopware Shop. Die Schnittstellen müssen meist nicht separat entwickelt werden, sondern stehen im Community Store als kostenfreies Plug-in zur Verfügung. Sie müssen lediglich einen Vertrag mit dem Anbieter vom Warenwirtschaftssystem abschließen, um das ERP für Ihren Shop benutzen zu können. Eine kleine Auswahl an Warenwirtschaftssystem-Anbietern für shopware: Pickware, Plentymarkets, Actindo, SoftENGINE, cateno, sync4 und viele mehr. Gerne berät Ihre zertifizierte shopware Agentur Proxation aus München Sie bei der Auswahl des geeigneten ERP-Partners.'
        }}
        image={data.programming.childImageSharp.fluid}
        imageAlignment="right"
        animate={true}
      />

      <SupportSection
        textSize="small"
        heading={{
          title: 'Shopware Template Programmierung',
          subheading:
            'Sie haben ein Template im shopware Community Store gekauft und möchten es nun individualisieren, oder ein Template für Ihren Shop gleich nach Ihren Vorstellungen programmieren lassen? Die shopware AG bietet für Entwickler eine tiefgehende und solide Dokumentation ihres Systems. Dies ermöglicht die maximale Individualisierung der Shopsysteme sowie die Entwicklung von Plug-ins für Frontend-Szenarien, die zum Beispiel die Bedienbarkeit verbessern. Die Entwicklung von Plug-ins für das Backend ist selbstverständlich ebenfalls möglich. Unsere zertifizierten Template Entwickler sind für Sie da, um Ihren Wunsch-Shop zu realisieren.'
        }}
        image={data.programming.childImageSharp.fluid}
        imageAlignment="left"
        animate={true}
      />

      <SupportSection
        textSize="small"
        heading={{
          title: 'Unsere Empfehlung für Shopware Hosting Anbieter',
          subheading:
            'Die Shopware AG arbeitet mit ausgewählten Hosting-Anbietern zusammen, auf deren Server – wenn Sie möchten – die aktuellste System-Version bereits vorinstalliert ist. Das bietet den Vorteil, dass Sie ohne viel Konfigurationsaufwand sofort mit der Einrichtung Ihres Shops starten können. Wir arbeiten sehr gerne mit der maxcluster GmbH zusammen, da sie aus unserer Sicht das beste Preis-Leistungs-Verhältnis bietet. Die meisten shopware-Hosting-Partner bieten Ihnen Rabatt, wenn Sie statt monatlichen Zahlungen eine Jährliche vornehmen. Bei der Auswahl des Hosting-Pakets für Ihren Shop müssen Sie beachten, mit wie viel Besucheraufkommen Sie täglich rechnen. Kalkulieren Sie besser das erwartete Wachstum mit ein, statt zu riskieren, Ihren Server ab einem gewissen Punkt zu überlasten. Als Münchener shopware Spezialist beraten wir Sie gerne bei der Auswahl eines passenden Hosting-Partners.'
        }}
        image={data.hosting.childImageSharp.fluid}
        animate={true}
      />

      <SupportSection
        textSize="small"
        heading={{
          title: 'Die besten Shopware Plugins',
          subheading:
            'Aktuell gibt es im Community Store tausende kostenlose & kostenpflichtige Erweiterungen. Eine erste Vorauswahl können Sie über die Kategorisierung treffen. Sie sollten bei kostenpflichtigen Plugins stets auf die Bewertungen achten, um einerseits eine Bestätigung über Funktionsqualität zu erhalten und sich andererseits über der Zuverlässigkeit des Supports zu informieren.Grundsätzlich sind alle Premium-Plugins zu empfehlen, die auch immer eine kostenlose Testversion (30 Tage) bieten. Nutzen Sie diese Möglichkeit um sicherzustellen, dass diese Shopware-Plugins Ihren Vorstellungen entsprechen. Aus Usability-Sicht empfehlen wir stets unser Plugin Auto-Complete, welches bereits bei über 150 Shops zum produktiven Einsatz kommt. Darüber hinaus haben wir auch zahlreiche nicht öffentliche Plugins entwickelt.Die Experten der shopware Agentur Proxation aus München unterstützen Sie gerne in der Plug-in & Template Entwicklung - garantiert unter höchsten Qualitätsstandards und perfekt auf Ihre Bedürfnisse zugeschnitten!'
        }}
        image={data.plugins.childImageSharp.fluid}
        imageAlignment="left"
        animate={true}
      />
    </Layout>
  )
}

export default ShopwarePage
