import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from './VisibilitySensor'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return <p>{props.children}</p>
      }
    }
  }
}

const BlockText = ({ blocks }) => {
  return <BaseBlockContent blocks={blocks} serializers={serializers} />
}

export default BlockText
