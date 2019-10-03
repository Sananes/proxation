import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image/withIEPolyfill'
import { useWindowDimensions } from '../../lib/helpers'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import Icon from '../../components/icons'
import { isMobile } from 'react-device-detect'
import cn from 'classnames'
import styles from './Carousel.module.scss'

const Carousel = props => {
  const { data, className, slug } = props
  const { width } = useWindowDimensions()
  if (!data) {
    throw new Error('No slide items have been added in the studio')
  }

  return (
    <CarouselProvider
      naturalSlideWidth={369}
      naturalSlideHeight={480}
      lockOnWindowScroll={false}
      visibleSlides={isMobile || width <= 500 ? 1.5 : data.length > 3 ? 3.5 : data.length}
      totalSlides={data.length}
      className={cn(styles.sliderCarousel, className)}
    >
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>
          <h2 className={styles.caption}>Latest work</h2>
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
      <Slider className={cn(styles.slider, data.length <= 2 && styles.sliderContained)}>
        {data.map((data, i) => (
          <Slide key={i}>
            <Link to={slug + `/` + data.slug.current} className={styles.item}>
              <div className={styles.wrapper}>
                <Image
                  fluid={data.mainImage.asset.fluid}
                  alt={data.mainImage.alt}
                  styles={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h4 className={styles.title}>{data.title}</h4>
                <p className={styles.description}>Accessories</p>
              </div>
            </Link>
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  )
}

export default Carousel
