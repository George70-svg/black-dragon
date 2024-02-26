import React from 'react'
import { StyledSalesPage } from '@components/views/salesPage/styles/salesPage.styled'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'
import { commonStyle } from '../../../styles'
import { StyledNavigation } from '@components/header/components/navigation/styles/navigation.styled'
import { ThemeProvider } from 'styled-components'

export function SalesPage() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledSalesPage>
        <h1>SalesPage</h1>
      </StyledSalesPage>
    </ThemeProvider>
  )
}
