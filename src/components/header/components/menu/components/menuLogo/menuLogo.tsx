import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
// @ts-ignore
import { Routers } from '@types/routers'
import Icons from '@icons/icons'
import { StyledMenuLogo } from '@components/header/components/menu/components/menuLogo/styles/menuLogo.styled'
import { IStore } from '@store/store'
import { useNavigate } from 'react-router-dom'

import { commonStyle } from '../../../../../../styles'

export function MenuLogo() {
  const navigate = useNavigate()

  const setRouter = (routerName: Routers) => {
    navigate(routerName)
  }

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledMenuLogo>
        <div className="icon-container" onClick={() => setRouter('/')}>
          <Icons name="logo" color="#fff" size="58" className="icon" />
        </div>

        <div className="name-container" onClick={() => setRouter('/')}>
          <h2>Чай без церемоний</h2>

          <p>Оптовые продажи</p>
        </div>
      </StyledMenuLogo>
    </ThemeProvider>
  )
}
