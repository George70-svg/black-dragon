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

const initialState: IProductsState = {
  products: [],
  filters: {
    productType: 'SPB',
    maybeGroup: '',
    type: '',
    maybeFabrics: '',
    isNew: null,
    isFavorites: null,
    isInStock: null,
    maybePriceStart: null,
    maybePriceEnd: null,
    pageNumber: 0
  },
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
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setProductsUpdateStatus(true))

      const filters = (thunkAPI.getState() as IStore).products.filters

      const productData = await endpoints.products.prices(filters)

      thunkAPI.dispatch(setProducts(productData.resource))
      thunkAPI.dispatch(setTotalCount(productData.totalResourceCount))
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      thunkAPI.dispatch(setProductsUpdateStatus(false))
    }
  }
)

//Обновление фильтров товаров
export const updateProductFilterThunk = createAsyncThunk(
  'products/filter',
  async (filter: ProductFilters, thunkAPI) => {
    try {
      thunkAPI.dispatch(updateFilter(filter)) //Сначала обновляем фильтры для запросы
      thunkAPI.dispatch(resetProducts()) //Затем сбрасываем все старые товары
      thunkAPI.dispatch(setPage(0)) //Обнуляем страницу для запроса
      thunkAPI.dispatch(getProductsThunk()) //Получаем новые товары
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//Получение каталога товаров
export const getProductCatalogThunk = createAsyncThunk(
  'products/catalog',
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setCategoriesUploadStatus(true))

      const catalog = await endpoints.products.catalog()

      thunkAPI.dispatch(setCatalog(catalog))
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      thunkAPI.dispatch(setCategoriesUploadStatus(false))
    }
  }
)

//Получение списка групп для фильтра группы
export const getGroupsForFilterThunk = createAsyncThunk(
  'products/groups',
  async (type: ProductType, thunkAPI) => {
    try {
      const groups = await endpoints.products.groups(type)

      thunkAPI.dispatch(setGroups(groups))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

// //Получение списка фабрик для фильтра фабрика
export const getProductFabricsThunk = createAsyncThunk(
  'products/fabrics',
  async (_, thunkAPI) => {
    try {
      const fabrics = await endpoints.products.fabrics()

      thunkAPI.dispatch(setFabrics(fabrics))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//Смена списка товаров на плитку товаров
export const setTableViewThunk = createAsyncThunk(
  'products/tableView',
  async (viewType: TableView, thunkAPI) => {
    try {
      thunkAPI.dispatch(setTableView(viewType))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//Установка текущей страницы товаров
export const setPageNumberThunk = createAsyncThunk(
  'products/pageNumber',
  async (pageNumber: number, thunkAPI) => {
    try {
      thunkAPI.dispatch(setPage(pageNumber))
      thunkAPI.dispatch(getProductsThunk())
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
