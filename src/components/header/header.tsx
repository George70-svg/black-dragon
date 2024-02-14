import React from 'react'
import { StyledHeader } from '@components/header/styles/header.styled'
import { Navigation } from '@components/header/components/navigation/navigation'
import { Menu } from '@components/header/components/menu/menu'

export function Header() {
  return (
    <StyledHeader>
      <Navigation />
      <Menu />
    </StyledHeader>
  )
}
