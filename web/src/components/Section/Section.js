import React from 'react'
import styles from './Section.module.scss'
import SectionHeading from '../SectionHeading'
import PropTypes from 'prop-types'

import Container from '../Container'
import cn from 'classnames'

const Section = ({
  children,
  container,
  lead,
  caption,
  animate,
  title,
  align,
  button,
  sectionColor,
  isVisible,
  narrow,
  narrowHeading,
  divider,
  className,
  headingClassName
}) => {
  const setClasses = cn(
    divider ? styles.sectionDivider : styles.section,
    colorClasses(sectionColor)
  )

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

  return (
    <section className={cn(setClasses, className)}>
      {container === false ? (
        children
      ) : (
        <Container narrow={narrow} className={styles.container}>
          {title ? (
            <SectionHeading
              title={title}
              align={align}
              animate={animate}
              isVisible={isVisible}
              narrow={narrowHeading}
              button={button}
              color={sectionColor}
              className={headingClassName}
              lead={lead}
              caption={caption}
            />
          ) : null}
          {children}
        </Container>
      )}
    </section>
  )
}

export default Section

Section.propTypes = {
  align: PropTypes.string,
  title: PropTypes.string,
  lead: PropTypes.string,
  dark: PropTypes.boolean,
  caption: PropTypes.string
}
