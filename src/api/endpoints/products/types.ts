export type UnitType = 'WEIGHT' | 'QUANTITY'

export type UnitsType = {
  name: string
  priceForUnit: number
  saleForUnit: number
}

export type Product = {
  art: string
  name: string
  group: string
  fabricName: string
  year: string
  season: string
  valueGram: number
  pressForm: string
  unit: UnitType
  units: UnitsType[]
  description: string
  minOrder: number
  photosId: number[]
  mainPhotoId: number
  shippingPoint: string
  type: string
  step: number
  fullName: string
  price: number
  currency: string | 'RUB'
  isNewPosition: boolean
  priceFiveKgCny: number
  priceBoxCny: number
  valueInBox: number
  isExclusive: boolean
  onlyBox: boolean
  isOldSeason: boolean
  isDiscount: boolean
  inStock: boolean
  volumeMl: number
  color: string
  material: string
  lengthCm: number
  widthCm: number
  heightCm: number
  diameterCm: number
}

export type ProductType = 'SPB' | 'CHINA'

export type TableView = 'list' | 'block'

export type ProductFilters = {
  productType: ProductType
  maybeGroup: string | null
  type: string | null
  maybeFabrics: string | null
  isNew: boolean | null
  isFavorites: boolean | null
  isInStock: boolean | null
  maybePriceStart: number | null
  maybePriceEnd: number | null
  searchText: string | null
  pageNumber: number
  pageSize: number
}

export type SelectorTypes = 'unit'

export type CategoryName = 'Посуда' | 'Новинки' | 'Товары со скидкой' | 'Пуэр' | 'Улун' | 'Белый чай' | 'Хэй Ча' | 'Аксессуары' | 'Pos group'

export type CategoryValue = 'NEW' | 'SALE' | 'POS_GROUP' | 'PUER' | 'OOLONG' | 'HEY_CHA' | 'WHITE' | 'DISH' | 'ACCESSORIES'

export type GroupItem = {
  name: string
  value: string
}

export type CatalogSubItem = {
  name: string
  type: string
  maybeGroup: string
  maybeNestedItems: CatalogSubItem[] | null
  id: string
  availableFor: ProductType[]
}

export type CatalogItem = {
  name: CategoryName
  type: CategoryValue
  maybeNestedItems: CatalogSubItem[] | null
  maybeGroup: string | null
  id: string
  availableFor: ProductType[]
}

export type ImagesType = {
  art: string
  mainImageId: number
  imageIds: number[]
}

export type ImageType = {
  art: string
  mainImageId: number
}

export type ImageRequestType = {
  art: string
  imageId: number
}

export type ImageResponseType = {
  id: number
  src: string
}
