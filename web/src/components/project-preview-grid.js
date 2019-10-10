import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'
import SectionHeading from './SectionHeading'
import VisibilitySensor from './VisibilitySensor'

import styles from './project-preview-grid.module.scss'
import { Trail } from 'react-spring/renderprops'

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <SectionHeading
            align="center"
            isVisible={isVisible}
            type="large"
            title={props.title}
            lead={props.lead}
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
