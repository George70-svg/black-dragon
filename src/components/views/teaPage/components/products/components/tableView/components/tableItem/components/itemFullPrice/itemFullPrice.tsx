import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { ItemPriceProps } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemPrice/types/types'
import { currencyToCurrency } from '@utils/common'

import { commonStyle } from '../../../../../../../../../../../styles'
import {
  StyledItemFullPrice
} from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemFullPrice/styles/itemFullPrice.styled'

export function ItemFullPrice(props: ItemPriceProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const currentProductNumber = useSelector((state: IStore) => state.cart.items[props.itemId]?.number)
  const currentPrice = useSelector((state: IStore) => state.cart.items[props.itemId]?.price)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const fullPrice = () => {
    if(currentProductNumber && currentPrice) {
      return currentProductNumber * currentPrice
    } else {
      return 0
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemFullPrice>
        { fullPrice().toFixed(2) }
        { currencyToCurrency(props.product.currency) }
      </StyledItemFullPrice>
    </ThemeProvider>
  )
}
