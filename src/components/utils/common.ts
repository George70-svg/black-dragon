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
