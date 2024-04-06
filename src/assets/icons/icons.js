import React from 'react'

import IconsSVG from './icons.svg'

function Icons({ name, color, size, className }) {
  //TODO: [@asiuraev 03.04.2024] Проблема, что я иссользую size для ширины и высоты. Т.к. иконки могут быть не квадратными
  return (
    <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

export default Icons
