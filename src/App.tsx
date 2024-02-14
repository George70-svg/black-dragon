import React from 'react'
import { useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { IStore } from '@store/store'
import { ShopPage } from '@components/views/shopPage/shopPage'

import { router } from './router/router'
import { Styles } from './styles'

function App() {
  return <RouterProvider router={ router } />
}

export function Root() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  return (
    <>
      <Styles colorTheme={colorTheme} />

      <ShopPage />
    </>
  )
}

export default App
