import React from 'react'
import Link from '../GatsbyLink'
import Icon from '../icons'
import cn from 'classnames'
import styles from './Button.module.scss'

const Button = ({ type, text, to, color, size, style, className, icon, hasIcon }) => {
  const classes = cn(renderStyle(color), className && className, hasIcon && styles.icon)

  function renderStyle(color) {
    switch (color) {
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

  const RenderButtonType = ({ color }) => {
    return (
      <Link to={to} style={style} className={cn(styles.button, classes, color)}>
        {text || 'Button'}
        {hasIcon && <Icon strokeWidth="3" symbol={icon || 'chevron-right'} />}
      </Link>
    )
  }

  switch (type) {
    case 'button':
      return (
        <button className={cn(styles.button, classes)}>
          {text} {hasIcon && <Icon symbol={icon || 'arrow-right'} />}
        </button>
      )
    case 'submit':
      return (
        <button style={style} type="submit" className={cn(styles.button, classes)}>
          {text} {hasIcon && <Icon symbol={icon || 'arrow-right'} />}
        </button>
      )
    case 'button-link':
      return <RenderButtonType />
    case 'link':
      return <RenderButtonType color={styles.buttonLink} />
    default:
      return null
  }
}

export default Button
