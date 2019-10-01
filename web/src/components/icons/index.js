import React from 'react'
import HamburgerIcon from './hamburger'
import Logo from './logo'
import Airbnb from './airbnb'
import EspanaBreaks from './espanabreaks'
import OwnersDirect from './ownersdirect'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'logo':
      return <Logo />
    case 'ownersdirect':
      return <OwnersDirect />
    case 'espanabreaks':
      return <EspanaBreaks />
    case 'airbnb':
      return <Airbnb />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
