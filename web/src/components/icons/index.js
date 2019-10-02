import React from 'react'
import HamburgerIcon from './hamburger'
import Logo from './logo'
import ArrowRight from './arrow-right'
import ArrowLeft from './arrow-left'

function Icon(props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'logo':
      return <Logo />
    case 'arrow-right':
      return <ArrowRight />
    case 'arrow-left':
      return <ArrowLeft />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
