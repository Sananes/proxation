import React, { useState } from 'react'
import Button from '../../components/Button'
import { navigate } from 'gatsby-link'
import useForm from 'react-hook-form'
import styles from './ContactForm.module.scss'
import cn from 'classnames'
import FormGroup from '../../components/FormGroup'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from '../../components/VisibilitySensor'
import { fadeOnVisible } from '../../lib/helpers'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const options = [
  { value: '10k', label: 'bis 10.000€' },
  { value: '25k', label: 'bis 25.000€' },
  { value: '75k', label: 'bis 75.000€' },
  { value: '100k', label: 'mehr als 100.000€' },
  { value: 'other', label: 'Kontinuierliche Betreuung' }
]

const ContactForm = ({ isDark } = props) => {
  const { handleSubmit, register, errors, watch } = useForm()

  const dark = isDark ? styles.dark : null
  const onSubmit = async data => {
    try {
      await fetch('/', {
        method: 'POST',
        cache: 'no-cache',
        body: encode({
          'form-name': 'contact-form',
          ...data
        }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(() => {
        navigate('/thankyou')
      })
    } catch (error) {
      console.log(error)
    }
  }

  //   const onSubmit = data => {
  //     try {
  //       await fetch('/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       body: encode({
  //         'form-name': 'contact-form',
  //         ...data
  //       })
  //       reset();
  //     })
  //       .then(() => navigate('/thankyou'))
  //       .catch(error => alert(error))
  //   }
  // }

  return (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Spring to={fadeOnVisible(isVisible)} delay={300}>
          {props => (
            <form
              className={styles.form}
              name="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              data-netlify-honeypot="bot-field"
              data-netlify="true"
              method="post"
              style={props}
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact-form" />

              <label className={styles.label} htmlFor="name">
                <h3>Vollständiger Name</h3>
                <input className={styles.input} type="text" name="name" id="name" ref={register} />
              </label>

              <label className={styles.label} htmlFor="email">
                <h3>E-Mail Adresse</h3>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  id="email"
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'invalid email address'
                    }
                  })}
                />
              </label>
              <label className={styles.label} htmlFor="company">
                <h3>Firma</h3>
                <input
                  className={styles.input}
                  type="text"
                  name="company"
                  id="company"
                  ref={register}
                />
              </label>

              <label className={cn(styles.label)} htmlFor="budget">
                <h3>Budget</h3>
                <div className={styles.selectWrapper}>
                  <select name="budget" className={styles.select} id="budget" ref={props.reference}>
                    {options &&
                      options.map(option => (
                        <option key={option.value} value={option.value} disabled={option.options}>
                          {option.label}
                        </option>
                      ))}
                  </select>
                </div>
              </label>

              <label className={cn(styles.label, styles.message)} htmlFor="message">
                <h3>Erzählen Sie uns kurz von Ihrem Projekt</h3>
                <textarea
                  type="text"
                  className={styles.textarea}
                  name="message"
                  id="message"
                  ref={register}
                />
              </label>

              <Button
                className={styles.button}
                text="Kontakt Aufnehmen"
                size="large"
                color="primary"
                type="submit"
              />

              {/*  <FormGroup
                label="Vollständiger Name"
                name="fullName"
                dark={isDark}
                reference={register({ required: 'Required' })}
                errors={errors.name}
                // disabled={isSubmitting}
              />
              <FormGroup
                label="E-Mail Adresse"
                name="email"
                reference={register({
                  required: 'Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address'
                  }
                })}
                dark={isDark}
                errors={errors.email}
              />

              <FormGroup
                label="Firma"
                name="company"
                reference={register}
                dark={isDark}
                errors={errors.company}
              />
              <FormGroup
                label="Budget"
                type="select"
                name="budget[]"
                reference={register}
                dark={isDark}
              />
              <FormGroup
                className={styles.message}
                label="Erzählen Sie uns kurz von Ihrem Projekt"
                name="message"
                type="textarea"
                reference={register}
                errors={errors.message}
                dark={isDark}
              />
              <Button
                className={styles.button}
                text="Kontakt Aufnehmen"
                size="large"
                color="primary"
                type="submit"
              /> */}
            </form>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  )
}

export default ContactForm
