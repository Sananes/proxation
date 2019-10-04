import React, { useState } from 'react'
import { Link } from 'gatsby'
import Icon from '../icons'
import cn from 'classnames'

import styles from './Header.module.scss'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, headerTransparent }) => {
  return (
    <>
      <div
        className={cn(
          styles.root,
          headerTransparent && styles.transparent,
          showNav && styles.showNav
        )}
      >
        <div className={styles.wrapper}>
          <h1 className={styles.branding}>
            <Link className={styles.branding} to="/">
              <Icon symbol="logo" />
              <span className={styles.title}>{siteTitle}</span>
            </Link>
          </h1>

          <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol={(showNav && `close`) || `hamburger`} />
          </button>
        </div>
      </div>

      <div className={cn(styles.nav, showNav && styles.showNav)}>
        <div className={styles.container}>
          <nav className={styles.menuWrapper}>
            <ul className={styles.menuBlock}>
              <li className={styles.navItem}>
                <Link to="/about/">
                  <span>01</span>Shopware
                </Link>
                <ul className={styles.subMenu}>
                  <li className={styles.navItemChild}>
                    <Link to="/about/">Shopware 6</Link>
                  </li>
                  <li className={styles.navItemChild}>
                    <Link to="/about/">Shopware online shops</Link>
                  </li>
                  <li className={styles.navItemChild}>
                    <Link to="/about/">eCommerce Beratung</Link>
                  </li>
                  <li className={styles.navItemChild}>
                    <Link to="/about/">Plugin Entwicklung</Link>
                  </li>
                  <li className={styles.navItemChild}>
                    <Link to="/about/">Unternehmensswebsites</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className={styles.menuBlock}>
              <li className={styles.navItem}>
                <Link to="/projects/">
                  <span>02</span>Spezialitäten
                </Link>
                <ul className={styles.subMenu}>
                  <li className={styles.navItemChild}>
                    <Link to="/about/">Amazon Marketing</Link>
                  </li>
                  <li className={styles.navItemChild}>
                    <Link to="/about/">Braintree Payments</Link>
                  </li>
                  <li className={styles.navItemChild}>
                    <Link to="/about/">Pickware Warenwirtschaft</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className={cn(styles.menuBlock, styles.menuBlockLast)}>
              <li className={styles.navItem}>
                <Link to="/blog/">
                  <span>03</span>Referenzen
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contact/">
                  <span>04</span>Shop
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contact/">
                  <span>05</span>Jobs
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contact/">
                  <span>06</span>Blog
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contact/">
                  <span>07</span>Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.bottomWrapper}>
            <address className={styles.address}>
              Proxation GmbH
              <br /> c/o WeWork
              <br /> Oskar-von-Miller-Ring 20
              <br /> 80333 München
            </address>
            <div className={styles.kontakt}>
              <ul>
                <li>
                  <Link to="/">+49 (0) 89 4275 9987</Link>
                </li>
                <li>
                  <Link to="/">info@proxation.de</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
