import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledPricePage } from '@components/views/pricePage/styles/pricePage.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../styles'
import corgi from '../../../assets/img/corgi.png'

export function PricePage() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledPricePage>
        <img src={corgi} alt='ContactsPage' />
        <h1>Данная страница пока недоступна</h1>
      </StyledPricePage>
    </ThemeProvider>
  )
}
