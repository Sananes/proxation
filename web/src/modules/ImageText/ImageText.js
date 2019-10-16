import React from 'react'
import styles from './ImageText.module.scss'
import Section from '../../components/Section'

const ImageText = props => {
  return <Section className={styles.root}>{props.title}</Section>
}

export default ImageText
