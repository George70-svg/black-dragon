import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore, useAppDispatch } from '@store/store'
import { setCartItemThunk } from '@store/shoppingСart'
import { generateItemId } from '@utils/common'
import { StyledItemNumber } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemNumber/styles/itemNumber.styled'
import { ItemNumberProps } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemNumber/types/types'
// @ts-ignore
import { CartItem } from '@types/cartTypes'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemNumber(props: ItemNumberProps) {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const [number, setNumber] = React.useState(0)

  const handleClick = (value: number, type: '-' | '+') => {
    if(type === '-') {
      setNumber(value - 1)
    } else if(type === '+') {
      setNumber(value + 1)
    }
  }

  const setItemToCart = () => {
    const data: CartItem = {
      id: generateItemId(props.product),
      item: props.product,
      number: number,
      region: props.product.shippingPoint
    }

    dispatch(setCartItemThunk(data))
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemNumber $active={number} className={number ? 'active' : ''}>
        <button
          className="decrease calculation"
          onClick={() => handleClick(number, '-')}
          disabled={number <= 0}
        >
          -
        </button>

        <div className="number">{ number }</div>

        <button
          className="increase calculation"
          onClick={() => handleClick(number, '+')}
        >
          +
        </button>
      </StyledItemNumber>
    </ThemeProvider>
  )
}
