import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledGoods } from '@components/views/teaPage/components/goods/styles/goods.styled'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'

import { commonStyle } from '../../../../../styles'

export function Goods() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledGoods>
        <p>Goods</p>
      </StyledGoods>
    </ThemeProvider>
  )
}
