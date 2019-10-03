import React from 'react'
import Section from '../../components/Section'
import Carousel from '../../components/Carousel'

const CarouselSection = props => {
  const { data, className, slug } = props
  if (!data) {
    throw new Error('No slide items have been added in the studio')
  }

  return (
    <Section className={className}>
      <Carousel data={data} slug={slug} />
    </Section>
  )
}

export default CarouselSection
