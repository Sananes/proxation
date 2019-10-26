import React from 'react'
import Section from '../../components/Section'
import Image from 'gatsby-image/withIEPolyfill'
import styles from './ClientsSection.module.scss'
import { Spring, Trail } from 'react-spring/renderprops'
import { getSanityImageFluid } from '../../lib/helpers'
import VisibilitySensor from '../../components/VisibilitySensor'

const ClientsSection = props => {
  const { title, clients } = props
  if (!props) {
    throw new Error('No client has been added in the studio')
  }
  function fadeIn(isVisible) {
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
    }
  }
  return (
    <>
      {clients && (
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Section className={styles.root} headingClassName={styles.heading}>
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
