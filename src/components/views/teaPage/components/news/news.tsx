import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledNews } from '@components/views/teaPage/components/news/styles/news.styled'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'

import { commonStyle } from '../../../../../styles'

export function News() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledNews>
        <p>News</p>
      </StyledNews>
    </ThemeProvider>
  )
}
