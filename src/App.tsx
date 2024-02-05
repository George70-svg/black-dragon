import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, RouterProvider } from 'react-router-dom'
import { IStore } from '@store/store'
import { Login } from '@components/components/login/login'
import { CardModes } from '@components/components/card-modes/card-modes'

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

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/modes" element={<CardModes />} />
      </Routes>
    </>
  )
}

export default App
