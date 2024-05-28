import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { endpoints } from '@endpoints/endpoints'
import { CatalogItem, GroupItem, Product, ProductFilters, ProductType, TableView } from '@endpoints/endpoints/products/types'
import { IStore } from '@store/store'

export interface IProductsState {
  products: Product[]
  filters: ProductFilters
  catalog: CatalogItem[]
  fabrics: string[]
  groups: GroupItem[]
  tableView: TableView
  isProductsUpdate: boolean
  isCategoriesUpload: boolean
  totalCount: number
}

export const initialFilters: ProductFilters = {
  productType: 'SPB',
  maybeGroup: '',
  type: '',
  maybeFabrics: 'fabric',
  isNew: null,
  isFavorites: null,
  isInStock: null,
  maybePriceStart: null,
  maybePriceEnd: null,
  searchText: null,
  pageNumber: 0
}

const initialState: IProductsState = {
  products: [],
  filters: { ...initialFilters },
  catalog: [],
  fabrics: [],
  groups: [],
  tableView: 'list',
  isProductsUpdate: false,
  isCategoriesUpload: false,
  totalCount: 0
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload

      // Реализовано дедублирование массива продуктов по свойству 'art'
      state.products = [ ...state.products, ...products ].reduce((acc, cur) => {
        if(!acc.find((item: Product) => item.art === cur.art)) {
          acc.push(cur)
        }

        return acc
      }, [])
    },
    resetProducts: (state) => {
      state.products = []
    },
    updateFilter: (state, action: { payload: ProductFilters }) => {
      const newFilters = action.payload
      state.filters = newFilters
    },
    setCatalog: (state, action: { payload: CatalogItem[] }) => {
      const catalog = action.payload
      state.catalog = catalog
    },
    setFabrics: (state, action: { payload: string[] }) => {
      const fabrics = action.payload
      state.fabrics = fabrics
    },
    setGroups: (state, action: { payload: GroupItem[] }) => {
      const groups = action.payload
      state.groups = groups
    },
    setProductsUpdateStatus: (state, action: { payload: boolean }) => {
      state.isProductsUpdate = action.payload
    },
    setCategoriesUploadStatus: (state, action: { payload: boolean }) => {
      state.isCategoriesUpload = action.payload
    },
    setTableView: (state, action: { payload: TableView }) => {
      const tableView = action.payload
      state.tableView = tableView
    },
    setPage: (state, action: { payload: number }) => {
      const page = action.payload
      state.filters.pageNumber = page
    },
    setTotalCount: (state, action: { payload: number }) => {
      const totalCount = action.payload
      state.totalCount = totalCount
    }
  }
})

//Получение списка товаров
export const getProductsThunk = createAsyncThunk(
  'products/products',
  async (_, { dispatch, getState }) => {
    try {
      dispatch(setProductsUpdateStatus(true))

      const filters = (getState() as IStore).products.filters

      const productData = await endpoints.products.prices(filters)

      dispatch(setProducts(productData.resource))
      dispatch(setTotalCount(productData.totalResourceCount))
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      dispatch(setProductsUpdateStatus(false))
    }
  }
)

//Обновление фильтров товаров
export const updateProductFilterThunk = createAsyncThunk(
  'products/filter',
  async (filter: ProductFilters, { dispatch }) => {
    try {
      dispatch(updateFilter(filter)) //Сначала обновляем фильтры для запроса
      dispatch(resetProducts()) //Затем сбрасываем все старые товары
      dispatch(setPage(0)) //Обнуляем страницу для запроса
      dispatch(getProductsThunk()) //Получаем новые товары
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//Получение каталога товаров
export const getProductCatalogThunk = createAsyncThunk(
  'products/catalog',
  async (_, { dispatch }) => {
    try {
      dispatch(setCategoriesUploadStatus(true))

      const catalog = await endpoints.products.catalog()

      dispatch(setCatalog(catalog))
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      dispatch(setCategoriesUploadStatus(false))
    }
  }
)

//Получение списка групп для фильтра группы
export const getGroupsForFilterThunk = createAsyncThunk(
  'products/groups',
  async (type: ProductType, { dispatch }) => {
    try {
      const groups = await endpoints.products.groups(type)

      dispatch(setGroups(groups))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//Получение списка фабрик для фильтра фабрика
export const getProductFabricsThunk = createAsyncThunk(
  'products/fabrics',
  async (_, { dispatch }) => {
    try {
      const fabrics = await endpoints.products.fabrics()

      dispatch(setFabrics(fabrics))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//Смена списка товаров на плитку товаров
export const setTableViewThunk = createAsyncThunk(
  'products/tableView',
  async (viewType: TableView, { dispatch }) => {
    try {
      dispatch(setTableView(viewType))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//Установка текущей страницы товаров
export const setPageNumberThunk = createAsyncThunk(
  'products/pageNumber',
  async (pageNumber: number, { dispatch }) => {
    try {
      dispatch(setPage(pageNumber))
      dispatch(getProductsThunk())
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const {
  setProducts,
  resetProducts,
  setProductsUpdateStatus,
  updateFilter,
  setCatalog,
  setFabrics,
  setGroups,
  setCategoriesUploadStatus,
  setTableView,
  setPage,
  setTotalCount
} = productsSlice.actions

export default productsSlice.reducer
