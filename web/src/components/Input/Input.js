import React from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

const Input = props => {
  return (
    <input
      id={props.name}
      ref={props.ref}
      name={props.name}
      className={cn(styles.root, props.dark && styles.dark)}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

export default Input
