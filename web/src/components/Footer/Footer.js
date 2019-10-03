import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container'
import styles from './Footer.module.scss'
import Icon from '../icons'
import cn from 'classnames'

const Footer = ({ companyInfo, siteTitle }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerWrapper}>
        <div className={styles.contact}>
          <Link to="/" className={styles.logo}>
            <Icon symbol="logo" />
          </Link>
          <p>
            Proxation GmbH ist Ihre zuverlässige Münchner shopware Agentur - Ihr erster
            Ansprechpartner wenn es um Web- und mobile Commerce, mobile Optimierung, Template
            Entwicklung, responsive Designs und shopware Plug-ins geht.
          </p>
          <ul className={styles.contactInfo}>
            <li>
              <a href="mailto:lanzahomeslanzarote@gmail.com">
                <strong>Call:</strong> +49 (0) 89 4275 9987
              </a>
            </li>
            <li>
              <a href="mailto:lanzahomeslanzarote@gmail.com">
                <strong>Email:</strong> info@proxation.de
              </a>
            </li>
          </ul>
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
                  <Link to="/about/">Blog</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/projects/">Erfolge</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/blog/">Kontakt</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/contact/">Impressum</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/contact/">Datenschutz</Link>
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
                  <Link to="/about/">Blog</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/projects/">Erfolge</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/blog/">Kontakt</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/contact/">Impressum</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/contact/">Datenschutz</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.menu}>
            <nav className={styles.nav}>
              <h5>Information</h5>
              <ul>
                <div className="menu" />
                <li className={styles.navItem}>
                  <Link to="/about/">Blog</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/projects/">Erfolge</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/blog/">Kontakt</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/contact/">Impressum</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/contact/">Datenschutz</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.menu}>
            <nav className={styles.nav}>
              <h5>Kontakten</h5>
              <ul>
                <div className="menu" />
                <li className={styles.navItem}>
                  <Link to="/about/">Blog</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/projects/">Erfolge</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/blog/">Kontakt</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/contact/">Impressum</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/contact/">Datenschutz</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
