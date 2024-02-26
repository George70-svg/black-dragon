import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledMenuButtons } from '@components/header/components/menu/components/menuButtons/styles/menuButtons.styled'
import Icons from '@icons/icons'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'

import { commonStyle } from '../../../../../../styles'

export function MenuButtons() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledMenuButtons>
        <div className="button-container">
          <Icons name="profile" color="#fff" size="24" className="icon" />
          <p>Профиль</p>
        </div>

        <div className="button-container">
          <Icons name="heart" color="#fff" size="24" className="icon" />
          <p>Избранное</p>
        </div>

        <div className="button-container">
          <Icons name="basket" color="#fff" size="24" className="icon" />
          <p>Корзина</p>
        </div>
      </StyledMenuButtons>
    </ThemeProvider>
  )
}
