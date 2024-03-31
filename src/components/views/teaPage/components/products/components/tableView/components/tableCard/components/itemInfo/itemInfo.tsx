import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { ItemInfoProps } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/components/itemInfo/types/types'
import { StyledItemInfo } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/components/itemInfo/styles/itemInfo.styled'
import { ItemNumber } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemNumber/itemNumber'
import { ItemSelector } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemSelector/itemSelector'
import { currencyToCurrency } from '@utils/common'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemInfo(props: ItemInfoProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemInfo>
        <div className="left">
          <h2>{props.product.fullName}</h2>

          <div className="info-item description">
            <p className="info">{props.product.description}</p>
          </div>

          <div className="info-item art">
            <p className="name">Артикул</p>
            <p className="info">{props.product.art}</p>
          </div>

          <div className="info-item art">
            <p className="name">Минимальный заказ</p>
            <p className="info">{props.product.minOrder} {props.product.unit}</p>
          </div>
        </div>

        <div className="right">
          <div className="price">{props.product.price} {currencyToCurrency(props.product.currency)}</div>

          <div className="number">
          <ItemNumber />
            <ItemSelector />
          </div>

          <div className="result">
            <p>Итого</p>
            <p className='dotted' />
            <p>3086 {currencyToCurrency(props.product.currency)}</p>
          </div>
        </div>
      </StyledItemInfo>
    </ThemeProvider>
  )
}
