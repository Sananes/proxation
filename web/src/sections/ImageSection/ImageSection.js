import React from 'react'

import cn from 'classnames'
import Image from 'gatsby-image/withIEPolyfill'
import { getSanityImageFluid } from '../../lib/helpers'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from '../../components/VisibilitySensor'

import styles from './ImageSection.module.scss'

function ImageSection(props) {
  const { imageSection: image, contained } = props
  return (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
          }}
          delay={500}
        >
          {animation => (
            <div style={animation} className={cn(styles.root, contained && styles.contained)}>
              {image && image.asset && (
                <Image
                  fluid={getSanityImageFluid(image)}
                  className={styles.image}
                  alt={image.alt}
                />
              )}
            </div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  )
}

export default ImageSection
