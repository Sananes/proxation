import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container'
import Input from '../Input'
import Button from '../Button'
import { Spring } from 'react-spring/renderprops'
import styles from './Footer.module.scss'
import Icon from '../icons'
import Image from 'gatsby-image/withIEPolyfill'
import GatsbyLink from 'gatsby-link'

const Footer = ({ companyInfo, siteTitle, isVisible }) => {
  return (
    <Spring
      to={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? `translateY(0)` : `translateY(-24px)`
      }}
    >
      {props => (
        <footer className={styles.footer} style={props}>
          <Container className={styles.footerWrapper}>
            <div className={styles.contact}>
              <Link to="/" className={styles.logo}>
                <Icon symbol="logo" />
              </Link>
              <p className={styles.info}>
                Proxation GmbH ist Ihre zuverlässige Münchner shopware Agentur - Ihr erster
                Ansprechpartner wenn es um Web- und mobile Commerce, mobile Optimierung, Template
                Entwicklung, responsive Designs und shopware Plug-ins geht.
              </p>
              {companyInfo && (
                <ul className={styles.social}>
                  {companyInfo.social.map(item => (
                    <li key={item._key}>
                      <a href={item.link ? item.link : '#'}>
                        <img
                          src={item.image && item.image.asset && item.image.asset.url}
                          alt={item.title || item.image.alt}
                          className={styles.image}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <div className={styles.newsletter}>
                <h3 className={styles.title}>Subscribe to our Newsletter</h3>
                <form className={styles.wrapper}>
                  <Input placeholder="Enter email address" />
                  <Button color="primary" type="button" text="Absenden" />
                </form>
              </div>
              <div className={styles.siteInfo}>
                © Copyright {new Date().getFullYear()}, built by{' '}
                <a href="https://www.gatsbyjs.org">Sananes & Co</a>
              </div>
            </div>
            <div className={styles.menuWrapper}>
              <div className={styles.menu}>
                <nav className={styles.nav}>
                  <h5>Über Proxation</h5>
                  <ul>
                    <div className="menu" />
                    <li className={styles.navItem}>
                      <Link to="/e-commerce-blog/">Blog</Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link to="/e-commerce-referenzen/">Erfolge</Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link to="/kontakt/">Kontakt</Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link to="/impressum/">Impressum</Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link to="/datenschutz/">Datenschutz</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className={styles.menu}>
                <nav className={styles.nav}>
                  <h5>E-commerce Agentur München</h5>
                  <ul>
                    <div className="menu" />
                    <li className={styles.navItem}>
                      <Link to="/shopware-agentur-muenchen/">Shopware Shops</Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link to="/services/ecommerce-beratung/">E-Commerce Beratung</Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link to="/services/shopware-plugin-programmierung">
                        Shopware Plug-in Entwicklung
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link to="/unternehmenswebsites/">Unternehmenswebsites</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className={styles.menu}>
                <nav className={styles.nav}>
                  <h5>Kontaktdaten</h5>
                  <address>
                    Proxation GmbH
                    <br /> c/o WeWork
                    <br /> Oskar-von-Miller-Ring 20
                    <br /> 80333 München
                  </address>
                </nav>
              </div>

              <div className={styles.menu}>
                <nav className={styles.nav}>
                  <ul>
                    <li>
                      <a href="tel:+49(0)8942759987 ">+49 (0) 89 4275 9987</a>
                    </li>
                    <li>
                      <a href="mailto:info@proxation.de">info@proxation.de</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Container>
        </footer>
      )}
    </Spring>
  )
}

export default Footer
