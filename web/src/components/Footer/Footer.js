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
        {/*    <div className={styles.companyAddress}>
          {companyInfo && (
            <p>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </p>
          )}
              </div> */}

        <div className={styles.contact}>
          <Link to='/' className={styles.logo}>
            <Icon symbol='logo' />
          </Link>
          <ul className={styles.contactInfo}>
            <li>
              <a href='mailto:lanzahomeslanzarote@gmail.com'>
                <strong>Call:</strong> +34 606 130 265
              </a>
            </li>
            <li>
              <a href='mailto:lanzahomeslanzarote@gmail.com'>
                <strong>Email:</strong> lanzahomeslanzarote@gmail.com
              </a>
            </li>
          </ul>
          <div className={styles.siteInfo}>
            © Copyright {new Date().getFullYear()}, built by{' '}
            <a href='https://www.gatsbyjs.org'>Sananes & Co</a>
          </div>
        </div>

        <div className={styles.menu}>
          <nav className={styles.nav}>
            <ul>
              <div className='menu' />
              <li className={styles.navItem}>
                <Link to='/about/'>The Villa</Link>
              </li>
              <li className={styles.navItem}>
                <Link to='/projects/'>Out &amp; About</Link>
              </li>
              <li className={styles.navItem}>
                <Link to='/blog/'>Availability</Link>
              </li>
              <li className={styles.navItem}>
                <Link to='/contact/'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.partners}>
          <ul>
            <li>
              <Icon symbol='airbnb' />
            </li>
            <li>
              <Icon symbol='ownersdirect' />
            </li>
            <li>
              <Icon symbol='espanabreaks' />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
