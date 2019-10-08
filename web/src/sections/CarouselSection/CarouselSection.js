import React from 'react'
import Section from '../../components/Section'
import Carousel from '../../components/Carousel'

const CarouselSection = props => {
  const { data, className, slug, isVisible } = props
  if (!data) {
    throw new Error('No slide items have been added in the studio')
  }

  return (
    <Section className={className}>
      <Carousel data={data} slug={slug} isVisible={isVisible} />
    </Section>
  )
}

export default CarouselSection
