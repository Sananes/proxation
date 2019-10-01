import React from 'react'

import styles from './Container.module.scss'

const Container = ({ children, narrow, className }) => {
  return (
    <div
      className={
        narrow
          ? `${styles.narrow}`
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
