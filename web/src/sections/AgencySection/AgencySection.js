import React from 'react'
import Section from '../../components/Section'
import TextBlock from '../../components/SectionHeading'
import Image from 'gatsby-image/withIEPolyfill'
import styles from './AgencySection.module.scss'
import BlockText from '../../components/block-text'
import { useTrail, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'

const AgencySection = props => {
  const { data, headingData, isVisible } = props
  if (!data) {
    throw new Error('No slide items have been added in the studio')
  }

  const animateItems = useTrail(data.length, {
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? `translateY(0)` : `translateY(-24px)`
    }
  })

  const fadeIn = {
    transform: isVisible ? `translateY(0)` : `translateY(-24px)`,
    opacity: isVisible ? 1 : 0
  }

  return (
    <Section className={styles.agency}>
      <div className={styles.headingWrapper}>
        <TextBlock
          caption={headingData.caption}
          align="left"
          className={styles.heading}
          title={headingData.title}
          isVisible={isVisible}
        />
        <Spring to={fadeIn}>
          {props => (
            <p className={styles.lead} style={props}>
              {headingData.subHeading}
            </p>
          )}
        </Spring>
      </div>
      <div className={styles.grid}>
        {animateItems.map((props, index) => (
          <animated.div className={styles.item} key={index} style={props}>
            <Spring to={fadeIn}>
              {props => (
                <Image
                  style={props}
                  fluid={data[index].image.asset.fluid}
                  title={data[index].image.alt || data[index].title}
                  alt={data[index].image.alt || data[index].image.title}
                />
              )}
            </Spring>

            <Spring to={fadeIn} delay={100}>
              {props => (
                <h4 className={styles.title} style={props}>
                  {data[index].title}
                </h4>
              )}
            </Spring>

            <Spring to={fadeIn} delay={300}>
              {props => <BlockText blocks={data[index]._rawContent} />}
            </Spring>
          </animated.div>
        ))}
      </div>
    </Section>
  )
}

export default AgencySection
