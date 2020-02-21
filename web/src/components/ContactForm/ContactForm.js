import React, { useState } from 'react'
import Button from '../../components/Button'
import { navigate } from 'gatsby-link'
import styles from './ContactForm.module.scss'
import FormGroup from '../../components/FormGroup'
import { Spring } from 'react-spring/renderprops'
import useForm from 'react-hook-form'
import VisibilitySensor from '../../components/VisibilitySensor'
import { fadeOnVisible } from '../../lib/helpers'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = props => {
  const { isDark } = props
  const { register, handleSubmit, errors } = useForm()

  // const handleChange = e => {
  //   console.log(values)
  //   setValues({ [e.target.name]: e.target.value })
  // }

  const onSubmit = values => {
    console.log(values)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact-form',
        ...values
      })
    })
      .then(() => navigate('/thankyou'))
      .catch(error => alert(error))
  }

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

              <FormGroup
                errors={errors.fullName}
                label="Vollständiger Name"
                name="fullName"
                reference={register({ required: 'Required' })}
                dark={isDark}
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
              />
            </form>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  )
}

export default ContactForm
