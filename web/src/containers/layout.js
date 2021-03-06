import { graphql, StaticQuery } from 'gatsby'
import React, { useState } from 'react'
import Layout from '../components/Layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    headerNav: sanityNavigationSettings {
      _rawHeaderNav(resolveReferences: { maxDepth: 54 })
    }
    companyInfo: sanityCompanyInfo {
      name
      address1
      address2
      zipCode
      city
      country
      social {
        _key
        title
        image {
          asset {
            url
            fluid(maxWidth: 240) {
              ...GatsbySanityImageFluid
            }
          }
          alt
          caption
        }
        link
      }
    }
  }
`

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false)
  const { location, fullWidth } = props
  function handleShowNav() {
    setShowNav(true)
  }
  function handleHideNav() {
    setShowNav(false)
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        {
          if (!data.site) {
            throw new Error(
              'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
            )
          }

          if (!data.companyInfo) {
            throw new Error(
              'Missing "Company info". Open the studio at http://localhost:3333 and add "Company info" data'
            )
          }
        }
        return (
          <>
            <Layout
              {...props}
              showNav={showNav}
              companyInfo={data.companyInfo}
              siteTitle={data.site.title}
              menu={data.headerNav._rawHeaderNav}
              onHideNav={handleHideNav}
              fullWidth={fullWidth}
              onShowNav={handleShowNav}
              location={location}
            />
          </>
        )
      }}
    />
  )
}

export default LayoutContainer
