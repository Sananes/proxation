import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { blocksToText } from '../../lib/helpers'
import BlockContent from '../block-content'
import Container from '../Container'
import RoleList from '../role-list'

import styles from './Project.module.scss'
import Image from 'gatsby-image/withIEPolyfill'

function Project(props) {
  const {
    _rawBody,
    title,
    excerpt,
    categories,
    mainImage,
    members,
    publishedAt,
    relatedProjects
  } = props

  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <Image
            fluid={mainImage.asset.fluid}
            alt={mainImage.alt || title}
            className={styles.image}
          />
          <div className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.excerpt}>{excerpt}</p>
            </div>
          </div>
        </div>
      )}
      <div className={styles.mainContent}>
        {_rawBody && <BlockContent isBlog={true} blocks={_rawBody || []} />}
      </div>
      <aside className={styles.metaContent}>
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
      </aside>
    </article>
  )
}

export default Project
