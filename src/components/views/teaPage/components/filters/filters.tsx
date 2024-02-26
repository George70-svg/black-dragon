import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledFilters } from '@components/views/teaPage/components/filters/styles/filters.styled'
import { IStore } from '@store/store'
import { TSelector } from '@components/views/teaPage/components/filters/components/tSelector'
import { FilterSwitch } from '@components/views/teaPage/components/filters/components/filterSwitch'
import { FilterInput } from '@components/views/teaPage/components/filters/components/filterInput'
import { FilterCheckbox } from '@components/views/teaPage/components/filters/components/filterCheckbox'
import { SelectorOption } from '@components/views/teaPage/components/filters/types/types'

import { commonStyle } from '../../../../../styles'

export function Filters() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const options1: SelectorOption[] = [
    { value: 'spbTea',name: 'СПБ чай' },
    { value: 'spbPos',name: 'СПБ посуда' },
    { value: 'china',name: 'Китай' },
    { value: 'chinaVip',name: 'Китай ВИП' },
  ]

  const options2: SelectorOption[] = [
    { value: 'item1',name: 'Группа 1' },
    { value: 'item2',name: 'Группа 2' },
    { value: 'item3',name: 'Группа 3' },
    { value: 'item4',name: 'Группа 4' },
  ]

  const options3: SelectorOption[] = [
    { value: 'spb',name: 'СПБ' },
    { value: 'china',name: 'Китай' },
  ]

  return (
    <ThemeProvider theme={theme}>
      <StyledFilters>
        <div className='filter-group-1'>
          <div className='selectors-group'>
            <TSelector iconName='list-1' options={options1}/>
            <TSelector iconName='list-2' options={options2}/>
            <TSelector iconName='location' options={options3}/>
          </div>

          <FilterSwitch />
        </div>

        <div className='filter-group-2'>
          <FilterInput />

          <div className='checkbox-container'>
            <FilterCheckbox label='Новинка'/>
            <FilterCheckbox label='В наличии'/>
            <FilterCheckbox label='Избранное'/>
          </div>
        </div>
      </StyledFilters>
    </ThemeProvider>
  )
}
