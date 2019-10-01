import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Image from 'gatsby-image/withIEPolyfill'
import cn from 'classnames'
import Button from '../../components/Button'
import styles from './Hero.module.scss'
import Container from '../../components/Container'

const query = graphql`
  query heroImage {
    file(relativePath: { eq: "home-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function Hero(props) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className={cn(styles.hero, styles.dark, styles.alignCenter)}>
            <Container className={styles.container}>
              <div className={styles.content}>
                <h1 className={styles.title}>Ihre freundliche E-Commerce Agentur aus München.</h1>
                <p className={styles.paragraph}>
                  Als E-Commerce Agentur und zertifizierter shopware solutions Partner setzen wir
                  Ihre Wünsche und Vorstellungen elegant und effizient in einen modernen Online Shop
                  um.
                </p>
              </div>
            </Container>
          </div>
        )
      }}
    />
  )
}

export default Hero
