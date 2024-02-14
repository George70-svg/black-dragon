import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { IStore } from '@store/store'
import { StyledShopPage } from '@components/views/shopPage/styles/shopPage.styled'
import { Header } from '@components/header/header'
import { TeaPage } from '@components/views/teaPage/teaPage'
import { PricePage } from '@components/views/pricePage/pricePage'
import { DeliveryPage } from '@components/views/deliveryPage/deliveryPage'
import { SalesPage } from '@components/views/salesPage/salesPage'
import { NewsPage } from '@components/views/newsPage/newsPage'
import { ContactsPage } from '@components/views/contactsPage/contactsPage'

import { Styles } from '../../../styles'

export function ShopPage() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  return (
    <StyledShopPage>
      <Styles colorTheme={colorTheme} />
      <Header />

      <Routes>
        <Route path="/" element={<TeaPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </StyledShopPage>
  )
}
