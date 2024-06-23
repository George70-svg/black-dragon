import { Product } from '@endpoints/endpoints/products/types'
import { SpecialCondition } from '@endpoints/endpoints/cart/type'
// @ts-ignore
import { Cart } from '@types/cartTypes'

//Если кор. то цену беру цену priceForUnit из units
//Расчёт цены для китайского прайса
export const getPriceForChina = (productNumber: number | undefined, product: Product, unit: string) => {
  if(productNumber && productNumber >= product.valueInBox && unit.toLowerCase() !== 'кор.'){
    //Если есть продукт и количество продукта больше чем количество в стандартной коробке и единица измерения не коробка, то возвращаем цену за коробку
    return product.priceBoxCny
  } else if(productNumber && productNumber * product.valueGram >= 5000 && unit.toLowerCase() !== 'кор.') {
    //Если есть продукт, суммарная масса больше 5 кг и единица измерения не коробка
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

//Расчёт общей цены корзины для региона (Регион не обязателен, т.к. проверяю только СПБ, если пусто, то Китай)
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

//Расчёт общего веса корзины для региона (Регион не обязателен, т.к. проверяю только СПБ, если пусто, то Китай)
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
        } else if(currentValue.unit.toLowerCase() === 'кг') {
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

//Расчёт процента скидки от суммы заказа
export const getMaxPercentage = (specialConditions: SpecialCondition[], price: number) => {
  let currentPercentage = 0

  specialConditions.forEach(conditionValue => {
    if(price >= conditionValue.conditionMinMoney) {
      currentPercentage = conditionValue.salePercentage
    }
  })

  return currentPercentage
}
