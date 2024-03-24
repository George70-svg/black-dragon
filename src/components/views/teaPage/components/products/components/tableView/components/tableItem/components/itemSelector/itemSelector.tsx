import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledItemSelector } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemSelector/styles/itemSelector.styled'
import { IStore } from '@store/store'
import { TSelector } from '@components/views/teaPage/components/filters/components/tSelector'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemSelector() {
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
          options={[ { value: 'kg', name: 'кг' }, { value: 'pc', name: 'шт' } ]}
          initialValue='kg'
          onChange={handleChange}
          isDisabled={false}
        />
      </StyledItemSelector>
    </ThemeProvider>
  )
}
