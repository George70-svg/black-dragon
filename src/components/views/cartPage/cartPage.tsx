import React from 'react'
import { StyledCartPage } from '@components/views/cartPage/styles/cartPage.styled'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'
import { CartData } from '@components/views/cartPage/components/cartData/cartData'
import { Filters } from '@components/views/teaPage/components/filters/filters'
import { CartProducts } from '@components/views/cartPage/components/cartProducts/cartProducts'
import { Product } from '@endpoints/endpoints/products/types'

import { commonStyle } from '../../../styles'

export function CartPage() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const cart = useSelector((state: IStore) => state.cart.items)
  const productType = useSelector((state: IStore) => state.products.filters.productType)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  const spbProducts = Object.values(cart).filter(item => item.region === 'СПБ')
    .map(product => product.item)
    .filter(product => !!product) as Product[]

  const chinaProducts = Object.values(cart)
    .filter(item => item.region !== 'СПБ')
    .map(product => product.item).filter(product => !!product) as Product[]

  const isEmptyCart = !spbProducts.length && !chinaProducts.length

  return (
    <ThemeProvider theme={theme}>
      <StyledCartPage>
        {!isEmptyCart && <div className="cart-container">
          <CartData />
          <Filters productType={true} maybeGroup={false} maybeFabrics={false} price={false} isNew={false} isInStock={false} isFavorites={false} />
          <CartProducts products={productType === 'SPB' ? spbProducts : chinaProducts}/>
        </div>}

        {isEmptyCart && <div className="empty-cart">
          <p>Корзина пуста</p>
        </div>}
      </StyledCartPage>
    </ThemeProvider>
  )
}
