import React from 'react'
import Section from '../../components/Section'
import Carousel from '../../components/Carousel'
import { useSpring, animated } from 'react-spring'

const CarouselSection = props => {
  const { data, className, slug, isVisible } = props
  if (!data) {
    throw new Error('No slide items have been added in the studio')
  }

  const fadeIn = useSpring({
    to: {
      opacity: isVisible ? 1 : 0
    },
    delay: isVisible ? 300 : 0
  })

  return (
    <Section className={className}>
      <animated.div style={fadeIn}>
        <Carousel data={data} slug={slug} isVisible={isVisible} />
      </animated.div>
    </Section>
  )
}

export default CarouselSection
