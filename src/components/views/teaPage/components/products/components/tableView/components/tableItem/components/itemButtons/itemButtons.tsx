import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import Icons from '@icons/icons'
import { StyledItemButtons } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemButtons/styles/itemButtons.styled'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemButtons() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemButtons>
        {/*<div className="button-container">
          <Icons name="heart" color={commonStyle.colors.red} size="20" className="icon" />
        </div>*/}

        <div className="button-container">
          <Icons name="arrow-down-red" color="#fff" size="24" className="icon" />
        </div>
      </StyledItemButtons>
    </ThemeProvider>
  )
}
