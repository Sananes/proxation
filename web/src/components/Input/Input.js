import React from 'react'

import styles from './Input.module.scss'

const Input = props => (
  <input className={styles.root} placeholder={props.placeholder} value={props.value} />
)

export default Input
