import React from 'react'
import Section from '../../components/Section'
import Image from 'gatsby-image/withIEPolyfill'
import styles from './ClientsSection.module.scss'
import cn from 'classnames'
import { Trail } from 'react-spring/renderprops'
import { getSanityImageFluid } from '../../lib/helpers'
import VisibilitySensor from '../../components/VisibilitySensor'

const ClientsSection = props => {
  const { title, clients, sectionColor } = props
  if (!props) {
    throw new Error('No client has been added in the studio')
  }
  function fadeIn(isVisible) {
    return {
      opacity: isVisible ? 0.5 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
    }
  }
  return (
    <>
      {clients && (
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Section
              sectionColor={sectionColor}
              headingClassName={styles.heading}
              className={cn(styles.root, props.className)}
            >
              {title && <h2 className={styles.title}>{title}</h2>}
              <div className={styles.grid}>
                <Trail items={clients} keys={item => item._id} to={fadeIn(isVisible)}>
                  {item => props => (
                    <Image
                      style={props}
                      fluid={getSanityImageFluid(item.image)}
                      alt={item.image.alt || item.title}
                    />
                  )}
                </Trail>
              </div>
            </Section>
          )}
        </VisibilitySensor>
      )}
    </>
  )
}

export default ClientsSection
