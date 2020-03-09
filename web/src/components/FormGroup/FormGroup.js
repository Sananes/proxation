import React from 'react'
import Input from '../Input'
import Textarea from '../Textarea'
import Select from '../Select'
import cn from 'classnames'
import styles from './FormGroup.module.scss'

const FormGroup = props => {
  const className = props.className || ''
  const { errors } = props
  const RenderInputType = ({ type }) => {
    if (type === 'textarea') {
      return <Textarea {...props} className={className} ref={props.reference} />
    } else if (type === 'select') {
      return <Select {...props} className={className} />
    } else {
      return <Input {...props} className={className} />
    }
  }
  return (
    <div className={cn(styles.root, props.dark && styles.dark, className)}>
      <label htmlFor={props.name} className={styles.label}>
        <h3 className={styles.labelTitle}>{props.label}</h3>
        <RenderInputType {...props} />
      </label>
      <div className={styles.info}>
        <p>{errors && errors.message}</p>
      </div>
    </div>
  )
}

export default FormGroup
