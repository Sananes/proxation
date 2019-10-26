import React from 'react'
import Section from '../../components/Section'
import TextBlock from '../../components/SectionHeading'
import Image from 'gatsby-image/withIEPolyfill'
import styles from './AgencySection.module.scss'
import BlockText from '../../components/block-text'
import { Spring, Trail } from 'react-spring/renderprops'
import VisibilitySensor from '../../components/VisibilitySensor'

const AgencySection = props => {
  const { data } = props
  if (!data) {
    throw new Error('No slide items have been added in the studio')
  }

  const { items, _rawHeading: heading } = data
  function fadeIn(isVisible) {
    return {
      transform: isVisible ? `translateY(0)` : `translateY(-24px)`,
      opacity: isVisible ? 1 : 0
    }
  }
  return (
    <VisibilitySensor
      once
      partialVisibility
      children={({ isVisible }) => (
        <Section className={styles.agency}>
          <div className={styles.headingWrapper}>
            <TextBlock
              caption={heading.caption}
              align="left"
              className={styles.heading}
              title={heading.title}
              isVisible={isVisible}
            />
            <Spring to={fadeIn(isVisible)}>
              {props => (
                <div className={styles.lead}>
                  <BlockText style={props} blocks={heading.subHeading} />
                </div>
              )}
            </Spring>
          </div>
          <div className={styles.grid}>
            <Trail items={items} keys={item => item._key} to={fadeIn(isVisible)}>
              {item => props => (
                <VisibilitySensor
                  once
                  partialVisibility="middle"
                  children={({ isVisible }) => (
                    <div className={styles.item} style={props}>
                      <Image
                        style={props}
                        fluid={item.image.asset.fluid}
                        title={item.image.alt || item.title}
                        alt={item.image.alt || item.image.title}
                      />

                      <h4 className={styles.title} style={props}>
                        {item.title}
                      </h4>

                      <div style={props}>
                        <BlockText blocks={item._rawContent} />
                      </div>
                    </div>
                  )}
                />
              )}
            </Trail>
          </div>
        </Section>
      )}
    />
  )
}

export default AgencySection
