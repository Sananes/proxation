import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import Container from '../../components/Container'
import { Spring } from 'react-spring/renderprops'
import Button from '../../components/Button'
import { getSanityImageFluid, useWindowDimensions } from '../../lib/helpers'
import Image from 'gatsby-image/withIEPolyfill'
import Link from 'gatsby-link'
import styles from './Hero.module.scss'
import Icon from '../../components/icons'

function Hero({
  title,
  subheading,
  image,
  caption,
  button,
  style,
  overlay,
  className,
  position,
  textColor,
  location,
  ...props
}) {
  const isHomepage = location.pathname === '/' && styles.homepage
  const fullWidth = props.fullWidth
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
      style={style}
      className={cn(
        className,
        styles.hero,
        isHomepage,
        fullWidth && styles.transparent,
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
      <Container className={cn(styles.container, 'container')}>
        {props.children}
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

          {isHomepage && (
            <Spring
              from={{ opacity: 0, transform: 'translateY(-24px)' }}
              to={{ opacity: 1, transform: 'translateY(0)' }}
              delay={300}
            >
              {animation => (
                <div style={animation} className={styles.getInTouch}>
                  Wir sind super freundlich.{' '}
                  <Link to="/kontakt">
                    In Kontakt kommen <Icon symbol="chevron-right" />
                  </Link>
                </div>
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
                  type="button-link"
                  text={button.text}
                  to={button.url}
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
