import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { endpoints } from '@endpoints/endpoints'
import { ImageResponseType, ImagesType } from '@endpoints/endpoints/products/types'

export interface ICardImagesState {
  currentProductImages: ImageResponseType[]
  isImagesUpload: boolean
}

const initialState: ICardImagesState = {
  currentProductImages: [],
  isImagesUpload: false
}

export const cardImagesSlice = createSlice({
  name: 'cardImages',
  initialState,
  reducers: {
    setImage: (state, action: { payload: ImageResponseType | null }) => {
      const imagesSrc = action.payload
      if(imagesSrc) {
        state.currentProductImages = [ ...state.currentProductImages, imagesSrc ]
      } else {
        state.currentProductImages = []
      }
    },
    setImageUploadStatus: (state, action: { payload: boolean }) => {
      state.isImagesUpload = action.payload
    },
  }
})

export const getCardImagesThunk = createAsyncThunk(
  'products/cardImages',
  async (imageData: ImagesType, thunkAPI) => {
    try {
      thunkAPI.dispatch(setImageUploadStatus(true))

      if(imageData.imageIds.length) {

        for (const imageId of imageData.imageIds) {
          const image = await endpoints.products.getImage({ art: imageData.art, mainImageId: imageData.mainImageId })
          thunkAPI.dispatch(setImage(image))
        }

      } else {
        thunkAPI.dispatch(setImage(null))
      }
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      thunkAPI.dispatch(setImageUploadStatus(false))
    }
  }
)

export const {
  setImage,
  setImageUploadStatus
} = cardImagesSlice.actions

export default cardImagesSlice.reducer
