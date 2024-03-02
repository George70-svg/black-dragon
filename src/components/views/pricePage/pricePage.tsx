import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledPricePage } from '@components/views/pricePage/styles/pricePage.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../styles'

export function PricePage() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledPricePage>
        <h1>PricePage</h1>
      </StyledPricePage>
    </ThemeProvider>
  )
}
