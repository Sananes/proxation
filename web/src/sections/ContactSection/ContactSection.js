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
import VisibilitySensor from '../../components/VisibilitySensor'
import { fadeOnVisible } from '../../lib/helpers'

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

  const onSubmit = values => {
    console.log(values)
  }
  return (
    <Section
      className={cn(styles.root, isDark && styles.light)}
      sectionColor={data.sectionColor}
      headingClassName={styles.heading}
      dark={isDark}
    >
      <div className={styles.grid}>
        <div className={styles.content}>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {props => (
                  <Image
                    className={styles.image}
                    alt={data.image.alt || heading.title}
                    fluid={data.image.asset.fluid}
                    style={props}
                  />
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>

        <div className={styles.wrapper} style={props}>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)}>
                {props => (
                  <h2 className={styles.title} style={props}>
                    {heading.title}
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)} delay={300}>
                {props => (
                  <p style={props} className={styles.lead}>
                    Dann lassen Sie es uns gemeinsam angehen! Wir freuen uns auf Ihre Anfrage!{' '}
                    <a href="mailto: info@proxation.de">info@proxation.de</a>
                  </p>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring to={fadeOnVisible(isVisible)} delay={300}>
                {props => (
                  <form
                    className={styles.form}
                    data-netlify="true"
                    name="Contact Form"
                    action="/thank-you"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit(onSubmit)}
                    style={props}
                  >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="Contact Form" />

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
                    <FormGroup label="Budget" type="select" name="budget[]" dark={isDark} />
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
        </div>
      </div>

      <div className={styles.other}>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={fadeOnVisible(isVisible)} style={props}>
              {props => (
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
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring to={fadeOnVisible(isVisible)}>
              {props => (
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
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </Section>
  )
}

export default ContactSection
