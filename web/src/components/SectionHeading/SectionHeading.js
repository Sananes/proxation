import React from 'react'
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
  button,
  dark,
  className,
  narrow
}) => {
  const setAlignmentClass = cn(styles.sectionHeading, {
    [styles.rightAligned]: align === 'right',
    [styles.leftAligned]: align === 'left',
    [styles.centerAligned]: align === 'center'
  })
  const setDark = dark ? styles.light : null
  return (
    <div className={cn(setAlignmentClass, narrow && styles.narrow, className, setDark)}>
      {caption && <span className={styles.caption}>{caption || `Caption`}</span>}
      {title && <h1 className={styles.title}>{title || `Title`}</h1>}
      {lead && (
        <p className={styles.lead}>
          {lead || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eos?`}
        </p>
      )}
      {button && (
        <div className={styles.buttonWrapper}>
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
