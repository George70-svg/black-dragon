import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
// @ts-ignore
import { Routers } from '@types/routers'
import Icons from '@icons/icons'
import { initialFilters, updateProductFilterThunk } from '@store/products'
import { StyledMenuLogo } from '@components/header/components/menu/components/menuLogo/styles/menuLogo.styled'
import { IStore, useAppDispatch } from '@store/store'
import { useNavigate } from 'react-router-dom'

import { commonStyle } from '../../../../../../styles'

export function MenuLogo() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const setRouter = (routerName: Routers) => {
    navigate(routerName)
    dispatch(updateProductFilterThunk(initialFilters))
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
          <Icons name="logo" color="" size="58" className="icon" />
        </div>

        <div className="name-container" onClick={() => setRouter('/')}>
          <h2>Чай без церемоний</h2>

          <p>Оптом</p>
        </div>
      </StyledMenuLogo>
    </ThemeProvider>
  )
}
