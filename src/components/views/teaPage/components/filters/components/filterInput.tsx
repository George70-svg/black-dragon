import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { TextField } from '@mui/material'
import { IStore } from '@store/store'
import { countryToCurrency, debounce } from '@utils/common'
import { StyledFilterInput } from '@components/views/teaPage/components/filters/styles/filterInput.styled'
import { FilterInputProps } from '@components/views/teaPage/components/filters/types/types'

import { commonStyle } from '../../../../../../styles'

export function FilterInput(props: FilterInputProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const productType = useSelector((state: IStore) => state.products.filters.productType)

  const [startPrice, setStartPrice] = useState(props.initialValue[0] || '')
  const [endPrice, setEndPrice] = useState(props.initialValue[1] || '')

  useEffect(() => {
    setStartPrice(props.initialValue[0] || '')
    setEndPrice(props.initialValue[1] || '')
  }, [props.initialValue])

  const debouncedChangeHandler = useCallback(
    debounce((filterName, value) => {
      props.onChange(filterName, value)
    }, 500),
    [props.onChange]
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if(event.target.name === 'maybePriceStart') {
      setStartPrice(value)
    } else if(event.target.name === 'maybePriceEnd') {
      setEndPrice(value)
    }

    debouncedChangeHandler(event.target.name, +value)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledFilterInput>
        <p>Цена, {countryToCurrency(productType)}</p>

        <div className="prices">
          <TextField
            placeholder="от 1080"
            variant="standard"
            type="number"
            value={startPrice}
            name={props.filterName[0]}
            onChange={handleChange}
            disabled={props.isDisabled}
          />

          <div className="separator-container">
            <div className="separator" />
          </div>

          <TextField
            placeholder="до 11500"
            variant="standard"
            type="number"
            value={endPrice}
            name={props.filterName[1]}
            onChange={handleChange}
            disabled={props.isDisabled}
          />
        </div>
      </StyledFilterInput>
    </ThemeProvider>
  )
}
