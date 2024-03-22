import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledSeeMore } from '@components/views/teaPage/components/products/components/seeMore/styles/seeMore.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../../../../../styles'

export function SeeMore() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledSeeMore>
        Показать еще
      </StyledSeeMore>
    </ThemeProvider>
  )
}
