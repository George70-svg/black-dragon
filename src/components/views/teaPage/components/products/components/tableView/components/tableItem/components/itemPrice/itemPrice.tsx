import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { StyledItemPrice } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemPrice/styles/itemPrice.styled'
import { ItemPriceProps } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemPrice/types/types'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemPrice(props: ItemPriceProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemPrice>
        {props.price} {props.currency === 'RUB' ? '₽' : props.currency}
      </StyledItemPrice>
    </ThemeProvider>
  )
}
