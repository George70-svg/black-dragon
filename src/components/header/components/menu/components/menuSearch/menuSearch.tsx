import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledMenuSearch } from '@components/header/components/menu/components/menuSearch/styles/menuSearch.styled'
import { Box, InputAdornment, TextField } from '@mui/material'
import Icons from '@icons/icons'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'

import { commonStyle } from '../../../../../../styles'

export function MenuSearch() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledMenuSearch>
        <Box className="input-container">
          <TextField
            className="input-search"
            id="outlined-start-adornment"
            placeholder="Найти на сайте"
            color="primary"
            InputProps={{
              endAdornment: <InputAdornment position="start">
                <Icons name="search" color="#fff" size="24" className="icon" />
              </InputAdornment>,
            }}
          />
        </Box>
      </StyledMenuSearch>
    </ThemeProvider>
  )
}
