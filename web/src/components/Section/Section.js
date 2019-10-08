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
  title,
  align,
  button,
  dark,
  isVisible,
  narrow,
  narrowHeading,
  divider,
  className,
  headingClassName
}) => {
  const setClasses = divider ? styles.sectionDivider : styles.section
  const setDark = dark ? styles.light : null
  return (
    <section className={cn(setClasses, className, setDark)}>
      {container === false ? (
        children
      ) : (
        <Container narrow={narrow} className={styles.container}>
          {title ? (
            <SectionHeading
              title={title}
              align={align}
              dark={dark}
              isVisible={isVisible}
              narrow={narrowHeading}
              button={button}
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
  caption: PropTypes.string
}
