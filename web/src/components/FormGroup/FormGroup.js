import React from 'react'
import Input from '../Input'
import Textarea from '../Textarea'
import Select from '../Select'
import cn from 'classnames'
import styles from './FormGroup.module.scss'

const FormGroup = props => {
  const RenderInputType = ({ type }) => {
    if (type === 'textarea') {
      return <Textarea {...props} className={props.className} />
    } else if (type === 'select') {
      return <Select {...props} className={props.className} />
    } else {
      return <Input {...props} className={props.className} />
    }
  }
  return (
    <div className={cn(styles.root, props.dark && styles.dark, props.className)}>
      <label htmlFor={props.name} className={styles.label}>
        <h3 className={styles.labelTitle}>{props.label}</h3>
        <RenderInputType type={props.type && props.type} />
      </label>
      <div className={styles.info}>
        <p>{props.info}</p>
      </div>
    </div>
  )
}

export default FormGroup
