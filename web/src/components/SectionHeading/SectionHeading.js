import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import PropTypes from 'prop-types'
import Button from '../Button'
import cn from 'classnames'
import styles from './SectionHeading.module.scss'
import BlockText from '../block-text'

const SectionHeading = ({
  title,
  subheading,
  lead,
  caption,
  children,
  align,
  type,
  button,
  isVisible,
  color,
  className,
  narrow
}) => {
  const setAlignmentClass = cn(styles.sectionHeading, {
    [styles.rightAligned]: align === 'right',
    [styles.leftAligned]: align === 'left',
    [styles.centerAligned]: align === 'center'
  })

  function colorClasses(color) {
    switch (color) {
      case 'dark':
        return styles.dark
      case 'none':
        return null
      case 'highlight':
        return styles.highlight
      default:
        return null
    }
  }

  const setTypeClass = cn(styles.title, {
    [styles.titleLarge]: type === 'large'
  })

  const animationProps = {
    transform: isVisible ? `translateY(0)` : `translateY(-24px)`,
    opacity: isVisible ? 1 : 0
  }

  return (
    <div className={cn(setAlignmentClass, narrow && styles.narrow, className, colorClasses(color))}>
      {caption && (
        <Spring to={animationProps}>
          {animation => (
            <span style={animation} className={styles.caption}>
              {caption || `Caption`}
            </span>
          )}
        </Spring>
      )}
      {title && (
        <Spring to={animationProps} delay="200">
          {animation => (
            <h1 style={animation} className={setTypeClass}>
              {title || `Title`}
            </h1>
          )}
        </Spring>
      )}
      {lead && (
        <Spring to={animationProps} delay="400">
          {animation => (
            <div className={styles.lead} style={animation}>
              <BlockText blocks={lead} />
            </div>
          )}
        </Spring>
      )}
      {subheading && (
        <Spring to={animationProps} delay="400">
          {animation => (
            <p style={animation} className={styles.lead}>
              {subheading}
            </p>
          )}
        </Spring>
      )}
      {button && (
        <Spring to={animationProps} delay="400">
          {animation => (
            <div style={animation} className={styles.buttonWrapper}>
              <Button
                text={button.text}
                size={button.size}
                style={button.style}
                type={button.type}
                href={button.href}
                to={button.to}
                hasIcon={button.hasIcon}
                icon={button.icon}
              />
            </div>
          )}
        </Spring>
      )}
      {children}
    </div>
  )
}

export default SectionHeading

SectionHeading.propTypes = {
  align: PropTypes.string,
  title: PropTypes.string,
  button: PropTypes.PropTypes.object,
  caption: PropTypes.string
}
