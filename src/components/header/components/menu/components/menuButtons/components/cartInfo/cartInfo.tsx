import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import Icons from '@icons/icons'
import { StyledCartInfo } from '@components/header/components/menu/components/menuButtons/components/cartInfo/styles/cartInfo.styled'
import { CartInfoProps } from '@components/header/components/menu/components/menuButtons/components/cartInfo/types/types'

import { commonStyle } from '../../../../../../../../styles'

export function CartInfo(props: CartInfoProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const cartData = useSelector((state: IStore) => state.cart.cartData)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledCartInfo>
        {props.showButton && (
          <div className="cart-button">
            <Icons name="basket" color="#fff" size="24" className="icon" />
            <p>Корзина</p>
          </div>
        )}

        <div className="cart-info">
          <div className="cart-weight">
            <p className="sum">Итого</p>
            <p className='weight'>{ cartData.cartWeightKg / 1000 } кг</p>
          </div>

          <div className="cart-price">
            { cartData.cartSumRub.toLocaleString() } ₽
          </div>
        </div>
      </StyledCartInfo>
    </ThemeProvider>
  )
}
