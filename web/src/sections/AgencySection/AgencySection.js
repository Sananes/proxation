import React from 'react'
import Section from '../../components/Section'
import TextBlock from '../../components/SectionHeading'
import Image from 'gatsby-image/withIEPolyfill'
import styles from './AgencySection.module.scss'
import BlockText from '../../components/block-text'
import { Spring, Trail } from 'react-spring/renderprops'
import AnimateScroll from '../../components/AnimateScroll'

const AgencySection = props => {
  const { data, headingData, animate } = props
  if (!data) {
    throw new Error('No slide items have been added in the studio')
  }

  function fadeIn(isVisible) {
    return {
      transform: isVisible ? `translateY(0)` : `translateY(-24px)`,
      opacity: isVisible ? 1 : 0
    }
  }

  return (
    <AnimateScroll
      condition={props.animate}
      once
      partialVisibility="bottom"
      children={({ isVisible }) => (
        <Section className={styles.agency}>
          <div className={styles.headingWrapper}>
            <TextBlock
              caption={headingData.caption}
              align="left"
              className={styles.heading}
              title={headingData.title}
              isVisible={isVisible}
            />
            <Spring to={fadeIn(isVisible)}>
              {props => (
                <p style={props} className={styles.lead}>
                  {headingData.subHeading}
                </p>
              )}
            </Spring>
          </div>
          <div className={styles.grid}>
            <AnimateScroll
              condition={props.animate}
              once
              partialVisibility="bottom"
              children={({ isVisible }) => (
                <Trail items={data} keys={item => item._id} to={fadeIn(isVisible)}>
                  {item => props => (
                    <div className={styles.item} key={item._id} style={props}>
                      <Image
                        style={props}
                        fluid={item.image.asset.fluid}
                        title={item.image.alt || item.title}
                        alt={item.image.alt || item.image.title}
                      />

                      <h4 className={styles.title} style={props}>
                        {item.title}
                      </h4>

                      <BlockText blocks={item._rawContent} style={props} />
                    </div>
                  )}
                </Trail>
              )}
            />
          </div>
        </Section>
      )}
    />
  )
}

export default AgencySection
