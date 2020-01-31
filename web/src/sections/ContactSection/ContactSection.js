import React from 'react'
import Section from '../../components/Section'
import Image from 'gatsby-image/withIEPolyfill'
import cn from 'classnames'
import styles from './ContactSection.module.scss'
import { Spring } from 'react-spring/renderprops'
import useForm from 'react-hook-form'
import VisibilitySensor from '../../components/VisibilitySensor'
import { fadeOnVisible } from '../../lib/helpers'
import ShopwarePartners from '../../components/ShopwarePartner/ShopwarePartners'
import ContactForm from '../../components/ContactForm/ContactForm'

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

          <ContactForm isDark={true} />
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
                        <strong>Call us:</strong> +49 (0) 89 4275 9987
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <ShopwarePartners title="Partner" className={styles.badges} isDark={true} />
      </div>
    </Section>
  )
}

export default ContactSection
