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
  lead,
  subheading,
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
          {props => (
            <span style={props} className={styles.caption}>
              {caption || `Caption`}
            </span>
          )}
        </Spring>
      )}
      {title && (
        <Spring to={animationProps} delay="200">
          {props => (
            <h1 style={props} className={setTypeClass}>
              {title || `Title`}
            </h1>
          )}
        </Spring>
      )}
      {lead && (
        <Spring to={animationProps} delay="300">
          {props => (
            <div className={styles.lead}>
              <BlockText className={styles.lead} blocks={lead} />
            </div>
          )}
        </Spring>
      )}
      {subheading && (
        <Spring to={animationProps} delay="300">
          {props => (
            <p style={props} className={styles.lead}>
              {subheading}
            </p>
          )}
        </Spring>
      )}
      {button && (
        <Spring to={animationProps} delay="400">
          {props => (
            <div style={props} className={styles.buttonWrapper}>
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
  lead: PropTypes.string,
  caption: PropTypes.string
}
