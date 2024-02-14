import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledNavigation } from '@components/header/components/navigation/styles/navigation.styled'

type Routers = '/' | 'price' | 'delivery' | 'sales' | 'news' | 'contacts'

export function Navigation() {
  const navigate = useNavigate()

  const setRouter = (routerName: Routers) => {
    navigate(routerName)
  }

  return (
    <StyledNavigation>
      <ul>
        <li onClick={() => setRouter('/')}>tea</li>
        <li onClick={() => setRouter('price')}>price</li>
        <li onClick={() => setRouter('delivery')}>delivery</li>
        <li onClick={() => setRouter('sales')}>sales</li>
        <li onClick={() => setRouter('news')}>news</li>
        <li onClick={() => setRouter('contacts')}>contacts</li>
      </ul>
    </StyledNavigation>
  )
}
