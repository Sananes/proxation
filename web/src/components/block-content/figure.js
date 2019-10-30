import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import cn from 'classnames'

import styles from './figure.module.scss'

function Figure(props) {
  const { blog } = props
  return (
    <figure className={cn(styles.root, blog && styles.isBlog)}>
      {props.asset && (
        <img
          src={imageUrlFor(buildImageObj(props))
            .width(1200)
            .url()}
          alt={props.alt}
        />
      )}
      <figcaption className={styles.caption}>{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
