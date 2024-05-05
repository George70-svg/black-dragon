import { useEffect, useRef, useState } from 'react'

export function useThresholdScroll(threshold = 300) {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false)
  const lastScrollY = useRef(0) // Используем useRef для сохранения последнего значения скролла

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (!isAboveThreshold && currentScrollY > threshold) {
        setIsAboveThreshold(true)
      } else if (isAboveThreshold && currentScrollY <= threshold) {
        setIsAboveThreshold(false)
      }
      lastScrollY.current = currentScrollY // Обновляем последнее известное значение скролла
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isAboveThreshold, threshold])

  return isAboveThreshold
}
