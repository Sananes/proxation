import React, { Fragment } from 'react'

import DeveloperAdv from '../../assets/images/shopware/shopware-certified-developer-adv.png'
import Developer from '../../assets/images/shopware/shopware-certified-developer.png'
import Partner from '../../assets/images/shopware/shopware-certified-partner.png'
import TemplateDeveloper from '../../assets/images/shopware/shopware-certified-template-developer.png'

import styles from './ShopwareBadges.module.scss'

const ShopwareBadges = props => {
  return (
    <div className={props.className ? props.className : styles.badges}>
      <img src={Developer} height='56' alt='Developer' />
      <img src={DeveloperAdv} height='56' alt='Developer Advanced' />
      <img src={Partner} height='56' alt='Partner' />
      <img src={TemplateDeveloper} alt='Template Developer' height='56' />
    </div>
  )
}

export default ShopwareBadges
