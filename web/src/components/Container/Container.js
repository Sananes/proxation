import React from 'react'
import cn from 'classnames'

import styles from './Container.module.scss'

const Container = ({ children, narrow, className }) => {
  return <div className={cn(narrow && styles.narrow, styles.container, className)}>{children}</div>
}

export default Container
