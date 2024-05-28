import { Product } from '@endpoints/endpoints/products/types'

export type TableViewProps = {
  products: Product[]
  canDeleteItem: boolean
  canCoverItem: boolean
  tableDescription: {
    columns: {
      header: () => JSX.Element
      body: (product: Product) => JSX.Element;
      name: string,
      width: string,
      fixedWidth: boolean,
      alignBody: string,
    }[]
  }
}
