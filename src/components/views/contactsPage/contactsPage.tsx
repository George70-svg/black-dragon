import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledContactsPage } from '@components/views/contactsPage/styles/contactsPage.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../styles'

export function ContactsPage() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledContactsPage>
        <h1>ContactsPage</h1>
      </StyledContactsPage>
    </ThemeProvider>
  )
}
