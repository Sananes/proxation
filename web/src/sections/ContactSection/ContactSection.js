import React from 'react'
import Section from '../../components/Section'
import AnimateScroll from '../../components/AnimateScroll'
import Button from '../../components/Button'
import Image from 'gatsby-image/withIEPolyfill'
import cn from 'classnames'
import styles from './ContactSection.module.scss'
import FormGroup from '../../components/FormGroup'
import Icon from '../../components/icons'
import { Spring } from 'react-spring/renderprops'
import useForm from 'react-hook-form'

const ContactSection = props => {
  const { data } = props
  if (!data) {
    throw new Error('No contact section have been added in the studio')
  }
  function fadeIn(isVisible) {
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
    }
  }

  const heading = (data.heading && data.heading) || (data._rawHeading && data._rawHeading)
  const isDark = (data.sectionColor === 'dark' && true) || false

  const { register, handleSubmit, errors } = useForm()
  return (
    <AnimateScroll
      condition={props.animate}
      partialVisibility
      children={({ isVisible }) => (
        <Spring to={fadeIn(isVisible)}>
          {props => (
            <Section
              style={props}
              className={cn(styles.root, isDark && styles.light)}
              sectionColor={data.sectionColor}
              headingClassName={styles.heading}
              dark={isDark}
            >
              <div className={styles.grid} style={(props, { delay: 300 })}>
                <div className={styles.content}>
                  <Image
                    className={styles.image}
                    alt={data.image.alt || heading.title}
                    fluid={data.image.asset.fluid}
                    style={props}
                  />
                </div>

                <div className={styles.wrapper} style={props}>
                  <h2 className={styles.title} style={props}>
                    {heading.title}
                  </h2>
                  <p className={styles.lead}>
                    Dann lassen Sie es uns gemeinsam angehen! Wir freuen uns auf Ihre Anfrage!{' '}
                    <a href="mailto: info@proxation.de">info@proxation.de</a>
                  </p>
                  <form
                    className={styles.form}
                    data-netlify="true"
                    name="Contact Form"
                    action="/thank-you"
                    type="POST"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="Contact Form" />

                    <FormGroup
                      errors={errors.fullName}
                      label="Vollständiger Name"
                      name="fullName"
                      register={register({ required: 'Required' })}
                      dark={isDark}
                    />
                    <FormGroup
                      label="E-Mail Adresse"
                      name="email"
                      register={register({
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
                      register={register}
                      dark={isDark}
                      errors={errors.company}
                    />
                    <FormGroup label="Budget" type="select" name="budget[]" dark={isDark} />
                    <FormGroup
                      className={styles.message}
                      label="Erzählen Sie uns kurz von Ihrem Projekt"
                      name="message"
                      type="textarea"
                      register={register}
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
                </div>
              </div>
              <div className={styles.other}>
                <div className={styles.contact} style={props}>
                  <h4 className={styles.title}>Kontakt</h4>
                  <ul>
                    <li>
                      <a href="mailto:info@proxation.de">
                        <strong>Email:</strong> info@proxation.de
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@proxation.de">
                        <strong>Call us:</strong> +49 778 112 332
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.badgesWrapper} style={props}>
                  <h4 className={styles.title}>Partners</h4>
                  <ul className={styles.badges}>
                    <li className={styles.badgeItem}>
                      <Icon symbol="shopware" className={styles.badgeIcon}></Icon>
                      <strong className={styles.bold}>Solutions</strong> Partner
                    </li>
                    <li className={cn(styles.badgeItem, styles.badgeTechnology)}>
                      <Icon symbol="shopware" className={styles.badgeIcon}></Icon>
                      <strong className={styles.bold}>Technology</strong> Partner
                    </li>
                    <li className={cn(styles.badgeItem, styles.badgeBusiness)}>
                      <Icon symbol="shopware" className={styles.badgeIcon}></Icon>
                      <strong className={styles.bold}>Business</strong> Partner
                    </li>
                  </ul>
                </div>
              </div>
            </Section>
          )}
        </Spring>
      )}
    />
  )
}

export default ContactSection
