import { Link } from 'gatsby'
import React from 'react'
import Image from 'gatsby-image/withIEPolyfill'
import cn from 'classnames'

import styles from './ProjectPreview.module.scss'

function ProjectPreview(props) {
  return (
    <Link
      className={cn(styles.root, props.className)}
      key={props._id}
      to={`/project/${props.slug.current}`}
    >
      <div className={styles.wrapper}>
        {props.cardImage && props.cardImage.asset && (
          <Image fluid={props.cardImage.asset.fluid} alt={props.title} styles={styles.image} />
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
