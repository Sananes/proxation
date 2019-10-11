import React from 'react'
import cn from 'classnames'
import styles from './Textarea.module.scss'

const Textarea = props => (
  <textarea
    id={props.name}
    className={cn(styles.root, props.dark && styles.dark)}
    placeholder={props.placeholder}
    value={props.value}
  />
)

export default Textarea
