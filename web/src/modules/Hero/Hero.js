import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import cn from 'classnames'
import styles from './Hero.module.scss'
import Container from '../../components/Container'
import { Spring } from 'react-spring/renderprops'

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
                  <Spring
                    from={{ opacity: 0, transform: 'translateY(-24px)' }}
                    to={{ opacity: 1, transform: 'translateY(0)' }}
                  >
                    {props => (
                      <h1 style={props} className={styles.title}>
                        {data.sanityPageHome.hero.title}
                      </h1>
                    )}
                  </Spring>
                )}

                {data.sanityPageHome.hero.subheading && (
                  <Spring
                    from={{ opacity: 0, transform: 'translateY(-24px)' }}
                    to={{ opacity: 1, transform: 'translateY(0)' }}
                    delay={200}
                  >
                    {props => (
                      <p style={props} className={styles.paragraph}>
                        {data.sanityPageHome.hero.subheading}
                      </p>
                    )}
                  </Spring>
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
