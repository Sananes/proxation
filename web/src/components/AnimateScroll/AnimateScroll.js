import React from 'react'
import VisibilitySensor from '../VisibilitySensor'

const AnimateScroll = ({ condition, children }) => {
  return condition ? (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => children({ isVisible })}
    </VisibilitySensor>
  ) : (
    children({ children, isVisible: false })
  )
}

export default AnimateScroll
