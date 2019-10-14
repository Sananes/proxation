import React from 'react'
import cn from 'classnames'

import styles from './Container.module.scss'

const Container = ({ children, narrow, className }) => {
  return (
    <div
      className={
        narrow
          ? `${styles.container} ${styles.narrow}`
          : className
          ? `${styles.container} ${className}`
          : `${styles.container}`
      }
    >
      {children}
    </div>
  )
}

export default Container
