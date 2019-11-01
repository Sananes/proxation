import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import Container from '../components/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/Seo'
import styles from './scss/Jobs.module.scss'
import Layout from '../containers/layout'
import Image from 'gatsby-image/withIEPolyfill'
import Icon from '../components/icons'
import { fadeOnVisible } from '../lib/helpers'
import Button from '../components/Button'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from '../components/VisibilitySensor'

export const query = graphql`
  query JobsPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)jobs/" }) {
      id
      title
      _rawBody
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
  }
`

const JobsPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  // const page = data && data.page

  // if (!page) {
  //   throw new Error(
  //     'Missing "Jobs" page data. Open the studio at http://localhost:3333 and add "Jobs" page data and restart the development server.'
  //   )
  // }

  return (
    <Layout>
      <SEO title="Treten Sie unserem wachsenden Team bei" />
      <Container className={styles.hero}>
        <Spring
          from={{ opacity: 0, transform: 'translateY(-24px)' }}
          to={{ opacity: 1, transform: 'translateY(0)' }}
        >
          {animate => (
            <h1 style={animate} className={styles.title}>
              Treten Sie unserem wachsenden Team bei
            </h1>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0, transform: 'translateY(-24px)' }}
          to={{ opacity: 1, transform: 'translateY(0)' }}
          delay={300}
        >
          {animate => (
            <p style={animate} className={styles.lead}>
              Denken ist die schwerste Arbeit, die es gibt. Das ist wahrscheinlich auch der Grund,
              warum sich so wenig Leute damit beschäftigen.
            </p>
          )}
        </Spring>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={fadeOnVisible(isVisible)} delay={600}>
              {animate => (
                <Image
                  style={animate}
                  fluid={data.plugins.childImageSharp.fluid}
                  className={styles.imageOne}
                />
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={fadeOnVisible(isVisible)} delay={800}>
              {animate => (
                <Image
                  style={animate}
                  fluid={data.plugins.childImageSharp.fluid}
                  className={styles.imageTwo}
                />
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={fadeOnVisible(isVisible)}>
              {animate => (
                <p style={animate} className={styles.sublead}>
                  Wir bei Proxation überlegen uns stetig, wie wir bestehendes für Mitarbeiter noch
                  besser machen können. Wir legen großen Wert darauf, das unsere Mitarbeiter
                  motiviert und mit gezielter Eigeninitiative die Probleme unserer Kunden lösen und
                  dabei stets freundlich auftreten. Im Gegenzug bieten wir hohe Flexibilität bei der
                  Task-Abarbeitung und großen Raum für das Einbringen eigener Ideen und
                  Verbesserungsvorschläge. Durch die flache Unternehmensstruktur hat jeder
                  Mitarbeiter großen Einfluss auf Abläufe und Prozesse.
                </p>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </Container>

      <section className={styles.vacancy}>
        <Container className={styles.container}>
          <div className={styles.sectionTitle}>
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring to={fadeOnVisible(isVisible)}>
                  {animate => (
                    <small style={animate}>
                      Karrieremöglichkeiten - Ecommerce Agentur Proxation
                    </small>
                  )}
                </Spring>
              )}
            </VisibilitySensor>

            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring to={fadeOnVisible(isVisible)} delay={300}>
                  {animate => <h2 style={animate}>Starte bei uns durch!</h2>}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
          <div className={styles.jobs}>
            <Accordion allowZeroExpanded={true}>
              <AccordionItem className={styles.accordianItem}>
                <AccordionItemHeading className={styles.accordianItemHeading}>
                  <AccordionItemButton className={styles.accordianItemButton}>
                    <h3>Senior Shopware Entwickler</h3>
                    <AccordionItemState>
                      {({ expanded }) => <Icon symbol={expanded ? 'minus' : 'plus'} />}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionItemPanel}>
                  <p>
                    Anstellungsart:
                    <strong>Festanstellung Deine Aufgaben:</strong>
                  </p>
                  <ul>
                    <li>
                      Konzeption und Entwicklung von Erweiterungen und Modulen für Shopware zur
                      Optimierung von Kauf- und Arbeitsprozessen
                    </li>
                    <li>&zwj;Realisierung von anspruchsvollen Designs und deren Optimierung</li>
                    <li>
                      &zwj;Systematische Planung, Durchführung und Qualitätssicherung von Projekten
                    </li>
                    <li>
                      Fortwährende Fehleranalyse und -beseitigung unter dem Gesichtspunkt der
                      Software-Qualität
                    </li>
                  </ul>
                  <p>
                    <strong>Diese Skills bringst du mit:</strong>
                  </p>
                  <ul>
                    <li>&zwj;Erfahrungen mit Shopware 5</li>
                    <li>Kenntnisse der Theme-Struktur und Plugin-Entwicklung</li>
                    <li>&zwj;PHP, Smarty, LESS, CSS &amp; HTML 5 sagt dir was</li>
                    <li>&zwj;Javascript &amp;MySQL hast du auch schon mal irgendwo geh&ouml;rt</li>
                    <li>
                      &zwj;Idealerweise erg&auml;nzt durch Kenntnisse in Frameworks (bspw. Symfony),
                      GIT
                    </li>
                  </ul>

                  <p>
                    <strong>Wir bieten Dir:</strong>
                  </p>
                  <ul>
                    <li>
                      &zwj;Abwechslung (Programmierung, Projektmanagement &amp; ggf. Kundentermine)
                    </li>
                    <li>
                      Enge Zusammenarbeit mit&nbsp;Unternehmen aus der Fashion &amp; Lifestyle
                      Branche
                    </li>
                    <li>&zwj;Flexible Arbeitszeiten sowie Home-Office M&ouml;glichkeiten</li>
                    <li>Vielf&auml;ltige Entwicklungsm&ouml;glichkeiten</li>
                  </ul>

                  <Button type="link" hasIcon={true} text="Apply" color="primary" to="/" />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className={styles.accordianItem}>
                <AccordionItemHeading className={styles.accordianItemHeading}>
                  <AccordionItemButton className={styles.accordianItemButton}>
                    <h3>Senior PHP Entwickler</h3>
                    <AccordionItemState>
                      {({ expanded }) => <Icon symbol={expanded ? 'minus' : 'plus'} />}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionItemPanel}>
                  <p>
                    <strong>Deine Aufgaben:</strong>
                  </p>
                  <ul>
                    <li>
                      Konzeption und Entwicklung von Erweiterungen und Modulen f&uuml;r Shopware zur
                      Optimierung von Kauf- und Arbeitsprozessen
                    </li>
                    <li>Realisierung von anspruchsvollen Designs und deren Optimierung</li>
                    <li>
                      Systematische Planung, Durchf&uuml;hrung und Qualit&auml;tssicherung von
                      Projekten
                    </li>
                    <li>
                      Fortw&auml;hrende Fehleranalyse und -beseitigung unter dem Gesichtspunkt der
                      Software-Qualit&auml;t
                    </li>
                  </ul>
                  <p>
                    <strong>Diese Skills bringst du mit:</strong>
                  </p>
                  <p>
                    Abgeschlossene Berufsausbildung als Fachinformatiker/Anwendungsentwickler oder
                    alternativ abgeschlossenes Studium der Informatik
                  </p>
                  <ul>
                    <li>Erfahrung in der Umsetzung und Pflege von Web-Applikationen</li>
                    <li>Im Idealfall erste Erfahrungen mit&nbsp;Shopware</li>
                    <li>
                      Gutes Verst&auml;ndnis f&uuml;r Sicherheits- und Performancema&szlig;nahmen,
                      Anwendungsarchitekturen und Design Patterns
                    </li>
                    <li>Flie&szlig;end Deutsch, Englisch w&uuml;nschenswert</li>
                    <li>
                      F&auml;higkeit, konzeptionell zu denken sowie zuverl&auml;ssige, strukturierte
                      und eigenst&auml;ndigeArbeitsweise
                    </li>
                    <li>Hohe Kunden- und Zielorientierung</li>
                  </ul>
                  <p>
                    <strong>Wir bieten Dir:</strong>
                  </p>
                  <ul>
                    <li>Ein solide expandierendes Unternehmen in einem spannenden Marktumfeld</li>
                    <li>Zusammenarbeit in einem Team mit unterschiedlichen Berufsgruppen</li>
                    <li>Moderne Unternehmensphilosophie mit flexiblen M&ouml;glichkeiten</li>
                    <li>Diverse Weiterentwicklungsm&ouml;glichkeiten</li>
                  </ul>
                  <Button type="link" hasIcon={true} text="Apply" color="primary" to="/" />
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className={styles.accordianItem}>
                <AccordionItemHeading className={styles.accordianItemHeading}>
                  <AccordionItemButton className={styles.accordianItemButton}>
                    <h3>SEO/SEA Manager</h3>
                    <AccordionItemState>
                      {({ expanded }) => <Icon symbol={expanded ? 'minus' : 'plus'} />}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionItemPanel}>
                  <p>
                    Anstellungsart:&nbsp;
                    <strong>
                      Festanstellung
                      <br />
                      <br />
                      Deine Aufgaben
                      <br />
                    </strong>
                  </p>
                  <ul>
                    <li>Analyse der SEO-Platzierung unserer Kunden</li>
                    <li>
                      Beratung, Konzeption, Umsetzung von f&uuml;r den Kunden geeignete
                      SEO-Ma&szlig;nahmen
                    </li>
                    <li>
                      Kontinuierliche On- und Off-Page-Optimierung unserer eigenen Website
                      (Proxation)
                    </li>
                    <li>
                      Beobachtung der Entwicklung des Suchmaschinenmarktes und Nutzung der
                      entstehenden M&ouml;glichkeiten
                    </li>
                    <li>
                      Auswertung von relevanten&nbsp;SEO-KPIs inklusive der Entwicklung und
                      Umsetzung geeigneter Optimierungsma&szlig;nahmen &amp; Reporting
                      <br />
                      <br />
                    </li>
                  </ul>
                  <p>
                    <strong>Diese Skills bringst du mit:</strong>
                  </p>
                  <ul>
                    <li>
                      Erfolgreich abgeschlossenes Studium der Wirtschaftswissenschaften oder eines
                      vergleichbaren Studiengangs mit Schwerpunkt Marketing, alternativ eine
                      abgeschlossene Berufsausbildung mit relevanter Berufserfahrung
                    </li>
                    <li>
                      Gute Kenntnisse der Google-Produktpalette und der g&auml;ngigen SEO-Tools
                    </li>
                    <li>
                      Erfahrung in der Content-Optimierung und Kenntnisse &uuml;ber die Grundlagen
                      der technischen Optimierung (On- und Off-Page)
                    </li>
                    <li>
                      Erfahrung in der Arbeit mit Suchmaschinen sowie gutes technisches
                      Verst&auml;ndnis der g&auml;ngigen Webtechnologien (wie z.B. HTML, CSS)
                    </li>
                    <li>Ausgepr&auml;gte analytische und konzeptionelle F&auml;higkeiten</li>
                    <li>Verhandlungssichere Deutsch- und Englischkenntnisse</li>
                    <li>
                      Idealerweise Interesse f&uuml;r E-Commerce und Fashion &amp; Lifestyle
                      <br />
                      <br />
                    </li>
                  </ul>
                  <p>
                    <strong>Wir beiten dir:</strong>
                  </p>
                  <ul>
                    <li>
                      &zwj;Ein solide expandierendes Unternehmen in einem spannenden Marktumfeld
                    </li>
                    <li>Intensive Zusammenarbeit mit unserem eCommerce-Team</li>
                    <li>Moderne Unternehmensphilosophie mit flexiblen M&ouml;glichkeiten</li>
                    <li>Diverse Weiterentwicklungsm&ouml;glichkeiten</li>
                  </ul>
                  <Button type="link" hasIcon={true} text="Apply" color="primary" to="/" />
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <section className={styles.gallery}>
        <Container className={styles.container}>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {animate => (
                  <h3 style={animate}>
                    Dein zukünftiges Zuhause - <br />
                    WeWork in München
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)} delay={300}>
                {animate => (
                  <p style={animate}>
                    Wir bei Proxation überlegen uns stetig, wie wir bestehendes für Mitarbeiter noch
                    besser machen können. Wir legen großen Wert darauf, das unsere Mitarbeiter
                    motiviert und mit gezielter Eigeninitiative die Probleme unserer Kunden lösen
                    und dabei stets freundlich auftreten. Im Gegenzug bieten wir hohe Flexibilität
                    bei der Task-Abarbeitung und großen Raum für das Einbringen eigener Ideen und
                    Verbesserungsvorschläge. Durch die flache Unternehmensstruktur hat jeder
                    Mitarbeiter großen Einfluss auf Abläufe und Prozesse.
                  </p>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {animate => (
                  <Image
                    style={animate}
                    fluid={data.plugins.childImageSharp.fluid}
                    className={styles.image}
                  />
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {animate => (
                  <Image
                    style={animate}
                    fluid={data.plugins.childImageSharp.fluid}
                    className={styles.image}
                  />
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)} delay={300}>
                {animate => (
                  <Image
                    style={animate}
                    fluid={data.plugins.childImageSharp.fluid}
                    className={styles.image}
                  />
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {animate => (
                  <Image
                    style={animate}
                    fluid={data.plugins.childImageSharp.fluid}
                    className={styles.image}
                  />
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </Container>
      </section>

      {/* <BlockContent blocks={page._rawBody || []} /> */}
    </Layout>
  )
}

export default JobsPage
