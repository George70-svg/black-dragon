import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { StyledUpButton } from '@components/views/teaPage/components/products/components/tableView/components/upButton/styles/upButton.styled'
import Icons from '@icons/icons'

import { commonStyle } from '../../../../../../../../../styles'


export function UpButton() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
    backgroundColor: commonStyle[colorTheme].backgroundColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledUpButton>
        <div className='button'>
          <Icons name='arrow-up-red' color='#fff' size='24' className='icon' />
          <p>Наверх</p>
        </div>
      </StyledUpButton>
    </ThemeProvider>
  )
}
