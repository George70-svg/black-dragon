import React from 'react'
import { StyledCartPage } from '@components/views/cartPage/styles/cartPage.styled'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'

import { commonStyle } from '../../../styles'

export function CartPage() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  const cartItems = useSelector((state: IStore) => state.cart.items)

  return (
    <ThemeProvider theme={theme}>
      <StyledCartPage>
        <h1>CartPage</h1>
        {Object.values(cartItems).map((cartItem) => (
          <div>{cartItem.id}</div>
        ))}
      </StyledCartPage>
    </ThemeProvider>
  )
}
