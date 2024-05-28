import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { StyledCartProducts } from '@components/views/cartPage/components/cartProducts/styles/cartProducts.styled'
import { TableView } from '@components/views/teaPage/components/products/components/tableView/tableView'
import { CartProductProps } from '@components/views/cartPage/components/cartProducts/types/type'
import { cartTableDescription } from '@components/views/teaPage/components/products/components/tableView/utils/tableDescription'

import { commonStyle } from '../../../../../styles'

export function CartProducts(props: CartProductProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const columns = cartTableDescription

  return (
    <ThemeProvider theme={theme}>
      <StyledCartProducts>
        <TableView products={props.products} tableDescription={columns} canDeleteItem={true} canCoverItem={false} />
      </StyledCartProducts>
    </ThemeProvider>
  )
}
