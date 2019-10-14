import React from 'react'
import HamburgerIcon from './hamburger'
import Logo from './logo'
import ArrowRight from './arrow-right'
import Close from './close'
import ArrowLeft from './arrow-left'
import ChevronRight from './chevron-right'
import ChevronDown from './chevron-down'
import Shopware from './shopware'

function Icon({ symbol, strokeWidth }) {
  switch (symbol) {
    case 'hamburger':
      return <HamburgerIcon strokeWidth={strokeWidth || 2} />
    case 'logo':
      return <Logo />
    case 'arrow-right':
      return <ArrowRight />
    case 'close':
      return <Close />
    case 'arrow-left':
      return <ArrowLeft />
    case 'chevron-right':
      return <ChevronRight strokeWidth={strokeWidth || 2} />
    case 'chevron-down':
      return <ChevronDown strokeWidth={strokeWidth || 2} />
    case 'shopware':
      return <Shopware strokeWidth={strokeWidth || 2} />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
