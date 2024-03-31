import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { TableCardProps } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/types/types'
import { StyledTableCard } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/styles/tableCard.styled'
import {ImageSlider } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/components/imageSlider/imageSlider'
import { ItemInfo } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/components/itemInfo/itemInfo'

import { commonStyle } from '../../../../../../../../../styles'

export function TableCard(props: TableCardProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledTableCard>
        <ImageSlider product={props.product}/>
        <ItemInfo product={props.product}/>
      </StyledTableCard>
    </ThemeProvider>
  )
}
