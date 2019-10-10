import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import PropTypes from 'prop-types'
import Button from '../Button'
import cn from 'classnames'
import styles from './SectionHeading.module.scss'

const SectionHeading = ({
  title,
  lead,
  caption,
  children,
  align,
  type,
  button,
  isVisible,
  dark,
  className,
  narrow
}) => {
  const setAlignmentClass = cn(styles.sectionHeading, {
    [styles.rightAligned]: align === 'right',
    [styles.leftAligned]: align === 'left',
    [styles.centerAligned]: align === 'center'
  })

  const setTypeClass = cn(styles.title, {
    [styles.titleLarge]: type === 'large'
  })

  const animationProps = {
    transform: isVisible ? `translateY(0)` : `translateY(-24px)`,
    opacity: isVisible ? 1 : 0
  }

  const setDark = dark ? styles.light : null

  return (
    <div className={cn(setAlignmentClass, narrow && styles.narrow, className, setDark)}>
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
            <p style={props} className={styles.lead}>
              {lead || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eos?`}
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
