import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import Container from '../../components/Container'
import { Spring } from 'react-spring/renderprops'
import Button from '../../components/Button'
import { getSanityImageFluid, useWindowDimensions } from '../../lib/helpers'
import Image from 'gatsby-image/withIEPolyfill'

import styles from './Hero.module.scss'

function Hero({
  title,
  subheading,
  image,
  caption,
  button,
  overlay,
  position,
  textColor,
  location,
  ...props
}) {
  const isHomepage = location.pathname === '/' && styles.homepage
  const noImage = !image || (!image.asset && styles.homepage)
  const { overlayColor: color, overlayOpacity } = overlay || {}
  const opacity = overlayOpacity / 100
  const { width } = useWindowDimensions()
  const [isDevice, setIsDevice] = useState(false)

  useEffect(() => {
    if (width >= 960) {
      setIsDevice(true)
    } else {
      setIsDevice(false)
    }
  })

  function alignmentClass(align) {
    switch (align) {
      case 'centerLeft':
        return styles.alignLeft
      case 'centerMiddle':
        return styles.alignCenter
      case 'centerRight':
        return styles.alignRight
      case 'topLeft':
        return styles.alignTopLeft
      case 'topCenter':
        return styles.alignTopCenter
      case 'topRight':
        return styles.alignTopRight
      case 'bottomLeft':
        return styles.alignBottomLeft
      case 'bottomCenter':
        return styles.alignBottomCenter
      case 'bottomRight':
        return styles.alignBottomRight
      default:
        return styles.alignCenter
    }
  }

  return (
    <div
      className={cn(
        styles.hero,
        isHomepage,
        noImage,
        position && alignmentClass(position),
        textColor && textColor === 'light' ? styles.light : styles.dark
      )}
    >
      {image && image.asset && (
        <Spring
          from={{ opacity: 0, transform: 'translateY(-24px)' }}
          to={{ opacity: 1, transform: 'translateY(0)' }}
        >
          {animation => (
            <div className={styles.imageWrapper} style={animation}>
              <Image fluid={getSanityImageFluid(image)} alt={image.alt || title} />
              {overlay.overlay && (
                <div
                  className={styles.overlay}
                  style={{
                    backgroundColor: isDevice && color.hex,
                    opacity: opacity
                  }}
                />
              )}
            </div>
          )}
        </Spring>
      )}
      <Container className={styles.container}>
        <div className={styles.content}>
          {caption && (
            <Spring
              from={{ opacity: 0, transform: 'translateY(-24px)' }}
              to={{ opacity: 1, transform: 'translateY(0)' }}
            >
              {animation => (
                <small style={animation} className={styles.caption}>
                  {caption}
                </small>
              )}
            </Spring>
          )}
          {title && (
            <Spring
              from={{ opacity: 0, transform: 'translateY(-24px)' }}
              to={{ opacity: 1, transform: 'translateY(0)' }}
            >
              {animation => (
                <h2 style={animation} className={styles.title}>
                  {title}
                </h2>
              )}
            </Spring>
          )}

          {subheading && (
            <Spring
              from={{ opacity: 0, transform: 'translateY(-24px)' }}
              to={{ opacity: 1, transform: 'translateY(0)' }}
              delay={300}
            >
              {animate => (
                <p style={animate} className={styles.lead}>
                  {subheading}
                </p>
              )}
            </Spring>
          )}

          {button && button.text && (
            <Spring
              from={{ opacity: 0, transform: 'translateY(-24px)' }}
              to={{ opacity: 1, transform: 'translateY(0)' }}
              delay={400}
            >
              {animate => (
                <Button
                  type="button"
                  text={button.text}
                  link={button.url}
                  style={animate}
                  className={styles.button}
                />
              )}
            </Spring>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Hero
