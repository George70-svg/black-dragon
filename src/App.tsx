import React from 'react'
import { useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { IStore, useAppDispatch } from '@store/store'
import { ShopPage } from '@components/views/shopPage/shopPage'

import { router } from './router/router'
import { Styles } from './styles'
import { whoamiThunk } from '@store/auth'
import { setCartConditionThunk } from '@store/shoppingСart'

function App() {
  return <RouterProvider router={router} />
}

export function Root() {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  dispatch(whoamiThunk())
  dispatch(setCartConditionThunk())

  return (
    <>
      <Styles colorTheme={colorTheme} />

      <ShopPage />
    </>
  )
}

export default App
