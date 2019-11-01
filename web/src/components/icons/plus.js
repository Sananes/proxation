import React from 'react'

const PlusIcon = ({ strokeWidth = 2 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 5v14M5 12h14"
    />
  </svg>
)

export default PlusIcon
