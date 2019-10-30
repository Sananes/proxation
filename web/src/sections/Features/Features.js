import React from 'react'
import Section from '../../components/Section'
import styles from './Features.module.scss'
import BlockText from '../../components/block-text'
import cn from 'classnames'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { Trail } from 'react-spring/renderprops'
import Button from '../../components/Button'
import { buildImageObj, sectionColumns } from '../../lib/helpers'
import Image from 'gatsby-image/withIEPolyfill'
import { imageUrlFor } from '../../lib/image-url'
import VisibilitySensor from '../../components/VisibilitySensor'

const Features = props => {
  const { isVisible } = props
  const items = props.items && props.items

  const heading = (props.heading && props.heading) || (props._rawHeading && props._rawHeading)
  if (!props) {
    throw new Error('No features have been added in the studio')
  }
  return (
    <VisibilitySensor
      once
      partialVisibility
      children={({ isVisible }) => (
        <Section
          isVisible={isVisible}
          className={styles.features}
          headingClassName={styles.heading}
          narrowHeading={true}
          sectionColor={props.sectionColor}
          title={heading.title}
          caption={heading.caption}
          lead={heading.subheading}
        >
          <div className={cn(styles.grid, sectionColumns(props.sectionColumns, styles))}>
            <VisibilitySensor
              once
              partialVisibility
              children={({ isVisible }) => (
                <Trail
                  items={items}
                  keys={item => item._key}
                  to={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(-24px)',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {item => props => (
                    <div style={props} delay={1000} className={styles.featureItem} key={item._key}>
                      {item.image && item.image.asset && (
                        <div className={styles.image}>
                          <img
                            src={imageUrlFor(buildImageObj(item.image))}
                            className={styles.image}
                            alt={item.image.asset.alt || heading.title}
                          />
                        </div>
                      )}
                      <h4 className={styles.title}>{item.title}</h4>
                      {item._rawContent ? (
                        <BlockText className={styles.content} blocks={item._rawContent} />
                      ) : (
                        <BlockText className={styles.content} blocks={item.content} />
                      )}
                      {item.button && (
                        <Button
                          type="link"
                          color="ghost"
                          hasIcon={true}
                          className={styles.button}
                          text={item.button.text}
                          to={item.button.url}
                        />
                      )}
                    </div>
                  )}
                </Trail>
              )}
            />
          </div>
        </Section>
      )}
    />
  )
}

export default Features
