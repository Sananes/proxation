import React from 'react'
import Section from '../../components/Section'
import styles from './Features.module.scss'

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
            {item.icon && <img src={item.icon.asset.url} />}
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.content}>{item.content}</p>
            <a className={styles.button} href={item.button.url}>
              {item.button.text}
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Features
