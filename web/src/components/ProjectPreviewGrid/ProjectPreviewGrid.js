import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from '../ProjectPreview'
import SectionHeading from '../SectionHeading'
import VisibilitySensor from '../VisibilitySensor'

import styles from './ProjectPreviewGrid.module.scss'
import { Trail } from 'react-spring/renderprops'

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <SectionHeading
            align="center"
            isVisible={isVisible}
            textSize="large"
            title={props.title}
            subheading={props.subheading}
            className={styles.headline}
          />
        )}
      </VisibilitySensor>

      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <ul className={styles.grid}>
            <Trail
              items={props.nodes}
              keys={node => node.id}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-32px)'
              }}
              delay={300}
            >
              {node => props => (
                <li style={props}>
                  <ProjectPreview {...node} />
                </li>
              )}
            </Trail>
          </ul>
        )}
      </VisibilitySensor>

      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
