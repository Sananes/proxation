import React from 'react'

const strokeStyle = { vectorEffect: 'non-scaling-stroke' }

const Close = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLineCap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLineCap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Close
