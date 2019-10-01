import React from 'react'
import styles from './Section.module.scss'
import SectionHeading from '../SectionHeading'
import PropTypes from 'prop-types'

import Container from '../Container'
const Section = ({
  children,
  container,
  lead,
  caption,
  title,
  align,
  button,
  narrow,
  divider,
  className
}) => {
  const setClasses = divider ? styles.sectionDivider : styles.section
  return (
    <section className={`${setClasses} ${className}`}>
      {container === false ? (
        children
      ) : (
        <Container narrow={narrow}>
          {title && lead ? (
            <SectionHeading
              title={title}
              align={align}
              button={button}
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
