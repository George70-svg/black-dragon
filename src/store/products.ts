import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { endpoints } from '@endpoints/endpoints'
import { CatalogItem, Product, ProductFilters, TableView } from '@endpoints/endpoints/products/types'
import { IStore } from '@store/store'

export interface IProductsState {
  products: Product[]
  filters: ProductFilters
  catalog: CatalogItem[]
  fabrics: string[]
  tableView: TableView
  isProductsUpdate: boolean
  isCategoriesUpload: boolean
}

const initialState: IProductsState = {
  products: [],
  filters: {
    productType: 'SPB_TEA',
    maybeGroupType: '',
    maybeFabrics: '',
    isNew: null,
    isFavorites: null,
    isInStock: null,
    maybePriceStart: null,
    maybePriceEnd: null,
  },
  catalog: [],
  fabrics: [],
  tableView: 'list',
  isProductsUpdate: false,
  isCategoriesUpload: false,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload
      state.products = products
    },
    updateFilter: (state, action: { payload: ProductFilters }) => {
      const newFilters = action.payload
      state.filters = newFilters
    },
    setCatalog: (state, action: { payload: CatalogItem[] }) => {
      const catalog = action.payload
      console.log(catalog)
      state.catalog = catalog
    },
    setFabrics: (state, action: { payload: string[] }) => {
      const fabrics = action.payload
      state.fabrics = fabrics
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
  }
})

export const getProductsThunk = createAsyncThunk(
  'products/products',
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setProductsUpdateStatus(true))

      const filters = (thunkAPI.getState() as IStore).products.filters

      const products = await endpoints.products.prices(filters)

      thunkAPI.dispatch(setProducts(products))
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      thunkAPI.dispatch(setProductsUpdateStatus(false))
    }
  }
)

export const updateProductFilterThunk = createAsyncThunk(
  'products/filter',
  async (filter: ProductFilters, thunkAPI) => {
    try {
      thunkAPI.dispatch(updateFilter(filter))
      thunkAPI.dispatch(getProductsThunk())
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

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

export const {
  setProducts,
  setProductsUpdateStatus,
  updateFilter,
  setCatalog,
  setFabrics,
  setCategoriesUploadStatus,
  setTableView
} = productsSlice.actions

export default productsSlice.reducer
