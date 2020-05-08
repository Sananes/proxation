import React, { useState, useEffect } from 'react'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import { useWindowDimensions } from '../../lib/helpers'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import cn from 'classnames'
import Icon from '../../components/icons'
import { Spring, useSpring, animated } from 'react-spring'
import AnimateScroll from '../../components/AnimateScroll'
import styles from './slideshow.module.scss'

const Slideshow = props => {
  const { className} = props
  const { width } = useWindowDimensions()
  const [isDevice, setIsDevice] = useState(false)

  useEffect(() => {
    if (width <= 700) {
      setIsDevice(true)
    } else {
      setIsDevice(false)
    }
  })
  if (!props.slides) return null
  const len = props.slides.length


  return (
    <CarouselProvider
      totalSlides={len}
      naturalSlideWidth={1000}
      naturalSlideHeight={Math.floor((9 / 16) * 1200)}
      isIntrinsicHeight={false}
      visibleSlides={isDevice ? 1 : len > 2 && 1.5}
      infinite={true}
      interval={200}
      className={cn(styles.sliderCarousel, styles.root, className)}
    >

      <div className={styles.sliderContainer}>
       <div className={styles.buttons}>
        <ButtonBack className={cn(styles.button, styles.buttonBack)}>
            <Icon symbol="arrow-left" />
          </ButtonBack>
          <ButtonNext className={cn(styles.button, styles.buttonNext)}>
            <Icon symbol="arrow-right" />
          </ButtonNext>
        </div>
        <Slider trayTag="div" className={cn(styles.slider, styles.sliderContained)}>
          {props.slides.map((slide, i) => (
            <Slide index={i} tag="div" key={slide._key} className={styles.slide}>
              {slide.asset && (
                <img
                  src={imageUrlFor(buildImageObj(slide)).width(1000)
                    .height(Math.floor((9 / 16) * 1200))
                    .fit('crop').url()}
                />
              )}
            </Slide>
          ))}
        </Slider>
      </div>
    </CarouselProvider>
  )
}

export default Slideshow
