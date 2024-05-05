import { Product } from '@endpoints/endpoints/products/types'
// @ts-ignore
import { Cart } from '@types/cartTypes'

//Расчёт цены для китайского прайса
export const getPriceForChina = (productNumber: number | undefined, product: Product, unit: string) => {
  if(productNumber && productNumber >= product.valueInBox){
    return product.priceBoxCny
  } else if(productNumber && productNumber * product.valueGram >= 5000) {
    return product.priceFiveKgCny
  } else {
    const priceForUnit = product.units.find(unitItem => unitItem.name.toLowerCase() === unit.toLowerCase())?.priceForUnit ?? product.price
    return priceForUnit
  }
}

//Расчёт скидки для китайского прайса
export const getChinaSale = (productNumber: number | undefined, product: Product, unit: string) => {
  const priceForUnit = product.units.find(unitItem => unitItem.name.toLowerCase() === unit.toLowerCase())?.priceForUnit ?? product.price
  const saleForUnit = product.units.find(unitItem => unitItem.name.toLowerCase() === unit.toLowerCase())?.saleForUnit ?? 0

  if(unit === 'кор.' && productNumber) {
    return productNumber * saleForUnit
  } else if(productNumber) {
    return (productNumber * priceForUnit) - (productNumber * getPriceForChina(productNumber, product, unit))
  } else {
    return 0
  }
}

export const getCartTotalPrice = (cart: Cart, region?: string) => {
  const items = Object.values(cart)

  if(region === 'СПБ') {
    const SPBItems = items.filter(item => item.region === region)

    return SPBItems.reduce((accumulator, currentValue) => {
      if(currentValue.price && currentValue.number) {
        return accumulator + (currentValue.price * currentValue.number)
      } else {
        return accumulator
      }
    }, 0)
  } else {
    const ChinaItems = items.filter(item => item.region !== 'СПБ')

    return ChinaItems.reduce((accumulator, currentValue) => {
      if(currentValue.price && currentValue.number) {
        return accumulator + (currentValue.price * currentValue.number)
      } else {
        return accumulator
      }
    }, 0)
  }
}

export const getCartTotalWeight = (cart: Cart, region?: string) => {
  const items = Object.values(cart)
  if(region === 'СПБ') {
    const SPBItems = items.filter(item => item.region === region)

    return SPBItems.reduce((accumulator, currentValue) => {
      if(currentValue.unit && currentValue.number && currentValue.item) {
        if(currentValue.unit.toLowerCase() === 'шт') {
          return accumulator + (currentValue.item.valueGram * currentValue.number / 1000)
        } else if(currentValue.unit.toLowerCase() === 'кг') {
          return accumulator + (currentValue.item.valueGram * currentValue.item.step * currentValue.number / 1000)
        } else {
          return accumulator
        }
      } else {
        return accumulator
      }
    }, 0)
  } else {
    const ChinaItems = items.filter(item => item.region !== 'СПБ')

    return ChinaItems.reduce((accumulator, currentValue) => {
      if(currentValue.unit && currentValue.number && currentValue.item) {
        if(currentValue.unit.toLowerCase() === 'шт') {
          return accumulator + (currentValue.item.valueGram * currentValue.number / 1000)
        } else if(currentValue.unit.toLowerCase() === 'кор.') {
          return accumulator + (currentValue.item.valueGram * currentValue.item.valueInBox * currentValue.number / 1000)
        } else if(currentValue.unit.toLowerCase() === 'цзинь') {
          return accumulator + (currentValue.item.valueGram * currentValue.item.step * currentValue.number / 1000)
        } else {
          return accumulator
        }
      } else {
        return accumulator
      }
    }, 0)
  }
}
