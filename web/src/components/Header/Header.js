import { Link } from 'gatsby'
import React from 'react'
import Icon from '../icons'
import cn from 'classnames'

import styles from './Header.module.scss'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, headerTransparent }) => (
  <div className={cn(styles.root, headerTransparent && styles.transparent)}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link className={styles.branding} to="/">
          <Icon symbol="logo" />
        </Link>
      </h1>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>
      {/* <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <div className="menu" />
          <li className={styles.navItem}>
            <Link to="/about/">The Villa</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/projects/">Out &amp; About</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/blog/">Availability</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
</nav> */}
    </div>
  </div>
)

export default Header
