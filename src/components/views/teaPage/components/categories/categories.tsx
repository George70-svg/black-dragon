import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledCategories } from '@components/views/teaPage/components/categories/styles/categories.styled'
import { useSelector } from 'react-redux'
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import Icons from '@icons/icons'
import { IStore, useAppDispatch } from '@store/store'
import { ProductFilters } from '@endpoints/endpoints/products/types'
import { ValueType } from '@components/views/teaPage/types/types'
import { updateProductFilterThunk } from '@store/products'
import { updateProductFilter } from '@components/views/teaPage/utils/common'

import { commonStyle } from '../../../../../styles'

export function Categories() {
  const dispatch = useAppDispatch()

  const catalogItems = useSelector((state: IStore) => state.products.catalog)
  console.log(catalogItems)

  const [open, setOpen] = React.useState(true)
  const [itemValue, setItemNumber] = React.useState('TEA')

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const isDisabledFilters = useSelector((state: IStore) => state.products.isProductsUpdate)
  const filters = useSelector((state: IStore) => state.products.filters)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const handleClick = (itemId: string) => {
    if(itemId === itemValue) {
      setOpen(!open)
    } else if(open) {
      setItemNumber(itemId)
    } else {
      setOpen(!open)
      setItemNumber(itemId)
    }
  }

  const handleProductFilterChange = (filterName: keyof ProductFilters, value: ValueType) => {
    const newFilters = updateProductFilter(filters, filterName, value)

    dispatch(updateProductFilterThunk(newFilters))
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledCategories>
        <List component="div">
          {catalogItems.map(item => (
            <div key={item.type}>
              <ListItemButton
                onClick={item.maybeNestedItems ? () => handleClick(item.type) : () => {}}
                disabled={isDisabledFilters}
              >
                <ListItemText primary={item.name} />
                {item.maybeNestedItems ?
                  <>
                    {(open && itemValue === item.type) ?
                      <Icons name="arrow-up-red" color="#fff" size="24" className="icon" /> :
                      <Icons name="arrow-down-red" color="#fff" size="24" className="icon" />
                    }
                  </> : null
                }
              </ListItemButton>
              {item.maybeNestedItems ?
                <Collapse in={itemValue === item.type && open} timeout="auto" unmountOnExit>
                  <List component="div">
                    {item.maybeNestedItems.map(subItem => (
                      <ListItemButton
                        key={subItem.type} sx={{ pl: 4 }}
                        onClick={() => handleProductFilterChange('maybeGroupType', subItem.type)}
                        selected={subItem.type === filters.maybeGroupType}
                        disabled={isDisabledFilters}
                      >
                        <ListItemText primary={ subItem.name } />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse> : null
              }
            </div>
          ))}
        </List>
      </StyledCategories>
    </ThemeProvider>
  )
}
