import React, { useState } from 'react'
import Section from '../../components/Section'
import styles from './Features.module.scss'
import { useTrail, animated } from 'react-spring'
import BlockText from '../../components/block-text'
import Button from '../../components/Button'
import { Trail } from 'react-spring/renderprops'

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
        <Trail
          items={data}
          keys={item => item.id}
          to={{
            transform: isVisible ? 'translateY(0)' : 'translateY(-24px)',
            opacity: isVisible ? 1 : 0
          }}
        >
          {item => props => (
            <div style={props} delay={1000} className={styles.featureItem} key={item.id}>
              {item.image != null && (
                <img
                  src={item.image.asset.url}
                  title={item.image.alt || item.title}
                  alt={item.image.alt || item.title}
                />
              )}
              <h4 className={styles.title}>{item.title}</h4>
              <BlockText className={styles.content} blocks={item._rawContent} />
              <Button
                type="link"
                style="ghost"
                hasIcon={true}
                className={styles.button}
                text={item.button.text}
                href={item.button.url}
              />
            </div>
          )}
        </Trail>
      </div>
    </Section>
  )
}

export default Features
