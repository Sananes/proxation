import React from 'react'
import Section from '../../components/Section'
import styles from './Features.module.scss'
import { useTrail } from 'react-spring'
import BlockText from '../../components/block-text'
import cn from 'classnames'
import { Trail } from 'react-spring/renderprops'
import AnimateScroll from '../../components/AnimateScroll'
import Button from '../../components/Button'
import { imageUrlFor } from '../../lib/image-url'
import { buildImageObj } from '../../lib/helpers'

const Features = props => {
  const { isVisible } = props

  const heading = props.heading && props.heading
  const items = props.items && props.items
  const itemsCount = items != null && items != '' && items.length

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
          title={heading.title && heading.title}
          caption={heading.caption && heading.caption}
          lead={heading.subheading && heading.subheading}
        >
          <div
            className={cn(
              styles.grid,
              itemsCount > 2 && styles.threeColumns,
              itemsCount === 2 && styles.twoColumns
            )}
          >
            <AnimateScroll
              once
              condition={true}
              children={({ isVisible }) => (
                <Trail
                  items={items}
                  keys={item => item.id}
                  to={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(-24px)',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {item => props => (
                    <div style={props} delay={1000} className={styles.featureItem} key={item.id}>
                      {item.image && item.image.asset && (
                        <img
                          src={item.image.asset.url}
                          title={item.image.alt || item.title}
                          alt={item.image.alt || item.title}
                          className={styles.image}
                        />
                      )}
                      <h4 className={styles.title}>{item.title}</h4>
                      <BlockText
                        className={styles.content}
                        blocks={item.content || item._rawContent}
                      />
                      {item.button && (
                        <Button
                          type="link"
                          style="ghost"
                          hasIcon={true}
                          className={styles.button}
                          text={item.button.text}
                          href={item.button.url}
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
