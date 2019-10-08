import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Image from 'gatsby-image/withIEPolyfill'
import { useSpring, animated } from 'react-spring'
import { mapEdgesToNodes } from '../../lib/helpers'
import VisibilitySensor from '../../components/VisibilitySensor'
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
  const { visible } = props
  return (
    <StaticQuery
      query={query}
      render={data => {
        const fade = useSpring({
          to: {
            opacity: visible ? 1 : 0
          }
        })
        const titleSlideIn = useSpring({
          to: { transform: visible ? 'translateY(0)' : 'translateY(-32px)' }
        })

        const paragraphSlideIn = useSpring({
          to: {
            transform: visible ? 'translateY(0)' : 'translateY(-32px)',
            opacity: visible ? 1 : 0
          },
          delay: 100
        })

        return (
          <animated.div className={cn(styles.hero, styles.dark, styles.alignCenter)} style={fade}>
            <Container className={styles.container}>
              <div className={styles.content}>
                {data.sanityPageHome.hero.title && (
                  <animated.h1 style={titleSlideIn} className={styles.title}>
                    {data.sanityPageHome.hero.title}
                  </animated.h1>
                )}

                {data.sanityPageHome.hero.subheading && (
                  <animated.p style={paragraphSlideIn} className={styles.paragraph}>
                    {data.sanityPageHome.hero.subheading}
                  </animated.p>
                )}
              </div>
            </Container>
          </animated.div>
        )
      }}
    />
  )
}

export default Hero
