import React from 'react'
import { Product } from '@endpoints/endpoints/products/types'
import { generateItemId } from '@utils/common'
import { ItemNumber } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemNumber/itemNumber'
import { ItemButtons } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemButtons/itemButtons'
import { ItemSelector } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemSelector/itemSelector'
import { ItemMinOrder } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemMinOrder/itemMinOrder'
import { ItemPrice } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemPrice/itemPrice'
import { ItemSale } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemSale/itemSale'
import { ItemFullPrice } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemFullPrice/itemFullPrice'

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

const priceColumn = {
  header: () => <div className={ priceColumn.alignHeader }>Цена</div>,
  body: (product: Product) => <ItemPrice product={product} itemId={generateItemId(product)}/>,
  name: 'price',
  width: '6rem',
  alignHeader: 'center-left',
  fixedWidth: false,
  alignBody: 'left',
}

const minimumOrderColumn = {
  header: () => <p className={ minimumOrderColumn.alignHeader }>Мин. заказ</p>,
  body: (product: Product) => <ItemMinOrder
    orderNumber={product.minOrder}
    orderUnit={product.unit}
    productType={product.shippingPoint === 'CПБ' ? 'SPB' : 'CHINA'}
    itemId={generateItemId(product)}
  />,
  name: 'minimumOrder',
  width: '3.5rem',
  alignHeader: 'center-left',
  fixedWidth: false,
  alignBody: 'left',
}

const orderColumn = {
  header: () => <div/>,
  body: (product: Product) => <ItemNumber product={product} itemId={generateItemId(product)} disabled={product.inStock}/>,
  name: 'order',
  width: '6.75rem',
  fixedWidth: false,
  alignBody: 'center',
}

const weightColumn = {
  header: () => <div/>,
  body: (product: Product) => <ItemSelector product={product} itemId={generateItemId(product)} isDisabled={!product.inStock}/>,
  name: 'weight',
  width: '6.5rem',
  fixedWidth: false,
  alignBody: 'center',
}

const weightColumnDisabled = {
  header: () => <div/>,
  body: (product: Product) => <ItemSelector product={product} itemId={generateItemId(product)} isDisabled={true}/>,
  name: 'weight',
  width: '6.5rem',
  fixedWidth: false,
  alignBody: 'center',
}

const fullPriceColumn = {
  header: () => <div className={ fullPriceColumn.alignHeader }>Полная цена</div>,
  body: (product: Product) => <ItemFullPrice product={product} itemId={generateItemId(product)}/>,
  name: 'fullPrice',
  width: '8rem',
  alignHeader: 'center-left',
  fixedWidth: false,
  alignBody: 'left',
}

const saleColumn = {
  header: () => <div className={ saleColumn.alignHeader }>Скидка</div>,
  body: (product: Product) => <ItemSale product={product} itemId={generateItemId(product)}/>,
  name: 'sale',
  width: '5rem',
  alignHeader: 'center-left',
  fixedWidth: false,
  alignBody: 'center',
}

const uncoverColumn = {
  header: () => <div/>,
  body: (product: Product) => <ItemButtons itemId={generateItemId(product)} canDelete={false} canCover={false} disabled={!product.inStock} />,
  name: 'uncover',
  width: '2.25rem',
  fixedWidth: false,
  alignBody: 'center',
}

const deleteColumn = {
  header: () => <div/>,
  body: (product: Product) => <ItemButtons itemId={generateItemId(product)} canDelete={true} canCover={false} disabled={false}/>,
  name: 'delete',
  width: '2.25rem',
  fixedWidth: false,
  alignBody: 'center',
}

export const productTableDescription = {
  columns: [
    { ...articleColumn },
    { ...nameColumn },
    { ...priceColumn },
    { ...minimumOrderColumn },
    { ...orderColumn },
    { ...weightColumn },
    { ...fullPriceColumn },
    { ...saleColumn },
    { ...uncoverColumn },
  ]
}

export const cartTableDescription = {
  columns: [
    { ...articleColumn },
    { ...nameColumn },
    { ...priceColumn },
    { ...minimumOrderColumn },
    { ...orderColumn },
    { ...weightColumnDisabled },
    { ...fullPriceColumn },
    { ...saleColumn },
    { ...deleteColumn },
  ]
}
