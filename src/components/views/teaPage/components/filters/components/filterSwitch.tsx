import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Icons from '@icons/icons'
import { IStore, useAppDispatch } from '@store/store'
import { setTableViewThunk } from '@store/products'
import { TableView } from '@endpoints/endpoints/products/types'
import { StyledFilterSwitch } from '@components/views/teaPage/components/filters/styles/filterSwitch.styled'

import { commonStyle } from '../../../../../../styles'

export function FilterSwitch() {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const tableViewType = useSelector((state: IStore) => state.products.tableView)
  const [selectedBlock, selectBlock] = React.useState<TableView>(tableViewType)

  const handleClick = (blockType: TableView) => {
    dispatch(setTableViewThunk(blockType))
    selectBlock(blockType)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledFilterSwitch>
        <div className='icon-container' onClick={() => handleClick('list')}>
          {
            selectedBlock === 'list' ?
              <Icons name="block-1" color={commonStyle[colorTheme].color} size="17" className="icon" /> :
              <Icons name="block-1" color={commonStyle[colorTheme].tertiaryColor} size="17" className="icon" />
          }
        </div>

        <div className='icon-container' onClick={() => handleClick('block')}>
          {
            selectedBlock === 'block' ?
              <Icons name="block-2" color={commonStyle[colorTheme].color} size="17" className="icon" /> :
              <Icons name="block-2" color={commonStyle[colorTheme].tertiaryColor} size="17" className="icon" />
          }
        </div>
      </StyledFilterSwitch>
    </ThemeProvider>
  )
}
