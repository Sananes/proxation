import React from 'react'
import HamburgerIcon from './hamburger'
import Logo from './logo'
import ArrowRight from './arrow-right'
import Close from './close'
import ArrowLeft from './arrow-left'
import ChevronRight from './chevron-right'
import ChevronDown from './chevron-down'
import Download from './download'
import File from './file'
import View from './view'
import PlusIcon from './plus'
import MinusIcon from './minus'
import Pattern from './pattern'
import Shopware from './shopware'

function Icon(props) {
  const { symbol, strokeWidth } = props
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
    case 'file':
      return <File strokeWidth={strokeWidth || 2} />
    case 'download':
      return <Download strokeWidth={strokeWidth || 2} />
    case 'view':
      return <View strokeWidth={strokeWidth || 2} />
    case 'plus':
      return <PlusIcon strokeWidth={strokeWidth || 2} />
    case 'minus':
      return <MinusIcon strokeWidth={strokeWidth || 2} />
    case 'pattern':
      return <Pattern />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
