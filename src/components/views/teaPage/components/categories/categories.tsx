import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledCategories } from '@components/views/teaPage/components/categories/styles/categories.styled'
import { useSelector } from 'react-redux'
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import { IStore } from '@store/store'
import Icons from '@icons/icons'

import { commonStyle } from '../../../../../styles'

export function Categories() {
  const items = [
    {
      itemName: 'Новинки',
      id: '1',
    },
    {
      itemName: 'Товары со скидкой',
      id: '2',
    },
    {
      itemName: 'Чай от ЧБЦ',
      id: '3',
    },
    {
      itemName: 'Чай 2023',
      id: '4',
    },
    {
      itemName: 'Чай 2023',
      id: '5',
    },
    {
      itemName: 'Пуэр',
      subItems: [
        { itemName: 'Чай 2022', id: '61' },
        { itemName: 'Чай 2021', id: '62' },
        { itemName: 'Чай 2020', id: '63' },
        { itemName: 'Чай 2019', id: '64' },
        { itemName: 'Чай 2018', id: '65' },
      ],
      id: '6',
    },
    {
      itemName: 'Улун',
      subItems: [
        { itemName: 'Чай 2022', id: '71' },
        { itemName: 'Чай 2021', id: '72' },
        { itemName: 'Чай 2020', id: '73' },
        { itemName: 'Чай 2019', id: '74' },
        { itemName: 'Чай 2018', id: '75' },
        { itemName: 'Чай 2017', id: '76' },
      ],
      id: '7',
    },
    {
      itemName: 'Зелёный чай',
      id: '8',
    },
    {
      itemName: 'Красный чай',
      id: '9',
    },
    {
      itemName: 'Жёлтый чай',
      id: '10',
    },
    {
      itemName: 'Белый чай',
      id: '11',
    },
    {
      itemName: 'Хэй ча (Чёрный чай)',
      id: '12',
    },
    {
      itemName: 'Травяной чай',
      subItems: [
        { itemName: 'Ромашка', id: '131' },
        { itemName: 'Крапива', id: '132' },
        { itemName: 'Зверобой', id: '133' },
        { itemName: 'Иван-чай', id: '134' },
        { itemName: 'Лопух', id: '135' },
        { itemName: 'Сено', id: '136' },
      ],
      id: '13',
    },
    {
      itemName: 'Посуда',
      subItems: [
        { itemName: 'Чашки', id: '141' },
        { itemName: 'Чайники', id: '142' },
        { itemName: 'Тарелки', id: '143' },
        { itemName: 'Ложки', id: '144' },
        { itemName: 'Кружки', id: '145' },
      ],
      id: '14',
    },
    {
      itemName: 'Аксессуары',
      subItems: [
        { itemName: 'Открытки', id: '151' },
        { itemName: 'Футболки', id: '152' },
        { itemName: 'Подставки', id: '153' },
      ],
      id: '15',
    },
  ]

  const [open, setOpen] = React.useState(false)
  const [itemNumber, setItemNumber] = React.useState('')

  const handleClick = (itemId: string) => {
    if(itemId === itemNumber) {
      setOpen(!open)
    } else if(open) {
      setItemNumber(itemId)
    } else {
      setOpen(!open)
      setItemNumber(itemId)
    }
  }

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledCategories>
        <List component="div">
          {items.map(item => (
            <div key={item.id}>
              <ListItemButton
                onClick={item.subItems ? () => handleClick(item.id) : () => {}}
              >
                <ListItemText primary={item.itemName} />
                {item.subItems ?
                  <>
                    {(open && itemNumber === item.id) ?
                      <Icons name="arrow-up-red" color="#fff" size="24" className="icon" /> :
                      <Icons name="arrow-down-red" color="#fff" size="24" className="icon" />
                    }
                  </> : null
                }
              </ListItemButton>
              {item.subItems ?
                <Collapse in={itemNumber === item.id && open} timeout="auto" unmountOnExit>
                  <List component="div">
                    {item.subItems.map(subItem => (
                      <ListItemButton key={subItem.id} sx={{ pl: 4 }}>
                        <ListItemText primary={ subItem.itemName } />
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
