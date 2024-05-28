import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore, useAppDispatch } from '@store/store'
import { TSelector } from '@components/views/teaPage/components/filters/components/tSelector'
import { ItemSelectorProps } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemSelector/types/types'
import { StyledItemSelector } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemSelector/styles/itemSelector.styled'
import { setItemUnitThunk } from '@store/shoppingСart'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemSelector(props: ItemSelectorProps) {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const currentProductUnit = useSelector((state: IStore) => state.cart.items[props.itemId]?.unit)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const units = props.product.units.map(item => {
    return {
      value: item.name.toLowerCase(),
      name: item.name.toLowerCase()
    }
  })

  const handleChange = (filterName: string, value: string) => {
    dispatch(setItemUnitThunk({ id: props.itemId, unit: value }))
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemSelector>
        <TSelector
          filterName='unit'
          iconName=''
          options={units}
          initialValue={currentProductUnit?.toLowerCase() ?? units[0].name}
          onChange={handleChange}
          isDisabled={units.length <= 1 || props.isDisabled}
        />
      </StyledItemSelector>
    </ThemeProvider>
  )
}
