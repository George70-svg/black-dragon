import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StyledItemNumber } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemNumber/styles/itemNumber.styled'
import { IStore } from '@store/store'

import { commonStyle } from '../../../../../../../../../../../styles'

export function ItemNumber() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const [number, setNumber] = React.useState(0)

  const handleClick = (value: number, type: '-' | '+') => {
    if(type === '-') {
      setNumber(value - 1)
    } else if(type === '+') {
      setNumber(value + 1)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledItemNumber $active={number} className={number ? 'active' : ''}>
        <div className="decrease calculation" onClick={() => handleClick(number, '-')}>-</div>

        <div className="number">{ number }</div>

        <div className="increase calculation" onClick={() => handleClick(number, '+')}>+</div>
      </StyledItemNumber>
    </ThemeProvider>
  )
}
