import React from 'react'
import Section from '../../components/Section'
import Carousel from '../../components/Carousel'
import { useSpring, animated } from 'react-spring'
import AnimateScroll from '../../components/AnimateScroll'

const CarouselSection = props => {
  const { data, className, slug, isVisible } = props
  if (!data) {
    throw new Error('No slide items have been added in the studio')
  }

  return (
    <AnimateScroll
      condition={props.animate}
      partialVisibility
      once
      children={({ isVisible }) => (
        <Section className={className}>
          <div>
            <Carousel data={data} slug={slug} isVisible={isVisible} />
          </div>
        </Section>
      )}
    />
  )
}

export default CarouselSection
