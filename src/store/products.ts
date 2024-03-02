import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { endpoints } from '@endpoints/endpoints'
import { CategoriesType, Product, ProductFilters } from '@endpoints/endpoints/products/types'
import { IStore } from '@store/store'

export interface IProductsState {
  products: Product[]
  filters: ProductFilters
  categories: CategoriesType[]
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
  categories: [],
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
    setCategories: (state, action: { payload: CategoriesType[] }) => {
      const categories = action.payload
      state.categories = categories
    },
    setProductsUpdateStatus: (state, action: { payload: boolean }) => {
      state.isProductsUpdate = action.payload
    },
    setCategoriesUploadStatus: (state, action: { payload: boolean }) => {
      state.isCategoriesUpload = action.payload
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

export const getProductCategories = createAsyncThunk(
  'products/categories',
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setCategoriesUploadStatus(true))

      const teaCategories = await endpoints.products.groups('TEA')
      const dishCategories = await endpoints.products.groups('DISH')

      const categoriesData: CategoriesType[] = [
        {
          name: 'Чай',
          value: 'TEA',
          subItems: teaCategories,
        },
        {
          name: 'Посуда',
          value: 'DISH',
          subItems: dishCategories,
        }
      ]

      thunkAPI.dispatch(setCategories(categoriesData))
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      thunkAPI.dispatch(setCategoriesUploadStatus(false))
    }
  }
)

export const {
  setProducts,
  setProductsUpdateStatus,
  updateFilter,
  setCategories,
  setCategoriesUploadStatus,
} = productsSlice.actions

export default productsSlice.reducer
