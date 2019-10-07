import React from 'react'
import Section from '../../components/Section'
import styles from './Features.module.scss'
import BlockText from '../../components/block-text'
import Button from '../../components/Button'

const Features = props => {
  const { data, headingData } = props

  if (!data) {
    throw new Error('No features have been added in the studio')
  }

  return (
    <Section
      className={styles.features}
      headingClassName={styles.heading}
      narrowHeading={true}
      dark={true}
      title={headingData.title}
      caption={headingData.caption}
      lead={headingData.subheading}
    >
      <div className={styles.grid}>
        {data.map((item, i) => (
          <div className={styles.featureItem} key={i}>
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
        ))}
      </div>
    </Section>
  )
}

export default Features
