import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import cx from 'classnames'
import styles from './SectionHeading.module.scss'

const SectionHeading = ({ title, lead, caption, children, align, button, className }) => {
  const setAlignmentClass = cx(styles.sectionHeading, {
    [styles.rightAligned]: align === 'right',
    [styles.leftAligned]: align === 'left',
    [styles.centerAligned]: align === 'center'
  })

  return (
    <div className={`${setAlignmentClass} ${className && className}`}>
      {caption && <span className={styles.caption}>{caption || `Caption`}</span>}
      {title && <h1 className={styles.title}>{title || `Title`}</h1>}
      {lead && (
        <p className={styles.lead}>
          {lead || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eos?`}
        </p>
      )}
      {button && (
        <div className={styles.buttonWrapper}>
          <Button text={button.text} style={button.style} type={button.type} link={button.link} />
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
