import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Icons from '@icons/icons'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'
import { StyledMenuButtons } from '@components/header/components/menu/components/menuButtons/styles/menuButtons.styled'
// @ts-ignore
import { Routers } from '@types/routers'

import { commonStyle } from '../../../../../../styles'

export function MenuButtons() {
  const navigate = useNavigate()
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const setRouter = (routerName: Routers) => {
    navigate(routerName)
  }

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

        {/*<div className="button-container">
          <Icons name="heart" color="#fff" size="24" className="icon" />
          <p>Избранное</p>
        </div>*/}

        <div className="button-container" onClick={() => setRouter('cart')}>
          <Icons name="basket" color="#fff" size="24" className="icon" />
          <p>Корзина</p>
        </div>
      </StyledMenuButtons>
    </ThemeProvider>
  )
}
