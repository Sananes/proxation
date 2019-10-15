import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import Image from 'gatsby-image/withIEPolyfill'
import { imageUrlFor } from '../../lib/image-url'
import BlockContent from '../block-content'
import Container from '../Container'
import VisibilitySensor from '../VisibilitySensor'
import { Spring } from 'react-spring/renderprops'

import styles from './BlogPost.module.scss'

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props
  return (
    <article className={styles.root}>
      <Container narrow={true}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <VisibilitySensor
              partialVisibility
              once
              children={({ isVisible }) => (
                <React.Fragment>
                  <Spring
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
                    }}
                  >
                    {props => (
                      <h1 className={styles.title} style={props}>
                        {title}
                      </h1>
                    )}
                  </Spring>
                  {publishedAt && (
                    <Spring
                      to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
                      }}
                      delay={300}
                    >
                      {props => (
                        <div className={styles.publishedAt} style={props}>
                          by{' '}
                          {authors.map(item => (
                            <span>{item.person.name} - </span>
                          ))}
                          {differenceInDays(new Date(publishedAt), new Date()) > 3
                            ? distanceInWords(new Date(publishedAt), new Date())
                            : format(new Date(publishedAt), 'MMMM Do YYYY')}
                        </div>
                      )}
                    </Spring>
                  )}
                </React.Fragment>
              )}
            />
            {mainImage && mainImage.asset && (
              <VisibilitySensor
                partialVisibility
                once
                children={({ isVisible }) => (
                  <Spring
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
                    }}
                    delay={600}
                  >
                    {props => (
                      <div className={styles.mainImage} style={props}>
                        <Image fluid={mainImage.asset.fluid} alt={mainImage.alt} />
                      </div>
                    )}
                  </Spring>
                )}
              />
            )}

            {_rawBody && (
              <VisibilitySensor
                partialVisibility
                once
                children={({ isVisible }) => (
                  <Spring
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
                    }}
                  >
                    {props => (
                      <BlockContent
                        className={styles.blogContent}
                        blocks={_rawBody}
                        style={props}
                      />
                    )}
                  </Spring>
                )}
              />
            )}
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
