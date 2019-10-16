import React from 'react'
import Section from '../../components/Section'
import styles from './SupportSection.module.scss'
import Image from 'gatsby-image/withIEPolyfill'
import TextBlock from '../../components/SectionHeading'
import { Spring } from 'react-spring/renderprops'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity'
import VisibilitySensor from '../../components/VisibilitySensor'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

const SupportSection = props => {
  const { animate, sectionColor, heading, button, image } = props
  if (!heading && !image) {
    throw new Error('No image or text have been added in the studio for the Text with Image')
  }
  const sanityConfig = { projectId: 'rks6ojwp', dataset: 'production' }
  const imageAssetId = image.asset._id
  const fluidProps = getFluidGatsbyImage(imageAssetId, { maxWidth: 1024 }, sanityConfig)

  return (
    <VisibilitySensor
      partialVisibility
      once
      children={({ isVisible }) => (
        <Section className={styles.summary} sectionColor={sectionColor}>
          <div className={styles.grid}>
            <TextBlock
              caption={heading.caption}
              align="left"
              animate={animate}
              className={styles.heading}
              isVisible={isVisible}
              title={heading.title}
              button={
                button && {
                  text: button.text,
                  size: 'large',
                  style: 'primary',
                  type: 'link',
                  href: button.url,
                  hasIcon: true
                }
              }
              sectionColor={sectionColor}
              lead={heading.subHeading}
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
              {animation => (
                <div className={styles.image} style={animation}>
                  <Image
                    fluid={fluidProps}
                    title={image.alt || heading.title}
                    alt={image.alt || heading.title}
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
