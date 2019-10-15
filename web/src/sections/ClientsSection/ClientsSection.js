import React from 'react'
import Section from '../../components/Section'
import AnimateScroll from '../../components/AnimateScroll'
import Image from 'gatsby-image/withIEPolyfill'
import cn from 'classnames'
import styles from './ClientsSection.module.scss'
import Icon from '../../components/icons'
import { Spring } from 'react-spring/renderprops'

const ClientsSection = props => {
  const { data } = props
  if (!data) {
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
      {data.clients && (
        <AnimateScroll
          condition={props.animate}
          partialVisibility
          children={({ isVisible }) => (
            <Spring to={fadeIn(isVisible)}>
              {props => (
                <Section style={props} className={styles.root} headingClassName={styles.heading}>
                  {data.heading.title && <h2 className={styles.title}>{data.heading.title}</h2>}
                  <div className={styles.grid} style={(props, { delay: 300 })}>
                    {data.clients.map(item => (
                      <Image fluid={item.image.asset.fluid} alt={item.image.alt || item.title} />
                    ))}
                  </div>
                </Section>
              )}
            </Spring>
          )}
        />
      )}
    </>
  )
}

export default ClientsSection
