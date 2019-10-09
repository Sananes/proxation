import React from 'react'
import Section from '../../components/Section'
import styles from './SupportSection.module.scss'
import Image from 'gatsby-image/withIEPolyfill'
import TextBlock from '../../components/SectionHeading'
import { Spring } from 'react-spring/renderprops'
// import AnimateScroll from '../../components/VisibilitySensor'
import AnimateScroll from '../../components/AnimateScroll'

const SupportSection = ({ data, headingData, animate }) => {
  if (!data) {
    throw new Error('No features have been added in the studio')
  }

  return (
    <AnimateScroll
      condition={animate}
      partialVisibility
      children={({ isVisible }) => (
        <Section className={styles.summary}>
          <div className={styles.grid}>
            <TextBlock
              caption={headingData.caption}
              align="left"
              animate={animate}
              className={styles.heading}
              isVisible={isVisible}
              title={headingData.title}
              button={{
                text: data.button.text,
                size: 'large',
                style: 'primary',
                type: 'link',
                href: data.button.url,
                hasIcon: true
              }}
              lead={headingData.subHeading}
            />
            <Spring
              to={{
                transform: isVisible ? `translateY(0)` : `translateY(-32px)`,
                opacity: isVisible ? 1 : 0
              }}
              from={{
                transform: `translateY(-32px)`,
                opacity: 0
              }}
              delay={300}
            >
              {props => (
                <div className={styles.image} style={props}>
                  <Image
                    fluid={data.image.asset.fluid}
                    title={data.image.alt || headingData.title}
                    alt={data.image.alt || headingData.title}
                  />
                </div>
              )}
            </Spring>
          </div>
        </Section>
      )}
    />
  )
}

export default SupportSection
