import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { StyledCheckoutProblem } from '@components/views/cartPage/components/cartData/components/checkoutProblem/styles/checkoutProblem.styled'

import { commonStyle } from '../../../../../../../styles'

export function CheckoutProblem() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const problemOrderStatus = useSelector((state: IStore) => state.cart.problemOrderStatus)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledCheckoutProblem>
        <h2>Некорректные данные для заказа</h2>

        <p>{problemOrderStatus.message}</p>
      </StyledCheckoutProblem>
    </ThemeProvider>
  )
}
