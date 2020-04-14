import React, { useState, useEffect } from 'react'
import Section from '../../components/Section'
import { useWindowDimensions } from '../../lib/helpers'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import cn from 'classnames'
import Icon from '../../components/icons'
import { Spring, useSpring, animated } from 'react-spring'
import AnimateScroll from '../../components/AnimateScroll'
import styles from './TestimonialsSection.module.scss'

const TestimonialsSection = props => {
  const { data, className, slug, isVisible } = props


  const { width } = useWindowDimensions()
  const [isDevice, setIsDevice] = useState(false)

  // useEffect(() => {
  //   if (width <= 700) {
  //     setIsDevice(true)
  //   } else {
  //     setIsDevice(false)
  //   }
  // })

  const dataLength = 1
  return (
    <CarouselProvider
      naturalSlideHeight={120}
      naturalSlideWidth={800}
      lockOnWindowScroll={false}
      interval={200}
      totalSlides={dataLength}
      className={cn(styles.sliderCarousel, className)}
    >
    <div className={styles.heading}>

    <h2 className={styles.title}>Testimonials</h2>



  </div>

  <div className={styles.testimonialSVG}>
  <svg width="53" height="40" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 28.3333C0 35.9722 4.26197 40 11.5486 40C16.3605 40 20.7599 36.3889 20.7599 31.5278C20.7599 26.3889 16.4979 22.9167 10.5862 22.9167C11.1361 14.1667 16.6354 8.75 23.3721 4.16667L19.7975 0C10.9986 4.44444 0 14.5833 0 28.3333ZM29.0089 28.3333C29.0089 35.9722 33.2708 40 40.5574 40C45.3693 40 49.7688 36.3889 49.7688 31.5278C49.7688 26.3889 45.5068 22.9167 39.595 22.9167C40.145 14.1667 45.6443 8.75 52.381 4.16667L48.8064 0C40.0075 4.44444 29.0089 14.5833 29.0089 28.3333Z" fill="#131313"/>
  </svg>
  </div>
<div className={styles.sliderContainer}>
<ButtonBack className={cn(styles.button, styles.buttonBack)}>
<Icon symbol="arrow-left" />
</ButtonBack>
<ButtonNext className={cn(styles.button, styles.buttonNext)}>
<Icon symbol="arrow-right" />
</ButtonNext>
<Slider className={cn(styles.slider, styles.sliderContained)}>

<Slide><div className={styles.testimonial}><p>“Wenn Sie nach einer maßgeschneiderten Lösung suchen, erstellt das Proxation-Expertenteam ein Online-Erlebnis, das Ihre Kunden lieben werden.”</p><div className={styles.author}><h4 className={styles.authorTitle}>Harley Finkelstein</h4><span className={styles.authorRole}>
CEO, Plazotta</span></div></div></Slide>

</Slider>
</div>

    </CarouselProvider>
  )
}

export default TestimonialsSection
