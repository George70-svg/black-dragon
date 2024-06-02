import { Product, ProductType, UnitType } from '@endpoints/endpoints/products/types'

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const limitString = (str: string, limit: number): string => {
  if (str.length > limit) {
    return str.substring(0, limit) + '...'
  } else {
    return str
  }
}

export function uuidv4 () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export const withDelay = (callback: Function, delay: number) => {
  return setTimeout(callback, delay)
}

export function debounce<R>(fn: (...args: any) => R, ms: number) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    return new Promise<R>((resolve) => {
      timeoutId = setTimeout(() => resolve(fn(...args)), ms)
    })
  }
}

export function deduplicate<T> (simpleArray: Array<T>): T[] {
  return [ ...new Set(simpleArray) ]
}

export const currencyToCurrency = (currency: string | 'RUB') => {
  return currency === 'RUB' ? '₽' : '¥'
}

export const countryToCurrency = (country: ProductType) => {
  return country === 'SPB' ? '₽' : '¥'
}

export const countryToWeight = (country: ProductType) => {
  return country === 'SPB' ? 'кг' : 'цзинь'
}

export const unitToUnit = (unit: UnitType, country: ProductType) => {
  return unit === 'WEIGHT' ? country === 'SPB' ? 'кг' : 'Цзинь' : 'шт'
}

export const generateItemId = (product: Product) => {
  return `${product.art}-${product.shippingPoint}`
}
