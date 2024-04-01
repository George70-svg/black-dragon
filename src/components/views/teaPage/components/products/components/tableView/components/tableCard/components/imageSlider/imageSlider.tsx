import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { getCardImagesThunk } from '@store/cardImages'
import { CircularProgress } from '@mui/material'
import { ItemInfoProps } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/components/imageSlider/types/types'
import { ImageResponseType } from '@endpoints/endpoints/products/types'
import { IStore, useAppDispatch } from '@store/store'
import { StyledImageSlider } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/components/imageSlider/styles/imageSlider.styled'

import { commonStyle } from '../../../../../../../../../../../styles'
import Icons from '@icons/icons'

export function ImageSlider(props: ItemInfoProps) {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const imagesSrc = useSelector((state: IStore) => state.cardImages.currentProductImages)
  const isLoading = useSelector((state: IStore) => state.cardImages.isImagesUpload)

  const [mainImage, setMainImage] = useState<ImageResponseType | null>(null)

  useEffect(() => {
    dispatch(getCardImagesThunk({ art: props.product.art, mainImageId: props.product.mainPhotoId, imageIds: props.product.photosId }))
  }, [ props.product.mainPhotoId, props.product.art, props.product.photosId, dispatch ])

  useEffect(() => {
    setMainImage(imagesSrc.filter(image => image.id === props.product.mainPhotoId)[0])
  }, [ imagesSrc, props.product.mainPhotoId ])

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledImageSlider>
        {!isLoading && (
          <div className="image-container">
            {!!imagesSrc.length && (
              <div className="image-exist">
                <div className="main-image">
                  <img src={mainImage ? mainImage.src : ''} alt="Картинка(((" />
                </div>

                <div className="slider">

                </div>
              </div>
            )}

            {!imagesSrc.length && (
              <div className="image-not-exist">
                <Icons name="no-content" color={commonStyle[colorTheme].tertiaryColor} size="36" className="icon" />
              </div>
            )}
          </div>
        )}

        {isLoading && (
          <div className="spinner-container">
            <CircularProgress color="inherit" />
          </div>
        )}
      </StyledImageSlider>
    </ThemeProvider>
  )
}
