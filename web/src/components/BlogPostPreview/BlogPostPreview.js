import { format, distanceInWords, differenceInDays } from 'date-fns'
import { Link } from 'gatsby'
import React from 'react'
import { cn, getBlogUrl } from '../../lib/helpers'
import BlockText from '../block-text'
import Image from 'gatsby-image/withIEPolyfill'

import styles from './BlogPostPreview.module.scss'
import Button from '../Button'
import VisibilitySensor from '../VisibilitySensor'
import { Spring } from 'react-spring/renderprops'

function BlogPostPreview(props) {
  return (
    <VisibilitySensor
      once
      partialVisibility
      children={({ isVisible }) => (
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
          }}
        >
          {animate => (
            <Link className={styles.root} to={getBlogUrl(props.slug.current)} style={animate}>
              <div className={styles.leadMediaThumb}>
                {props.mainImage && props.mainImage.asset && (
                  <Image fluid={props.mainImage.asset.fluid} alt={props.mainImage.alt} />
                )}
              </div>
              {props.publishedAt && (
                <div className={styles.publishedAt}>
                  {differenceInDays(new Date(props.publishedAt), new Date()) > 3
                    ? distanceInWords(new Date(props.publishedAt), new Date())
                    : format(new Date(props.publishedAt), 'MMMM Do YYYY')}
                </div>
              )}
              <h3 className={cn(styles.title)}>{props.title}</h3>
              {props._rawExcerpt && (
                <div className={styles.excerpt}>
                  <BlockText blocks={props._rawExcerpt} />
                </div>
              )}
              <Button
                type="link"
                style="ghost"
                hasIcon={true}
                className={styles.button}
                text="Read more"
              />
            </Link>
          )}
        </Spring>
      )}
    />
  )
}

export default BlogPostPreview
