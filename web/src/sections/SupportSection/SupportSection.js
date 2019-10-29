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
              caption={heading.caption}
              animate={animate}
              className={styles.heading}
              isVisible={isVisible}
              title={heading.title}
              align="left"
              textSize={textSize}
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
              lead={heading.subHeading}
              subheading={heading.subheading}
              sectionColor={sectionColor}
            />
            {((image && image.asset) || image.src) && (
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
                      fluid={(image.asset && getSanityImageFluid(image)) || (image.src && image)}
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
