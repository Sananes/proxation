import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import Image from 'gatsby-image/withIEPolyfill'
import cn from 'classnames'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import styles from './project-preview.module.scss'

function ProjectPreview(props) {
  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <div className={styles.wrapper}>
        {props.mainImage && props.mainImage.asset && (
          <Image
            fluid={props.mainImage.asset.fluid}
            alt={props.mainImage.alt}
            styles={styles.image}
          />
        )}
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{props.title}</h4>
        <p className={styles.description}>Accessories</p>
      </div>
    </Link>
  )
}

export default ProjectPreview
