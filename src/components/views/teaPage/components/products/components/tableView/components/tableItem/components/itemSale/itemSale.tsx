import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { getChinaSale } from '@components/views/teaPage/components/products/components/tableView/utils/common'
import { currencyToCurrency } from '@utils/common'
import {
  ItemPriceProps,
} from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemPrice/types/types'
import {
  StyledItemSale,
} from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemSale/styles/itemSale.styled'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemSale(props: ItemPriceProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const productType = useSelector((state: IStore) => state.products.filters.productType)
  const currentProductNumber = useSelector((state: IStore) => state.cart.items[props.itemId]?.number)
  const currentUnit = useSelector((state: IStore) => state.cart.items[props.itemId]?.unit)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemSale>
        {
          productType === 'CHINA' && getChinaSale(currentProductNumber, props.product, currentUnit ? currentUnit : props.product.units[0].name) ?
            getChinaSale(currentProductNumber, props.product, currentUnit ? currentUnit : props.product.units[0].name).toFixed(2) :
            '—'
        }

        {
          productType === 'CHINA' && getChinaSale(currentProductNumber, props.product, currentUnit ?
            currentUnit : props.product.units[0].name) ? currencyToCurrency(props.product.currency) :
            ''
        }
      </StyledItemSale>
    </ThemeProvider>
  )
}
