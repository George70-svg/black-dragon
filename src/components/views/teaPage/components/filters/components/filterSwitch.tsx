import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Icons from '@icons/icons'
import { IStore } from '@store/store'
import { StyledFilterSwitch } from '@components/views/teaPage/components/filters/styles/filterSwitch.styled'

import { commonStyle } from '../../../../../../styles'

export function FilterSwitch() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const [selectedBlock, selectBlock] = React.useState('block-1')

  const handleClick = (blockType: 'block-1' | 'block-2') => {
    selectBlock(blockType)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledFilterSwitch>
        <div className='icon-container' onClick={() => handleClick('block-1')}>
          {
            selectedBlock === 'block-1' ?
              <Icons name="block-1" color={commonStyle[colorTheme].color} size="15" className="icon" /> :
              <Icons name="block-1" color={commonStyle[colorTheme].tertiaryColor} size="15" className="icon" />
          }
        </div>

        <div className='icon-container' onClick={() => handleClick('block-2')}>
          {
            selectedBlock === 'block-2' ?
              <Icons name="block-2" color={commonStyle[colorTheme].color} size="15" className="icon" /> :
              <Icons name="block-2" color={commonStyle[colorTheme].tertiaryColor} size="15" className="icon" />
          }
        </div>
      </StyledFilterSwitch>
    </ThemeProvider>
  )
}
