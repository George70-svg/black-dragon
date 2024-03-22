export type Product = {
  art: string
  name: string
  group: string
  fabricName: string
  year: string
  season: string
  valueGram: number
  pressForm: string
  unit: string
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

export type ProductType = 'SPB_TEA' | 'SPB_DISH' | 'CHINA' | 'CHINA_VIP'

export type TableView = 'list' | 'block'

export type ProductFilters = {
  productType: ProductType
  maybeGroupType: string
  maybeFabrics: string
  isNew: boolean | null
  isFavorites: boolean | null
  isInStock: boolean | null
  maybePriceStart: number | null
  maybePriceEnd: number | null
}

export type CategoryName = 'Посуда' | 'Новинки' | 'Товары со скидкой' | 'Пуэр' | 'Улун' | 'Белый чай' | 'Хэй Ча' | 'Аксессуары' | 'Pos group'

export type CategoryValue = 'NEW' | 'SALE' | 'POS_GROUP' | 'PUER' | 'OOLONG' | 'HEY_CHA' | 'WHITE' | 'DISH' | 'ACCESSORIES'

export type CategoryItem = {
  name: string
  value: string
}

export type CategoryType = {
  name: CategoryName
  value: CategoryValue
  subItems: CategoryItem[]
}

export type CatalogItem = {
  name: CategoryName,
  type: CategoryValue,
  maybeNestedItems?: CatalogSubItem[],
}

type CatalogSubItem = {
  name: string,
  type: string,
  maybeGroup?: string,
}
