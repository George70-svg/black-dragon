import React from 'react'
import { Product } from '@endpoints/endpoints/products/types'
import { ItemNumber } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemNumber/itemNumber'
import { ItemButtons } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemButtons/itemButtons'
import { ItemSelector } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemSelector/itemSelector'
import { ItemMinOrder } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemMinOrder/itemMinOrder'
import { ItemPrice } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemPrice/itemPrice'

const articleColumn = {
  header: () => <div className={ articleColumn.alignHeader }>Артикл</div>,
  body: (product: Product) => <div className={ articleColumn.alignBody }>{product.art}</div>,
  name: 'article',
  width: '5rem',
  alignHeader: 'center-left',
  fixedWidth: false,
  alignBody: 'left',
}

const nameColumn = {
  header: () => <div className={ nameColumn.alignHeader }>Название</div>,
  body: (product: Product) => <div className={ nameColumn.alignBody }>{product.fullName}</div>,
  name: 'name',
  width: '',
  alignHeader: 'center-left',
  fixedWidth: false,
  alignBody: 'left',
}

const minimumOrderColumn = {
  header: () => <div className={ minimumOrderColumn.alignHeader }>Мин. заказ</div>,
  body: (product: Product) => <ItemMinOrder orderNumber={product.minOrder} orderUnit={product.unit} />,
  name: 'minimumOrder',
  width: '8rem',
  alignHeader: 'center-left',
  fixedWidth: false,
  alignBody: 'left',
}

const priceColumn = {
  header: () => <div className={ priceColumn.alignHeader }>Цена</div>,
  body: (product: Product) => <ItemPrice price={product.price} currency={product.currency} />,
  name: 'price',
  width: '8rem',
  alignHeader: 'center-left',
  fixedWidth: false,
  alignBody: 'left',
}

const saleColumn = {
  header: () => <div className={ saleColumn.alignHeader }>Скидка</div>,
  body: () => <div className={ saleColumn.alignBody }> — </div>,
  name: 'sale',
  width: '5rem',
  alignHeader: 'center-left',
  fixedWidth: false,
  alignBody: 'center',
}

const orderColumn = {
  header: () => <div/>,
  body: (product: Product) => <ItemNumber product={product}/>,
  name: 'order',
  width: '6.75rem',
  fixedWidth: false,
  alignBody: 'center',
}

const weightColumn = {
  header: () => <div/>,
  body: (product: Product) => <ItemSelector product={product}/>,
  name: 'weight',
  width: '5rem',
  fixedWidth: true,
  alignBody: 'center',
}

const uncoverColumn = {
  header: () => <div/>,
  body: () => <ItemButtons />,
  name: 'uncover',
  width: '2.25rem',
  fixedWidth: false,
  alignBody: 'center',
}

export const tableDescription = {
  columns: [
    { ...articleColumn },
    { ...nameColumn },
    { ...minimumOrderColumn },
    { ...priceColumn },
    { ...saleColumn },
    { ...orderColumn },
    { ...weightColumn },
    { ...uncoverColumn },
  ]
}
