import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import Icons from '@icons/icons'
import { StyledCartInfo } from '@components/header/components/menu/components/menuButtons/components/cartInfo/styles/cartInfo.styled'
import { CartInfoProps } from '@components/header/components/menu/components/menuButtons/components/cartInfo/types/types'
import { countryToCurrency } from '@utils/common'
import { getCartTotalPrice, getCartTotalWeight } from '@components/views/teaPage/components/products/components/tableView/utils/common'

import { commonStyle } from '../../../../../../../../styles'

export function CartInfo(props: CartInfoProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const cart = useSelector((state: IStore) => state.cart.items)
  const productType = useSelector((state: IStore) => state.products.filters.productType)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  const hasSpbProducts = Object.values(cart).filter(item => item.region === 'СПБ').length > 0 && productType === 'SPB'
  const hasChinaProducts = Object.values(cart).filter(item => item.region !== 'СПБ').length > 0 && productType !== 'SPB'

  return (
    <ThemeProvider theme={theme}>
      <StyledCartInfo>
        {props.showButton && (
          <div className="cart-button">
            <Icons name="basket" color="#fff" size="24" className="icon" />
            <p>Корзина</p>
          </div>
        )}

        {(hasSpbProducts || hasChinaProducts) && (<div className="cart-info">
          <div className="cart-weight">
            <p className="sum">Итого</p>
            <p
              className="weight">{productType === 'SPB' ? getCartTotalWeight(cart, 'СПБ') : getCartTotalWeight(cart)} кг</p>
          </div>

          <div className="cart-price">
            {productType === 'SPB' ? getCartTotalPrice(cart, 'СПБ') : getCartTotalPrice(cart)} {countryToCurrency(productType)}
          </div>
        </div>)}
      </StyledCartInfo>
    </ThemeProvider>
  )
}
