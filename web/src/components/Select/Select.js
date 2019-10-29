import React, { forwardRef } from 'react'
import cn from 'classnames'
import styles from './Select.module.scss'
import Icon from '../icons'
const options = [
  { value: '10k', label: 'bis 10.000€' },
  { value: '25k', label: 'bis 25.000€' },
  { value: '75k', label: 'bis 75.000€' },
  { value: '100k', label: 'mehr als 100.000€' },
  { value: 'other', label: 'Kontinuierliche Betreuung' }
]

const Select = React.forwardRef(({ register, ...props }, ref) => (
  <div className={cn(styles.root, props.dark && styles.dark)}>
    <select {...props} className={styles.select} ref={register}>
      {options &&
        options.map(option => (
          <option key={option.value} value={option.value} disabled={option.options}>
            {option.label}
          </option>
        ))}
    </select>
    <Icon symbol="chevron-down" />
  </div>
))

export default Select
