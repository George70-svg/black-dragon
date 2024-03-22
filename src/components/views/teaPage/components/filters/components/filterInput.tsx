import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { TextField } from '@mui/material'
import { IStore } from '@store/store'
import { debounce } from '@utils/common'
import { StyledFilterInput } from '@components/views/teaPage/components/filters/styles/filterInput.styled'
import { FilterInputProps } from '@components/views/teaPage/components/filters/types/types'
import { ProductFilters } from '@endpoints/endpoints/products/types'

import { commonStyle } from '../../../../../../styles'

export function FilterInput(props: FilterInputProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const handleChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      const filterName = event.target.name as keyof ProductFilters
      const value = +event.target.value

      props.onChange(filterName, value)
    }, 500),
    [props.onChange]
  )

  return (
    <ThemeProvider theme={theme}>
      <StyledFilterInput>
        <p>Цена, ₽</p>

        <div className='prices'>
          <TextField
            placeholder='от 1080'
            variant='standard'
            type='number'
            defaultValue={props.initialValue[0]}
            name={props.filterName[0]}
            onChange={handleChange}
            disabled={props.isDisabled}
          />

          <div className="separator-container">
            <div className="separator" />
          </div>

          <TextField
            placeholder='до 11500'
            variant='standard'
            type='number'
            defaultValue={props.initialValue[1]}
            name={props.filterName[1]}
            onChange={handleChange}
            disabled={props.isDisabled}
          />
        </div>
      </StyledFilterInput>
    </ThemeProvider>
  )
}
