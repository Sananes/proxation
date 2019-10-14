import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import Image from 'gatsby-image/withIEPolyfill'
import { imageUrlFor } from '../../lib/image-url'
import BlockContent from '../block-content'
import Container from '../Container'
import RoleList from '../role-list'

import styles from './BlogPost.module.scss'

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props
  return (
    <article className={styles.root}>
      <Container narrow={true}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {publishedAt && (
              <div className={styles.publishedAt}>
                by -{' '}
                {authors.map(item => (
                  <span>{item.person.name}</span>
                ))}
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}

            {mainImage && mainImage.asset && (
              <div className={styles.mainImage}>
                <Image fluid={mainImage.asset.fluid} alt={mainImage.alt} />
              </div>
            )}
            {_rawBody && <BlockContent className={styles.blogContent} blocks={_rawBody} />}
          </div>

          {/* <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {authors && <RoleList items={authors} title="Authors" />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
                  </aside> */}
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
