import { format, distanceInWords, differenceInDays } from 'date-fns'
import de from 'date-fns/locale/de'
import React from 'react'
import { getBlogUrl } from '../../lib/helpers'
import Image from 'gatsby-image/withIEPolyfill'
import BlockContent from '../block-content'
import Container from '../Container'
import VisibilitySensor from '../VisibilitySensor'
import { Spring } from 'react-spring/renderprops'

import styles from './BlogPost.module.scss'
import RelatedBlogPosts from '../RelatedBlogPosts'

function BlogPost(props) {
  const { _rawBody, authors, id, title, mainImage, slug, publishedAt } = props

  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.content}>
          <Container narrow={true}>
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
                            {authors && authors.map(item => <span>by {item.person.name} - </span>)}
                            {differenceInDays(new Date(publishedAt), new Date()) > 3
                              ? distanceInWords(new Date(publishedAt), new Date())
                              : format(new Date(publishedAt), 'Do MMMM YYYY', { locale: de })}
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
                        <div style={props}>
                          <BlockContent className={styles.blogContent} blocks={_rawBody} />
                        </div>
                      )}
                    </Spring>
                  )}
                />
              )}
              <ul className={styles.share}>
                <h3 className={styles.title}>Make some noise</h3>
                <li className={styles.twitter}>
                  <a
                    href={
                      `https://twitter.com/intent/tweet?text=` +
                      title +
                      ` https://www.proxation.de` +
                      getBlogUrl(slug.current)
                    }
                    target="_blank"
                  >
                    Twitter
                  </a>
                </li>
                <li className={styles.facebook}>
                  <a
                    href={
                      `https://www.facebook.com/sharer/sharer.php?u=https://www.proxation.de` +
                      getBlogUrl(slug.current)
                    }
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li className={styles.facebook}>
                  <a
                    href={
                      `https://www.linkedin.com/shareArticle?mini=true&url=https://www.proxation.de` +
                      getBlogUrl(slug.current) +
                      `&title=` +
                      title
                    }
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <RelatedBlogPosts current={id} className={styles.relatedPosts} />
      </Container>
    </article>
  )
}

export default BlogPost
