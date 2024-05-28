import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore, useAppDispatch } from '@store/store'
import { TextField } from '@mui/material'
import { setCartItemThunk, deleteCartItemThunk } from '@store/shoppingСart'
import { StyledItemNumber } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemNumber/styles/itemNumber.styled'
import { ItemNumberProps } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemNumber/types/types'
// @ts-ignore
import { CartItem } from '@types/cartTypes'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemNumber(props: ItemNumberProps) {
  const dispatch = useAppDispatch()

  const colorTheme= useSelector((state: IStore) => state.theme.colorTheme)
  const currentProductNumber = useSelector((state: IStore) => state.cart.items[props.itemId]?.number)

  const [ stubInput, setStubInput ] = useState(false)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  const handleClick = (type: '-' | '+') => {
    const step = props.product.step || 1
    let value = currentProductNumber ?? 0

    if (type === '-' && value > 0) {
      value = Math.max(0, value - step)
    } else if (type === '+') {
      value += step
    }

    updateItemToCart(value)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 0 && value < 1000) {
      updateItemToCart(value);
    }
  }

  //Устанавливаю статус заглушки 0 в инпут, если на него нажали, но там 0
  const handleFocus = () => {
    setStubInput(true)
  }

  //Возвращаю статус заглушки 0 в инпут, если с него сняли фокус и там пусто
  const handleBlur = () => {
    setStubInput(false)
  }

  const updateItemToCart = (itemNumber: number) => {
    const data: CartItem = {
      id: props.itemId,
      item: props.product,
      number: itemNumber,
      region: props.product.shippingPoint,
    }

    if(!!itemNumber) {
      dispatch(setCartItemThunk(data))
    } else {
      dispatch(deleteCartItemThunk(data.id))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemNumber $active={currentProductNumber} className={currentProductNumber ? 'active' : ''}>
        <button
          className="decrease calculation"
          onClick={() => handleClick('-')}
          disabled={!currentProductNumber ?? true}
        >
          -
        </button>

        <div className="number">
          <TextField
            variant='standard'
            type='number'
            inputProps={{ step: "1" }}
            value={currentProductNumber ? currentProductNumber : stubInput ? '' : '0'}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <button
          className="increase calculation"
          onClick={() => handleClick('+')}
        >
          +
        </button>
      </StyledItemNumber>
    </ThemeProvider>
  )
}
