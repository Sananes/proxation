import React from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

const Input = props => (
  <input
    id={props.name}
    name={props.name}
    className={cn(styles.root, props.dark && styles.dark)}
    placeholder={props.placeholder}
    value={props.value}
  />
)

export default Input
