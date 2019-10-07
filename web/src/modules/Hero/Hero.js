import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Image from 'gatsby-image/withIEPolyfill'
import cn from 'classnames'
import Button from '../../components/Button'
import styles from './Hero.module.scss'
import Container from '../../components/Container'

const query = graphql`
  query hero {
    sanityPageHome {
      hero {
        title
        subheading
        caption
        button {
          text
          url
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
                {data.sanityPageHome.hero.title && (
                  <h1 className={styles.title}>{data.sanityPageHome.hero.title}</h1>
                )}
                {data.sanityPageHome.hero.subheading && (
                  <p className={styles.paragraph}>{data.sanityPageHome.hero.subheading}</p>
                )}
              </div>
            </Container>
          </div>
        )
      }}
    />
  )
}

export default Hero
