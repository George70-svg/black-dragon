import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// @ts-ignore
import { Routers } from '@types/routers'
import { StyledNavigation } from '@components/header/components/navigation/styles/navigation.styled'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'

import { commonStyle } from '../../../../styles'

export function Navigation() {
  const navigate = useNavigate()
  const currentPath = useLocation().pathname

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
      <StyledNavigation>
        <ul>
          <li className={currentPath === '/price' ? 'active' : 'not-active'} onClick={() => setRouter('price')}>Скачать прайс</li>
          <li className={currentPath === '/delivery' ? 'active' : 'not-active'} onClick={() => setRouter('delivery')}>Доставка</li>
          <li className={currentPath === '/sales' ? 'active' : 'not-active'} onClick={() => setRouter('sales')}>Система скидок</li>
          {/*<li className={currentPath === '/news' ? 'active' : 'not-active'} onClick={() => setRouter('news')}>Новости</li>*/}
          <li className={currentPath === '/contacts' ? 'active' : 'not-active'} onClick={() => setRouter('contacts')}>Контакты</li>
        </ul>
      </StyledNavigation>
    </ThemeProvider>
  )
}
