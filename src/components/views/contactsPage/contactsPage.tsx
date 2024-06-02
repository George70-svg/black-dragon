import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledContactsPage } from '@components/views/contactsPage/styles/contactsPage.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../styles'
import corgi from '../../../assets/img/corgi.png'

export function ContactsPage() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledContactsPage>
        <img src={corgi} alt='ContactsPage' />
        <h1>Данная страница пока недоступна</h1>
      </StyledContactsPage>
    </ThemeProvider>
  )
}
