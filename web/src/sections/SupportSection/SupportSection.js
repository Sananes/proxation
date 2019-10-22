import React from 'react'
import Section from '../../components/Section'
import styles from './SupportSection.module.scss'
import Image from 'gatsby-image/withIEPolyfill'
import cn from 'classnames'
import TextBlock from '../../components/SectionHeading'
import { Spring } from 'react-spring/renderprops'
import { getSanityImageFluid, mobileAlignmentClass, alignmentClass } from '../../lib/helpers'
import VisibilitySensor from '../../components/VisibilitySensor'

const SupportSection = props => {
  const {
    animate,
    sectionColor,
    heading,
    button,
    image,
    imageAlignment: align,
    mobileImageAlignment
  } = props
  if (!heading && !image) {
    throw new Error('No image or text have been added in the studio for the Text with Image')
  }

  return (
    <VisibilitySensor
      partialVisibility
      once
      children={({ isVisible }) => (
        <Section className={styles.summary} sectionColor={sectionColor} {...align}>
          <div
            className={cn(
              styles.grid,
              alignmentClass(align, styles),
              mobileAlignmentClass(mobileImageAlignment, styles)
            )}
          >
            <TextBlock
              caption={heading.caption}
              animate={animate}
              className={styles.heading}
              isVisible={isVisible}
              title={heading.title}
              align="left"
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
            {image && image.asset && (
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
                      fluid={getSanityImageFluid(image) || []}
                      title={image.alt || heading.title}
                      alt={image.alt || heading.title}
                    />
                  </div>
                )}
              </Spring>
            )}
          </div>
        </Section>
      )}
    />
  )
}

export default SupportSection
