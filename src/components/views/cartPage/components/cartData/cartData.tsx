import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore, useAppDispatch } from '@store/store'
import { Button, Modal } from '@mui/material'
import { countryToCurrency } from '@utils/common'
import { getCartTotalPrice, getCartTotalWeight, getChinaSale, getMaxPercentage } from '@components/views/teaPage/components/products/components/tableView/utils/common'
import { StyledCartData } from '@components/views/cartPage/components/cartData/styles/cartData.styled'
import { CheckoutProblem } from '@components/views/cartPage/components/cartData/components/checkoutProblem/checkoutProblem'
import { CheckoutDone } from '@components/views/cartPage/components/cartData/components/checkoutDone/checkoutDone'
import { Product } from '@endpoints/endpoints/products/types'
import { checkoutThunk, setCheckoutDoneStatusThunk, setCheckoutProblemStatusThunk, setProblemOrderStatusThunk } from '@store/shoppingСart'

import { commonStyle } from '../../../../../styles'
// @ts-ignore
import { ProblemOrderStatus } from '@types/cartTypes'
import { Orders } from '@endpoints/endpoints/cart/type'

export function CartData() {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const cart = useSelector((state: IStore) => state.cart.items)
  const user = useSelector((state: IStore) => state.auth.user)
  const cartCondition = useSelector((state: IStore) => state.cart.condition)
  const productType = useSelector((state: IStore) => state.products.filters.productType)
  const checkoutDoneOpen = useSelector((state: IStore) => state.cart.isCheckoutDone)
  const checkoutProblemOpen = useSelector((state: IStore) => state.cart.isCheckoutProblem)


  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const price = productType === 'SPB' ? getCartTotalPrice(cart, 'СПБ').toFixed(2) : getCartTotalPrice(cart).toFixed(2)
  const commonWeight = productType === 'SPB' ? getCartTotalWeight(cart, 'СПБ').toFixed(2) : getCartTotalWeight(cart).toFixed(2)
  const minOrder = cartCondition ? cartCondition[productType].minOrderMoney : 0

  const commonSale = productType === 'CHINA' ? Object.values(cart)
    .filter(currentValue => currentValue.item)
    .reduce((accumulator, currentValue) => {
      return accumulator + getChinaSale(currentValue.number, currentValue.item as Product, currentValue.unit ? currentValue.unit : (currentValue.item as Product).units[0].name)
    }, 0) : 0

  const specialSalePercentage = productType && cartCondition && cartCondition[productType].specialConditions.length
    ? getMaxPercentage(cartCondition[productType].specialConditions, +price)
    : 0

  const priceWithSale = +price - +(+price * (specialSalePercentage / 100)).toFixed(2)

  const handleCheckout = async () => {
    const orderStatusProblem = await checkOrder()

    if (!orderStatusProblem.status) {
      const orders: Orders = {}

      // Определяю товары для типа корзины
      const currentProductTypeItems = productType === 'SPB' ?
        Object.values(cart).filter(item => item.region === 'СПБ') :
        Object.values(cart).filter(item => item.region !== 'СПБ')

      currentProductTypeItems.forEach(item => {
        if(item.item && item.number) {
          const id = item.item.art

          orders[id] = item.number
        }
      })

      dispatch(checkoutThunk({
        productType,
        orders: orders
      }))
    }
  }

  const handleCheckoutProblemClose = () => {
    dispatch(setCheckoutProblemStatusThunk())
  }

  const handleCheckoutDoneClose = () => {
    dispatch(setCheckoutDoneStatusThunk())
  }

  const checkOrder = async (): Promise<ProblemOrderStatus> => {
    // Если стоимость заказа меньше минимальной стоимости заказа
    if (priceWithSale < minOrder) {
      return await dispatch(setProblemOrderStatusThunk({
        status: true,
        message: `Сумма заказа ${priceWithSale} ниже минимальной суммы заказа ${minOrder} ${countryToCurrency(productType)}`
      })).unwrap()
    }

    // Определяю товары для типа корзины
    const currentProductTypeItems = productType === 'SPB' ?
      Object.values(cart).filter(item => item.region === 'СПБ') :
      Object.values(cart).filter(item => item.region !== 'СПБ')

    // Если количество товара не кратно шагу заказа товара
    for (const item of currentProductTypeItems) {
      if (item.number && item.item && item.number % item.item.step !== 0) {
        return await dispatch(setProblemOrderStatusThunk({
          status: true,
          message: `Количество товара ${item.item.art} выбрано некорректно, т.к. не соответствует шагу заказа - ${item.item.step}`
        })).unwrap()
      }
    }

    return await dispatch(setProblemOrderStatusThunk({
      status: false,
      message: ''
    })).unwrap()
  }


  return (
    <ThemeProvider theme={theme}>
      <StyledCartData>
        <div className="info-container">
          <div className="info price">
            <p className="first">Сумма:</p>
            <p className="second">{priceWithSale} {countryToCurrency(productType)}</p>
          </div>

          <div className="info weigth">
            <p className="first">Вес:</p>
            <p className="second">{commonWeight} кг</p>
          </div>

          <div className="info sales">
            <p className="first">Скидка: </p>
            <p
              className="second">{commonSale + +(+price * (specialSalePercentage / 100)).toFixed(2)} {countryToCurrency(productType)}</p>
          </div>

          <div className="info min-order">
            <p className="first">Минимальный заказ: </p>
            <p className="second">{minOrder} {countryToCurrency(productType)}</p>
          </div>
        </div>

        <Button className="checkout" variant="contained" onClick={handleCheckout}>
          Оформить
        </Button>

        <Modal
          open={checkoutProblemOpen}
          onClose={handleCheckoutProblemClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className="checkout-problem-modal"
        >
          <div className="modal-content">
            <CheckoutProblem />
          </div>
        </Modal>

        <Modal
          open={checkoutDoneOpen}
          onClose={handleCheckoutDoneClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className="checkout-problem-modal"
        >
          <div className="modal-content">
            <CheckoutDone onClose={handleCheckoutDoneClose} />
          </div>
        </Modal>
      </StyledCartData>
    </ThemeProvider>
  )
}
