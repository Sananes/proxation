import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { useWindowDimensions } from '../../lib/helpers'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import Icon from '../../components/icons'
import cn from 'classnames'
import styles from './Carousel.module.scss'
import ProjectPreview from '../ProjectPreview'
import { Trail, Spring } from 'react-spring/renderprops'

const Carousel = props => {
  const { data, className, isVisible } = props
  const { width } = useWindowDimensions()
  const [isDevice, setIsDevice] = useState(false)

  useEffect(() => {
    if (width <= 700) {
      setIsDevice(true)
    } else {
      setIsDevice(false)
    }
  })

  if (!data) {
    throw new Error('No slide items have been added in the studio')
  }
  return (
    <CarouselProvider
      naturalSlideWidth={369}
      naturalSlideHeight={480}
      lockOnWindowScroll={false}
      interval={200}
      visibleSlides={isDevice ? 1.5 : data.length > 3 ? 3.5 : data.length}
      totalSlides={data.length}
      className={cn(styles.sliderCarousel, className)}
    >
      {/*   <div className={styles.pattern}>
        <Icon symbol="pattern" className={styles.pattern} />
  </div> */}
      <Spring delay={600} to={{ opacity: isVisible ? 1 : 0 }}>
        {props => (
          <div style={props} className={styles.headingWrapper}>
            <div className={styles.heading}>
              <h2 className={styles.caption}>Hervorgehobene Arbeit</h2>
            </div>

            <div className={styles.sliderNav}>
              <ButtonBack className={cn(styles.button, styles.buttonBack)}>
                <Icon symbol="arrow-left" />
              </ButtonBack>
              <ButtonNext className={cn(styles.button, styles.buttonNext)}>
                <Icon symbol="arrow-right" />
              </ButtonNext>
            </div>
          </div>
        )}
      </Spring>
      <Slider className={cn(styles.slider, data.length <= 2 && styles.sliderContained)}>
        <Trail
          items={data}
          keys={item => item._id}
          to={{
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 48px, 0)',
            opacity: isVisible ? 1 : 0
          }}
        >
          {item => props => (
            <Slide style={props}>
              <ProjectPreview {...item} className={styles.item} />
            </Slide>
          )}
        </Trail>
      </Slider>
    </CarouselProvider>
  )
}

export default Carousel
