import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledBlockView } from '@components/views/teaPage/components/products/components/blockView/styles/blockView.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../../../../../styles'

export function BlockView() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledBlockView>
        Block
      </StyledBlockView>
    </ThemeProvider>
  )
}
