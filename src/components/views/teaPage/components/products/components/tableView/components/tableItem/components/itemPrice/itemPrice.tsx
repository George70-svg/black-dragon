import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore, useAppDispatch } from '@store/store'
import { StyledItemPrice } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemPrice/styles/itemPrice.styled'
import { ItemPriceProps } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemPrice/types/types'
import { currencyToCurrency } from '@utils/common'
import { getPriceForChina } from '@components/views/teaPage/components/products/components/tableView/utils/common'
import { setItemPriceThunk } from '@store/shoppingСart'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemPrice(props: ItemPriceProps) {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const productType = useSelector((state: IStore) => state.products.filters.productType)
  const currentProductNumber = useSelector((state: IStore) => state.cart.items[props.itemId]?.number)
  const currentUnit = useSelector((state: IStore) => state.cart.items[props.itemId]?.unit)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const [priceForChina, setPriceForChina] = useState<number>(0)

  useEffect(() => {
    const price = productType === 'CHINA' ?
      getPriceForChina(currentProductNumber, props.product, currentUnit ? currentUnit : props.product.units[0].name)
      : props.product.units[0].priceForUnit

    setPriceForChina(price)
    dispatch(setItemPriceThunk({ id: props.itemId, price }))
  }, [ currentProductNumber, currentUnit, dispatch ])

  //Логика установки цены:
  //Бэк отдаёт для каждого товары из price список единиц измерения.
  //Каждая единица измерения содержит в себе название, цену и скидку. Например, штука и коробка будут стоить по-разному.
  //По дефолту устанавливается первое значение из списка.
  //Если значение выбрано по-дефолту и не менялось, то берём первое значение из списка единиц измерения.
  //Если значение было изменено, то это сохранится в корзине и мы используем последнее значение.
  //Для Китая есть более сложная формула для расчёта цены.

  return (
    <ThemeProvider theme={theme}>
      <StyledItemPrice>
        {
          productType === 'CHINA' ? priceForChina.toFixed(2) : props.product.units[0].priceForUnit.toFixed(2)
        }

        { currencyToCurrency(props.product.currency) }
      </StyledItemPrice>
    </ThemeProvider>
  )
}
