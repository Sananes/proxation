import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Figure from './figure'
import Slideshow from './slideshow'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import VisibilitySensor from '../VisibilitySensor'
import { Spring } from 'react-spring/renderprops'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return (
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
                  }}
                >
                  {animate => <h1 style={animate}>{props.children}</h1>}
                </Spring>
              )}
            </VisibilitySensor>
          )

        case 'h2':
          return (
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
                  }}
                >
                  {animate => <h2 style={animate}>{props.children}</h2>}
                </Spring>
              )}
            </VisibilitySensor>
          )

        case 'h3':
          return (
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
                  }}
                >
                  {animate => <h3 style={animate}>{props.children}</h3>}
                </Spring>
              )}
            </VisibilitySensor>
          )

        case 'h4':
          return (
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
                  }}
                >
                  {animate => <h4 style={animate}>{props.children}</h4>}
                </Spring>
              )}
            </VisibilitySensor>
          )

        case 'blockquote':
          return (
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
                  }}
                >
                  {animate => <blockquote style={animate}>{props.children}</blockquote>}
                </Spring>
              )}
            </VisibilitySensor>
          )

        default:
          return (
            <VisibilitySensor once partialVisibility>
              {({ isVisible }) => (
                <Spring
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
                  }}
                >
                  {animate => <p style={animate}>{props.children}</p>}
                </Spring>
              )}
            </VisibilitySensor>
          )
      }
    },
    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
              }}
            >
              {animate => (
                <div style={{ ...animate, width: '100%', margin: '1rem auto' }}>
                  <YouTube videoId={id} isVisible={isVisible} />
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      )
    },
    figure(props) {
      return (
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-24px)'
              }}
            >
              {animate => <Figure {...props.node} style={animate} isVisible={isVisible} />}
            </Spring>
          )}
        </VisibilitySensor>
      )
    },
    slideshow(props) {
      return <Slideshow {...props.node} />
    }
  }
}

const BlockContent = ({ className, blocks, isBlog = false }) => {
  const newBlocks = blocks.map(block => {
    return Object.assign({ blog: isBlog }, block)
  })
  return <BaseBlockContent className={className} blocks={newBlocks} serializers={serializers} />
}

export default BlockContent
