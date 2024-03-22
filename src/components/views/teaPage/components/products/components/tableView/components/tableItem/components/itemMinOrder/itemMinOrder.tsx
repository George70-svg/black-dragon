import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { StyledItemMinOrder } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemMinOrder/styles/itemMinOrder.styled'
import { ItemMinOrderProps } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemMinOrder/types/types'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemMinOrder(props: ItemMinOrderProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemMinOrder>
        {props.orderNumber} {props.orderUnit}
      </StyledItemMinOrder>
    </ThemeProvider>
  )
}
