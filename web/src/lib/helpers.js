import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

function requireConfig(path) {
  try {
    return require('../../../studio/sanity.json')
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || ''
      }
    }
  }
}

const {
  api: { projectId, dataset }
} = requireConfig('../../../studio/sanity.json')

export function cn(...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function mapEdgesToNodes2(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node.relatedProjects)
}

export function getSanityImageFluid(source, width) {
  const imageObj = {
    asset: { _ref: source.asset._id }
  }
  const fluidProps = getFluidGatsbyImage(
    imageObj,
    { maxWidth: width || 1024 },
    { projectId, dataset }
  )
  if (fluidProps) {
    return fluidProps
  } else {
    return null
  }
}

export function alignmentClass(align, styles) {
  switch (align) {
    case 'left':
      return styles.left
    case 'right':
      return styles.right
    default:
      return null
  }
}

export function mobileAlignmentClass(align, styles) {
  switch (align) {
    case 'below':
      return styles.below
    case 'above':
      return styles.above
    default:
      return null
  }
}

export function sectionColumns(column, styles) {
  switch (column) {
    case '2':
      return styles.twoColumns
    case '3':
      return styles.threeColumns
    case '4':
      return styles.fourColumns
    default:
      return styles.oneColumns
  }
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current
}

export function getBlogUrl(slug) {
  return `/blog/${slug.current || slug}/`
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

function getWindowDimensions() {
  const windowGlobal = typeof window !== 'undefined' && window
  const { innerWidth: width, innerHeight: height } = windowGlobal
  return {
    width,
    height
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
