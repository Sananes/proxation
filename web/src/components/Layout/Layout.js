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
  menu,
  showNav,
  location,
  siteTitle,
  pageTitle,
  headerTransparent
}) => (
  <>
    <Header
      data={menu}
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      pageTitle={pageTitle}
      showNav={showNav}
      headerTransparent={headerTransparent}
    />
    <React.Fragment>{children}</React.Fragment>
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Footer companyInfo={companyInfo} siteTitle={siteTitle} isVisible={isVisible} />
      )}
    </VisibilitySensor>
  </>
)

export default Layout
