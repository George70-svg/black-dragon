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
