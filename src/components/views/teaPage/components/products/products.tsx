import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledProducts } from '@components/views/teaPage/components/products/styles/products.styled'
import { IStore } from '@store/store'
import { TableView } from '@components/views/teaPage/components/products/components/tableView/tableView'
import { BlockView } from '@components/views/teaPage/components/products/components/blockView/blockView'
import { productTableDescription } from '@components/views/teaPage/components/products/components/tableView/utils/tableDescription'

import { commonStyle } from '../../../../../styles'

export function Products() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const products = useSelector((state: IStore) => state.products.products)
  const isTableView = useSelector((state: IStore) => state.products.tableView)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const columns = productTableDescription

  return (
    <ThemeProvider theme={theme}>
      <StyledProducts>
        {isTableView === 'list' ?
          <TableView products={products} tableDescription={columns} canDeleteItem={false} canCoverItem={true}/> :
          <BlockView />
        }
      </StyledProducts>
    </ThemeProvider>
  )
}
