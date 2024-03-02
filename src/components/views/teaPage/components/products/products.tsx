import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledProducts } from '@components/views/teaPage/components/products/styles/products.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../../../styles'

export function Products() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const products = useSelector((state: IStore) => state.products.products)

  return (
    <ThemeProvider theme={theme}>
      <StyledProducts>
        <div className='headerss'>
          header
        </div>

        <div className='tabless'>
          {
            products.map(product => (
              <div key={product.name + product.fullName}>
                <div>{JSON.stringify(product)}</div>
                <br/>
              </div>
            ))
          }
        </div>
      </StyledProducts>
    </ThemeProvider>
  )
}
