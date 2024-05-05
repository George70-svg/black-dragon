import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore, useAppDispatch } from '@store/store'
import { setCartItemThunk, deleteCartItemThunk } from '@store/shoppingСart'
import { Product } from '@endpoints/endpoints/products/types'
import { StyledItemNumber } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemNumber/styles/itemNumber.styled'
import { ItemNumberProps } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemNumber/types/types'
// @ts-ignore
import { CartItem } from '@types/cartTypes'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemNumber(props: ItemNumberProps) {
  const dispatch = useAppDispatch()

  const colorTheme= useSelector((state: IStore) => state.theme.colorTheme)
  const currentProductNumber = useSelector((state: IStore) => state.cart.items[props.itemId]?.number)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  const handleClick = (type: '-' | '+') => {
    let value = currentProductNumber ?? 0

    if(type === '-' && value > 0) {
      value--
    } else if(type === '+') {
      value++
    }

    updateItemToCart(props.product, value)
  }

  const updateItemToCart = (product: Product, itemNumber: number) => {
    const data: CartItem = {
      id: props.itemId,
      item: props.product,
      number: itemNumber,
      region: props.product.shippingPoint,
    }

    if(!!itemNumber) {
      dispatch(setCartItemThunk(data))
    } else {
      dispatch(deleteCartItemThunk(data))
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

        <div className="number">{ currentProductNumber ?? 0 }</div>

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
