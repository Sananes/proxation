import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Icon from '../icons'
import { CSSTransition } from 'react-transition-group'
import cn from 'classnames'
import Headroom from 'react-headroom'

import styles from './Header.module.scss'
import './headroom.scss'

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

  const NavItem = ({ item }) => {
    let { link, submenu } = item

    return (
      <li className={styles.navItem} key={item._key}>
        <Link
          onClick={showNav ? onHideNav : onShowNav}
          to={(link.navLink && resolveType(link.navLink.reference)) || '/'}
        >
          {link.name}
        </Link>

        {submenu != null && (
          <ul className={styles.subMenu}>
            {submenu.map(subitem => {
              return (
                <li className={styles.navItemChild} key={subitem._key}>
                  <Link to={(subitem.navLink && resolveType(subitem.navLink.reference)) || '/'}>
                    {subitem.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </li>
    )
  }

  const RenderNav = ({ items, ...props }) => {
    const [first, two] = items
    const rest = items.slice(2)
    if (items.length > 0) {
      return (
        <React.Fragment>
          <ul className={cn(styles.menuBlock)}>
            <NavItem item={first} {...props} />
          </ul>
          <ul className={cn(styles.menuBlock)}>
            <NavItem item={two} {...props} />
          </ul>
          <ul className={cn(styles.menuBlock, styles.menuBlockLast)}>
            {rest.map(item => (
              <NavItem item={item} {...props} />
            ))}
          </ul>
        </React.Fragment>
      )
    } else {
      return (
        <ul className="singleElement">
          {items.map(item => (
            <NavItem item={item} />
          ))}
        </ul>
      )
    }
  }

  return (
    <>
      <Headroom
        disableInlineStyles
        pinStart={0}
        className={cn(`header`, showNav && `headroom-shownav`)}
      >
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
                  <Link className={styles.branding} onClick={showNav && onHideNav} to="/">
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
              <RenderNav items={data} />
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
