import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledDeliveryPage } from '@components/views/deliveryPage/styles/deliveryPage.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../styles'

export function DeliveryPage() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledDeliveryPage>
        <h1>DeliveryPage</h1>
      </StyledDeliveryPage>
    </ThemeProvider>
  )
}
