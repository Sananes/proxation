import React from 'react'
import cn from 'classnames'
import styles from './Textarea.module.scss'

const Textarea = props => {
  return (
    <textarea
      id={props.name}
      name={props.name}
      ref={props.register}
      className={cn(styles.root, props.dark && styles.dark)}
      placeholder={props.placeholder}
      value={props.value}
    />
  )
}

export default Textarea
