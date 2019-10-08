import React from 'react'
import Section from '../../components/Section'
import styles from './SupportSection.module.scss'
import Image from 'gatsby-image/withIEPolyfill'
import TextBlock from '../../components/SectionHeading'
import { Spring } from 'react-spring/renderprops'

const SupportSection = ({ data, headingData, isVisible }) => {
  if (!data) {
    throw new Error('No features have been added in the studio')
  }
  return (
    <Section className={styles.summary} isVisible={isVisible}>
      <div className={styles.grid}>
        <TextBlock
          caption={headingData.caption}
          align="left"
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
  )
}

export default SupportSection
