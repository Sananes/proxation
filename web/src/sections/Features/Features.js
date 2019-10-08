import React, { useState } from 'react'
import Section from '../../components/Section'
import styles from './Features.module.scss'
import { useTrail, animated } from 'react-spring'
import BlockText from '../../components/block-text'
import Button from '../../components/Button'

const Features = ({ data, headingData, isVisible }) => {
  const trail = useTrail(data.length, {
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
    }
  })

  if (!data) {
    throw new Error('No features have been added in the studio')
  }
  return (
    <Section
      className={styles.features}
      headingClassName={styles.heading}
      narrowHeading={true}
      dark={true}
      isVisible={isVisible}
      title={headingData.title}
      caption={headingData.caption}
      lead={headingData.subheading}
    >
      <div className={styles.grid}>
        {trail.map((props, i) => (
          <animated.div style={props} delay={1000} className={styles.featureItem} key={i}>
            {data[i].image != null && (
              <img
                src={data[i].image.asset.url}
                title={data[i].image.alt || data[i].title}
                alt={data[i].image.alt || data[i].title}
              />
            )}
            <h4 className={styles.title}>{data[i].title}</h4>
            <BlockText className={styles.content} blocks={data[i]._rawContent} />
            <Button
              type="link"
              style="ghost"
              hasIcon={true}
              className={styles.button}
              text={data[i].button.text}
              href={data[i].button.url}
            />
          </animated.div>
        ))}
      </div>
    </Section>
  )
}

export default Features
