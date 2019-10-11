import React from 'react'
import HamburgerIcon from './hamburger'
import Logo from './logo'
import ArrowRight from './arrow-right'
import Close from './close'
import ArrowLeft from './arrow-left'
import ChevronRight from './chevron-right'
import Shopware from './shopware'

function Icon({ symbol, strokeWidth }) {
  switch (symbol) {
    case 'hamburger':
      return <HamburgerIcon strokeWidth={strokeWidth} />
    case 'logo':
      return <Logo />
    case 'arrow-right':
      return <ArrowRight />
    case 'close':
      return <Close />
    case 'arrow-left':
      return <ArrowLeft />
    case 'chevron-right':
      return <ChevronRight strokeWidth={strokeWidth} />
    case 'shopware':
      return <Shopware strokeWidth={strokeWidth} />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
