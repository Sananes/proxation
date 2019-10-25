import React from 'react'
import Section from '../../components/Section'
import styles from './Features.module.scss'
import BlockText from '../../components/block-text'
import cn from 'classnames'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { Trail } from 'react-spring/renderprops'
import AnimateScroll from '../../components/AnimateScroll'
import Button from '../../components/Button'
import { buildImageObj, sectionColumns } from '../../lib/helpers'
import Image from 'gatsby-image/withIEPolyfill'
import { imageUrlFor } from '../../lib/image-url'

const Features = props => {
  const { isVisible } = props
  const items = props.items && props.items

  const heading = (props.heading && props.heading) || (props._rawHeading && props._rawHeading)
  if (!props) {
    throw new Error('No features have been added in the studio')
  }
  return (
    <AnimateScroll
      once
      condition={true}
      partialVisiblity="top"
      children={({ isVisible }) => (
        <Section
          className={styles.features}
          headingClassName={styles.heading}
          narrowHeading={true}
          sectionColor={props.sectionColor}
          isVisible={isVisible}
          title={heading.title}
          caption={heading.caption}
          lead={heading.subheading}
        >
          <div className={cn(styles.grid, sectionColumns(props.sectionColumns, styles))}>
            <AnimateScroll
              once
              condition={true}
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
                          style="ghost"
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
