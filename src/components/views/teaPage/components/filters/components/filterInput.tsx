import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { TextField } from '@mui/material'
import { IStore } from '@store/store'
import { StyledFilterInput } from '@components/views/teaPage/components/filters/styles/filterInput.styled'

import { commonStyle } from '../../../../../../styles'

export function FilterInput() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledFilterInput>
        <p>Цена, ₽</p>

        <div className='prices'>
          <TextField placeholder='от 1080' variant="standard" />

          <div className="separator-container">
            <div className="separator" />
          </div>

          <TextField placeholder='до 11500' variant="standard" />
        </div>
      </StyledFilterInput>
    </ThemeProvider>
  )
}
