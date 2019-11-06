import React from 'react'
import Image from 'gatsby-image/withIEPolyfill'
import Section from '../../components/Section'
import TextBlock from '../../components/SectionHeading'
import { Spring } from 'react-spring/renderprops'
import cn from 'classnames'
import { getSanityImageFluid, mobileAlignmentClass, alignmentClass } from '../../lib/helpers'
import VisibilitySensor from '../../components/VisibilitySensor'

import styles from './SupportSection.module.scss'

const SupportSection = props => {
  const {
    animate,
    sectionColor,
    button,
    image,
    textSize,
    imageAlignment: align,
    mobileImageAlignment
  } = props

  if (!props) {
    throw new Error(
      'Missing "Image with text settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  const mainImage = (image && image.asset) || {}

  const heading =
    (props.heading && props.heading) ||
    (props._rawHeading && props._rawHeading) ||
    (props.lead && props.lead)

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
              caption={heading && heading.caption}
              animate={animate}
              className={styles.heading}
              isVisible={isVisible}
              title={heading && heading.title}
              align="left"
              textSize={textSize}
              button={
                button && {
                  text: button.text,
                  size: 'large',
                  style: 'primary',
                  type: 'link',
                  to: button.url,
                  hasIcon: true
                }
              }
              lead={heading && heading.subHeading}
              subheading={heading && heading.subheading}
              sectionColor={sectionColor}
            />
            {mainImage && (
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
                      fluid={
                        (image && image.asset && getSanityImageFluid(image)) || (mainImage && image)
                      }
                      title={(image && image.alt) || (heading && heading.title)}
                      alt={(image && image.alt) || (heading && heading.title)}
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
