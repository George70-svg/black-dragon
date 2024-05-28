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
    resetImages: (state) => {
      state.currentProductImages = []
    },
    setImageUploadStatus: (state, action: { payload: boolean }) => {
      state.isImagesUpload = action.payload
    },
  }
})

export const getCardImagesThunk = createAsyncThunk(
  'products/cardImages',
  async (imageData: ImagesType, { dispatch }) => {
    try {
      dispatch(setImageUploadStatus(true))
      dispatch(resetImages())

      if(imageData.imageIds.length) {

        for (const imageId of imageData.imageIds) {
          const image = await endpoints.products.getImage({ art: imageData.art, mainImageId: imageId })
          dispatch(setImage(image))
        }

      } else {
        dispatch(setImage(null))
      }
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      dispatch(setImageUploadStatus(false))
    }
  }
)

export const {
  setImage,
  setImageUploadStatus,
  resetImages
} = cardImagesSlice.actions

export default cardImagesSlice.reducer
