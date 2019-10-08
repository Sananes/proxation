import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import '../../styles/layout.css'
import styles from './Layout.module.scss'
import VisibilitySensor from '../VisibilitySensor'

const Layout = ({
  children,
  companyInfo,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  headerTransparent
}) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      headerTransparent={headerTransparent}
    />
    <div className={styles.content}>{children}</div>
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Footer companyInfo={companyInfo} siteTitle={siteTitle} isVisible={isVisible} />
      )}
    </VisibilitySensor>
  </>
)

export default Layout
