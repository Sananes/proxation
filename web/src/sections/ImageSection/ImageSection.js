import React from 'react'

import styles from './ImageSection.module.scss'
import Hero from '../Hero'
import Image from 'gatsby-image/withIEPolyfill'
import { getSanityImageFluid } from '../../lib/helpers'

function ImageSection(props) {
  const { imageSection: image } = props
  return (
    <div className={styles.root}>
      {image && image.asset && (
        <Image fluid={getSanityImageFluid(image)} className={styles.image} alt={image.alt} />
      )}
    </div>
  )
}

export default ImageSection
