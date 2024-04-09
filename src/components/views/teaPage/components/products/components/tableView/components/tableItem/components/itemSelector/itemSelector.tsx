import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { unitToUnit } from '@utils/common'
import { TSelector } from '@components/views/teaPage/components/filters/components/tSelector'
import { ItemSelectorProps } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemSelector/types/types'
import { StyledItemSelector } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemSelector/styles/itemSelector.styled'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemSelector(props: ItemSelectorProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const handleChange = () => {

  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemSelector>
        <TSelector
          filterName='unit'
          iconName=''
          options={[ { value: 'кг', name: 'кг' }, { value: 'шт', name: 'шт' } ]}
          initialValue={unitToUnit(props.product.unit)}
          onChange={handleChange}
          isDisabled={false}
        />
      </StyledItemSelector>
    </ThemeProvider>
  )
}
