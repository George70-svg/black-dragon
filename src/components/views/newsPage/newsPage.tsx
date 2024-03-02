import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledNewsPage } from '@components/views/newsPage/styles/newsPage.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../styles'

export function NewsPage() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledNewsPage>
        <h1>NewsPage</h1>
      </StyledNewsPage>
    </ThemeProvider>
  )
}
