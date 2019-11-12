import React from 'react'
import cn from 'classnames'
import styles from './ShopwarePartners.module.scss'
import VisibilitySensor from '../VisibilitySensor'
import { fadeOnVisible } from '../../lib/helpers'
import { Spring } from 'react-spring/renderprops'
import Icon from '../icons'

const ShopwarePartners = props => {
  const { className, title, isDark } = props
  return (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Spring to={fadeOnVisible(isVisible)}>
          {props => (
            <div
              className={cn(styles.badgesWrapper, className, isDark ? styles.light : null)}
              style={props}
            >
              {title && <h4 className={styles.title}>{title}</h4>}
              <ul className={styles.badges}>
                <li className={styles.badgeItem}>
                  <Icon symbol="shopware" className={styles.badgeIcon}></Icon>
                  <strong className={styles.bold}>Solutions</strong> Partner
                </li>
                <li className={cn(styles.badgeItem, styles.badgeTechnology)}>
                  <Icon symbol="shopware" className={styles.badgeIcon}></Icon>
                  <strong className={styles.bold}>Technology</strong> Partner
                </li>
                <li className={cn(styles.badgeItem, styles.badgeBusiness)}>
                  <Icon symbol="shopware" className={styles.badgeIcon}></Icon>
                  <strong className={styles.bold}>Business</strong> Partner
                </li>
              </ul>
            </div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  )
}

export default ShopwarePartners
