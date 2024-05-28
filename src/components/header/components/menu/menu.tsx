import React from 'react'
import { useLocation } from 'react-router-dom'
import { StyledMenu } from '@components/header/components/menu/styles/menu.styled'
import { MenuLogo } from '@components/header/components/menu/components/menuLogo/menuLogo'
import { MenuSearch } from '@components/header/components/menu/components/menuSearch/menuSearch'
import { MenuButtons } from '@components/header/components/menu/components/menuButtons/menuButtons'

export function Menu() {
  const currentPath = useLocation().pathname

  return (
    <StyledMenu>
      <MenuLogo />
      {currentPath === '/' && <MenuSearch />}
      <MenuButtons />
    </StyledMenu>
  )
}
