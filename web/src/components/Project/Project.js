import React, { useState } from 'react'
import BlockContent from '../block-content'
import VisibilitySensor from '../VisibilitySensor'
import Image from 'gatsby-image/withIEPolyfill'
import Link from 'gatsby-link'
import FullHeight from 'react-div-100vh'
import { Spring } from 'react-spring/renderprops'
import { distanceInWordsStrict } from 'date-fns'
import styles from './Project.module.scss'

function Project(props) {
  var eoLocale = require('date-fns/locale/de')
  const {
    _rawBody,
    title,
    excerpt,
    services,
    projectLink,
    mainImage,
    startedAt,
    endedAt,
    relatedProjects
  } = props
  const [loaded, setLoaded] = useState(false)

  return (
    <article className={styles.root}>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <React.Fragment>
            {props.mainImage && mainImage.asset && (
              <FullHeight className={styles.mainImage}>
                <Spring
                  to={{
                    transform: loaded ? 'scale(1.2)' : 'scale(1)',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {animate => (
                    <Image
                      fluid={mainImage.asset.fluid}
                      alt={mainImage.alt || title}
                      onLoad={() => setLoaded(true)}
                      className={styles.image}
                      style={animate}
                    />
                  )}
                </Spring>
                <div className={styles.container}>
                  <div className={styles.content}>
                    <Spring
                      to={{
                        opacity: loaded && isVisible ? 1 : 0,
                        transform: loaded && isVisible ? 'translateY(0)' : 'translateY(-24px)'
                      }}
                      delay={300}
                    >
                      {animate => (
                        <h1 style={animate} className={styles.title}>
                          {title}
                        </h1>
                      )}
                    </Spring>
                    <Spring
                      to={{
                        opacity: loaded && isVisible ? 1 : 0,
                        transform: loaded && isVisible ? 'translateY(0)' : 'translateY(-24px)'
                      }}
                      delay={500}
                    >
                      {animate => (
                        <p style={animate} className={styles.excerpt}>
                          {excerpt}
                        </p>
                      )}
                    </Spring>
                  </div>
                </div>
              </FullHeight>
            )}
          </React.Fragment>
        )}
      </VisibilitySensor>
      <div className={styles.details}>
        <div className={styles.inner}>
          {services && services.length > 0 && (
            <div className={styles.block}>
              <h4>Services</h4>
              <p>{services.map(service => service).join(', ')}</p>
            </div>
          )}

          {startedAt && endedAt && (
            <div className={styles.block}>
              <h4>Duration</h4>
              <p>
                {distanceInWordsStrict(new Date(endedAt), new Date(startedAt), {
                  unit: 'M',
                  partialMethod: 'ceil',
                  locale: eoLocale
                })}
              </p>
            </div>
          )}

          <div className={styles.block}>
            <h4>Platform</h4>
            <p>Shopware</p>
          </div>

          {projectLink && (
            <div className={styles.block}>
              <h4>Website</h4>
              <a href={projectLink}>{projectLink.replace(/^.*:\/\//i, '')}</a>
            </div>
          )}
        </div>
      </div>
      <div className={styles.mainContent}>
        {_rawBody && <BlockContent isBlog blocks={_rawBody || []} />}
      </div>
      {relatedProjects && (
        <div className={styles.relatedProjects}>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring
                to={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(-24px)',
                  opacity: isVisible ? 1 : 0
                }}
              >
                {animate => (
                  <div style={animate}>
                    <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                    <ul>
                      {relatedProjects.map(project => (
                        <li key={`related_${project._id}`}>
                          <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
      )}
      {/* } <aside className={styles.metaContent}>
        {publishedAt && (
          <div className={styles.publishedAt}>
            {differenceInDays(new Date(publishedAt), new Date()) > 3
              ? distanceInWords(new Date(publishedAt), new Date())
              : format(new Date(publishedAt), 'MMMM Do YYYY')}
          </div>
        )}
        {members && <RoleList items={members} title="Authors" />}
        {categories && (
          <div className={styles.categories}>
            <h3 className={styles.categoriesHeadline}>Categories</h3>
            <ul>
              {categories.map(category => (
                <li key={category._id}>{category.title}</li>
              ))}
            </ul>
            </div>
            </aside>
              )*/}
    </article>
  )
}

export default Project
