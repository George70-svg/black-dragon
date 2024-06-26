import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledCategories } from '@components/views/teaPage/components/categories/styles/categories.styled'
import { useSelector } from 'react-redux'
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import Icons from '@icons/icons'
import { IStore, useAppDispatch } from '@store/store'
import { CatalogItem, CatalogSubItem } from '@endpoints/endpoints/products/types'
import { updateProductFilterThunk } from '@store/products'
import { updateProductFilter } from '@components/views/teaPage/utils/common'

import { commonStyle } from '../../../../../styles'

export function Categories() {
  const dispatch = useAppDispatch()

  const catalogItems = useSelector((state: IStore) => state.products.catalog)

  const [openItems, setItem] = React.useState([] as string[])

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const isDisabledFilters = useSelector((state: IStore) => state.products.isProductsUpdate)
  const filters = useSelector((state: IStore) => state.products.filters)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, itemId: string) => {
    event.stopPropagation()

    if(openItems.includes(itemId)) {
      setItem([ ...openItems.filter(id => id !== itemId) ])
    } else {
      setItem([ ...openItems, itemId ])
    }
  }

  const handleProductFilterChange = (value: CatalogItem | CatalogSubItem) => {
    let newFilters = { ...filters }

    newFilters = updateProductFilter(newFilters, 'type', value.type)
    newFilters = updateProductFilter(newFilters, 'maybeGroup', value.maybeGroup)

    dispatch(updateProductFilterThunk(newFilters))
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledCategories>
        <List component="div">
          {catalogItems
            .filter(item => item.availableFor.includes(filters.productType))
            .map(item => (
              <div key={`${item.type}-${item.name}`}>
                <ListItemButton
                  onClick={() => handleProductFilterChange(item)}
                  selected={
                    (item.maybeNestedItems?.map(item => item.maybeGroup).includes(String(filters.maybeGroup))) ||
                    (item.id === filters.type || item.id === filters.maybeGroup)
                  }
                  disabled={isDisabledFilters}
                >
                  <ListItemText primary={item.name} />
                  {item.maybeNestedItems ?
                    <div onClick={(event) => handleClick(event, item.type)}>
                      {(openItems.includes(item.type)) ?
                        <Icons name='arrow-up-red' color='#fff' size='24' className='icon' /> :
                        <Icons name='arrow-down-red' color='#fff' size='24' className='icon' />
                      }
                    </div> : null
                  }
                </ListItemButton>
                {item.maybeNestedItems ?
                  <Collapse in={openItems.includes(item.type)} timeout="auto" unmountOnExit>
                    <List component="div">
                      {item.maybeNestedItems
                        .filter(item => item.availableFor.includes(filters.productType))
                        .map(subItem => (
                          <ListItemButton
                            key={subItem.name} sx={{ pl: 2, ml: 2 }}
                            onClick={() => handleProductFilterChange(subItem)}
                            selected={subItem.maybeGroup === filters.maybeGroup}
                            disabled={isDisabledFilters}
                          >
                            <ListItemText primary={subItem.name} />
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
