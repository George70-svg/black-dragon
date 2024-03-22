import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { StyledTableItem } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/styles/tableItem.styled'
import { TableItemProps } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/types/types'

import { commonStyle } from '../../../../../../../../../styles'

export function TableItem(props: TableItemProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledTableItem>
        { props.item }
      </StyledTableItem>
    </ThemeProvider>
  )
}
