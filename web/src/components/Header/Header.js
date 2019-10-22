import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Icon from '../icons'
import { useTrail, animated } from 'react-spring'
import { CSSTransition } from 'react-transition-group'
import cn from 'classnames'
import Headroom from 'react-headroom'

import styles from './Header.module.scss'
import './headroom.scss'
import { Spring } from 'react-spring/renderprops'

function resolveType(item) {
  const slug = item.slug && item.slug.current

  switch (item._type) {
    case 'landingPage':
      return `/${slug}`
    case 'post':
      return `/blog/${slug}`
    case 'project':
      return `/project/${slug}`
    default:
      return slug
  }
}

const NavItem = ({ item }) => {
  let { link, submenu, key: _key } = item
  return (
    <li key={item.key}>
      <a href={link.navLink && resolveType(link.navLink.reference)}>{link.name}</a>

      {submenu != null && (
        <ul>
          {submenu.map((subitem, i) => {
            return (
              <li key={subitem._key}>
                <a href={subitem.navLink && resolveType(subitem.navLink.reference)}>
                  {subitem.name}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

const Header = ({
  data,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  headerTransparent,
  ...props
}) => {
  const animationTime = 1200

  return (
    <>
      <Headroom disableInlineStyles pinStart={0} className={showNav && `headroom-shownav`}>
        {/* <ul style={{ position: 'fixed', top: '100px' }}>
          {data.map((item, index) => (
            <NavItem item={item} />
          ))}
          </ul> */}
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
              <div className={styles.titleWrapper}>
                <h1 className={styles.branding}>
                  <Link className={styles.branding} to="/">
                    <Icon symbol="logo" />
                    <span className={styles.title}>{siteTitle}</span>
                  </Link>
                </h1>
                {props.pageTitle && (
                  <span>
                    &mdash;<span>{props.pageTitle}</span>
                  </span>
                )}
              </div>

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
                  <Link to="/shopware/">
                    <span>01</span>Shopware
                  </Link>
                  <ul className={styles.subMenu}>
                    <li className={styles.navItemChild}>
                      <Link to="/shopware/">Shopware 6</Link>
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
                  <Link to="/projects/">
                    <span>03</span>Referenzen
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/shop/">
                    <span>04</span>Shop
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/jobs/">
                    <span>05</span>Jobs
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/blog/">
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
      {/* <div>
        {data.map((item, index) => (
          <Spring to={{ opacity: showNav ? 1 : 0 }} delay={100 * index}>
            {props => (
              <ul>
                <li style={props} key={index + 1}>
                  {item.name}
                  {item.dropdown != null && (
                    <ul>
                      {item.dropdown.map((item, index) => (
                        <Spring to={{ opacity: showNav ? 1 : 0 }} delay={100 * index}>
                          {props => <li style={props}>{item.name}</li>}
                        </Spring>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </Spring>
        ))}
                      </div> */}
    </>
  )
}

export default Header
