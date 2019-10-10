import React from 'react'
import { Link } from 'gatsby'
import Icon from '../icons'
import { useSpring, animated } from 'react-spring'
import cn from 'classnames'
import { CSSTransition } from 'react-transition-group'
import Headroom from 'react-headroom'

import styles from './Header.module.scss'
import './headroom.scss'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, headerTransparent }) => {
  const animationTime = 1200

  return (
    <>
      <Headroom disableInlineStyles pinStart={0} className={showNav && `headroom-shownav`}>
        <CSSTransition
          in={showNav}
          timeout={animationTime}
          classNames={{
            enter: styles.animate,
            enterActive: styles.animateEnterActive,
            enterDone: styles.animateEnterDone,
            exit: styles.animateExit,
            exitActive: styles.animateExitActive,
            exitDone: styles.animateExitDone
          }}
        >
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
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </CSSTransition>
      </Headroom>

      <CSSTransition
        in={showNav}
        timeout={animationTime}
        classNames={{
          enter: styles.animateEnter,
          enterActive: styles.animateEnterActive,
          enterDone: styles.animateEnterDone,
          exit: styles.animateExit,
          exitActive: styles.animateExitActive,
          exitDone: styles.animateExitDone
        }}
        unmountOnExit
      >
        <div className={cn(styles.nav, showNav && styles.showNav, showNav && styles.animate)}>
          <div className={styles.container}>
            <nav className={styles.menuWrapper}>
              <ul className={cn(styles.menuBlock)}>
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
              <ul className={cn(styles.menuBlock)}>
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
            <div className={cn(styles.bottomWrapper)}>
              <address className={cn(styles.address, styles.block)}>
                Proxation GmbH
                <br /> c/o WeWork
                <br /> Oskar-von-Miller-Ring 20
                <br /> 80333 München
              </address>
              <div className={cn(styles.kontakt, styles.block)}>
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
      </CSSTransition>
    </>
  )
}

export default Header
