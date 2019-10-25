import React from 'react'

import cn from 'classnames'
import { Spring } from 'react-spring/renderprops'
import BlockText from '../../components/block-text'
import VisibilitySensor from '../../components/VisibilitySensor'
import Section from '../../components/Section'

import styles from './RichText.module.scss'

function RichText(props) {
  const { title, caption, textAlign, textSize } = props
  const body = (props.body && props.body) || (props._rawBody && props._rawBody)
  return (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Section
          title={title}
          isVisible={isVisible}
          narrow={true}
          caption={caption}
          lead={body}
          textSize={textSize ? textSize : null}
          className={cn(styles.root)}
          sectionColor={props.sectionColor}
          style={{ textAlign: textAlign }}
        ></Section>
      )}
    </VisibilitySensor>
  )
}

export default RichText
