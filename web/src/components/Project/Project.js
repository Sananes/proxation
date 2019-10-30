import { format, distanceInWordsStrict } from 'date-fns'
var eoLocale = require('date-fns/locale/de')
import React from 'react'
import { Link } from 'gatsby'
import { blocksToText } from '../../lib/helpers'
import BlockContent from '../block-content'
import Container from '../Container'
import RoleList from '../role-list'

import styles from './Project.module.scss'
import Image from 'gatsby-image/withIEPolyfill'
import VisibilitySensor from '../VisibilitySensor'
import { Spring } from 'react-spring/renderprops'
import { types } from 'util'

function Project(props) {
  const {
    _rawBody,
    title,
    excerpt,
    type,
    services,
    projectLink,
    categories,
    mainImage,
    members,
    startedAt,
    endedAt,
    relatedProjects
  } = props

  return (
    <article className={styles.root}>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <React.Fragment>
            {props.mainImage && mainImage.asset && (
              <div className={styles.mainImage}>
                <Spring
                  to={{
                    transform: isVisible ? 'scale(1.2)' : 'scale(1)',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {animate => (
                    <Image
                      fluid={mainImage.asset.fluid}
                      alt={mainImage.alt || title}
                      className={styles.image}
                      style={animate}
                    />
                  )}
                </Spring>
                <div className={styles.container}>
                  <div className={styles.content}>
                    <Spring
                      to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
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
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
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
              </div>
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
        {_rawBody && <BlockContent isBlog={true} blocks={_rawBody || []} />}
      </div>

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
        )}
        {relatedProjects && (
          <div className={styles.relatedProjects}>
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
              </aside> */}
    </article>
  )
}

export default Project
