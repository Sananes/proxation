import React from 'react'
import { Link } from 'gatsby'
import Icon from '../icons'
import cn from 'classnames'
import styles from './Button.module.scss'

const Button = ({ type, text, href, to, style, size, className, icon, hasIcon }) => {
  const classes = cn(renderStyle(style), className && className, hasIcon && styles.icon)

  function renderStyle(style) {
    switch (style) {
      case 'primary':
        return styles.buttonPrimary
      case 'secondary':
        return styles.buttonSecondary
      case 'ghost':
        return styles.buttonGhost
    }
  }

  function renderSize(params) {
    switch (size) {
      case 'small':
        return styles.buttonSmall
      case 'large':
        return styles.buttonLarge
    }
  }

  // Render Link or Standard Link

  const RenderButtonType = ({ style }) => {
    if (to) {
      return (
        <Link to={to} className={cn(styles.button, classes, style)}>
          {text || 'Button'}
          {hasIcon && <Icon strokeWidth="3" symbol={icon || 'chevron-right'} />}
        </Link>
      )
    } else {
      return (
        <a href={href} className={cn(styles.button, classes, style)}>
          {text || 'Button'}
          {hasIcon && <Icon strokeWidth="3" symbol={icon || 'chevron-right'} />}
        </a>
      )
    }
  }

  switch (type) {
    case 'button':
      return (
        <button className={cn(styles.button, classes)}>
          {text} {hasIcon && <Icon symbol={icon || 'arrow-right'} />}
        </button>
      )
    case 'button-link':
      return <RenderButtonType />
    case 'link':
      return <RenderButtonType style={styles.buttonLink} />
    default:
      return null
  }
}

export default Button
