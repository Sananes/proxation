import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import styles from './Button.module.scss'

const Button = ({ type, text, href, to, style, size, className }) => {
  const classes = cn(renderStyle(style), className && className)

  function renderStyle (style) {
    switch (style) {
      case 'primary':
        return styles.buttonPrimary
      case 'secondary':
        return styles.buttonSecondary
      case 'ghost':
        return styles.buttonGhost
    }
  }

  function renderSize (params) {
    switch (size) {
      case 'small':
        return styles.buttonSmall
      case 'large':
        return styles.buttonLarge
    }
  }

  // Render Link or Standard Link

  const RenderButtonType = () => {
    if (to) {
      return (
        <Link to={to} className={styles.button + ' ' + classes}>
          {text}
        </Link>
      )
    } else {
      return (
        <a href={href} className={styles.button + ' ' + classes}>
          {text}
        </a>
      )
    }
  }

  switch (type) {
    case 'button':
      return <button className={cn(styles.button + ' ' + classes)}>{text}</button>
    case 'button-link':
      return <RenderButtonType />
    case 'link':
      return <RenderButtonType />
    default:
      return null
  }
}

export default Button
