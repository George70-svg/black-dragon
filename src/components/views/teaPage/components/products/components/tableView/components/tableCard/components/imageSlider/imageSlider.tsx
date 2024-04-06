import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { getCardImagesThunk } from '@store/cardImages'
import { CircularProgress } from '@mui/material'
import Icons from '@icons/icons'
import { IStore, useAppDispatch } from '@store/store'
import { uuidv4 } from '@utils/common'
import { ImageResponseType } from '@endpoints/endpoints/products/types'
import { ItemInfoProps } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/components/imageSlider/types/types'
import { StyledImageSlider } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/components/imageSlider/styles/imageSlider.styled'

import { commonStyle } from '../../../../../../../../../../../styles'

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
    backgroundColor: commonStyle[colorTheme].backgroundColor,
  }

  const [offset, setOffset] = useState(0)
  const imagesPerPage = 3

  const handlePrevClick = () => {
    setOffset(prevOffset => Math.max(prevOffset - 1, 0))
  }

  const handleNextClick = () => {
    setOffset(prevOffset => Math.min(prevOffset + 1, imagesSrc.length - imagesPerPage))
  }

  const setCurrentImage = (image: ImageResponseType) => {
    setMainImage(image)
  }

  const currentImages = imagesSrc.slice(offset, offset + imagesPerPage)

  return (
    <ThemeProvider theme={theme}>
      <StyledImageSlider $imagesPerPage={imagesPerPage}>
        {!isLoading && (
          <div className='image-container'>
            {!!imagesSrc.length && (
              <div className='image-exist'>
                <div className='main-image'>
                  <img src={mainImage ? mainImage.src : ''} alt='Картинка(((' />
                </div>

                <div className='slider'>
                  <button className='arrow-left arrow' onClick={handlePrevClick} disabled={offset <= 0}>
                    <Icons
                      name='arrow-left'
                      color={offset === 0 ? commonStyle.colors.grey400 : commonStyle[colorTheme].color}
                      size='24'
                      className='icon'
                    />
                  </button>

                  <div className={`images ${imagesSrc.length <= imagesPerPage ? 'images-center' : ''}`}>
                    {currentImages.map((image) => (
                      <div
                        className={`image ${image.id === mainImage?.id ? 'select' : ''}`}
                        onClick={() => setCurrentImage(image)}
                        key={uuidv4()}
                      >
                        <img src={image ? image.src : ''} alt="Картинка" />
                      </div>
                    ))}
                  </div>

                  <button className='arrow-right arrow' onClick={handleNextClick} disabled={(offset >= imagesPerPage || imagesSrc.length <= imagesPerPage)}>
                    <Icons
                      name='arrow-right'
                      color={(offset >= imagesPerPage || imagesSrc.length <= imagesPerPage) ? commonStyle.colors.grey400 : commonStyle[colorTheme].color}
                      size='24'
                      className='icon'
                    />
                  </button>
                </div>
              </div>
            )}

            {!imagesSrc.length && (
              <div className='image-not-exist'>
                <Icons name='no-content' color={commonStyle[colorTheme].tertiaryColor} size='36' className='icon' />
              </div>
            )}
          </div>
        )}

        {isLoading && (
          <div className='spinner-container'>
            <CircularProgress color='inherit' />
          </div>
        )}
      </StyledImageSlider>
    </ThemeProvider>
  )
}
