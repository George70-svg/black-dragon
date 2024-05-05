import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { useTransition, animated } from '@react-spring/web'
import { IStore } from '@store/store'
import { TableViewProps } from '@components/views/teaPage/components/products/components/tableView/types/types'
import { generateItemId } from '@utils/common'
import { tableDescription } from '@components/views/teaPage/components/products/components/tableView/utils/tableDescription'
import { StyledTableView } from '@components/views/teaPage/components/products/components/tableView/styles/tableView.styled'
import { TableItem } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/tableItem'
import { ItemButtons } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemButtons/itemButtons'
import { useThresholdScroll } from '@components/views/teaPage/components/products/components/tableView/utils/useThresholdScroll'
import { TableCard } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/tableCard'
import { CartInfo } from '@components/header/components/menu/components/menuButtons/components/cartInfo/cartInfo'

import { commonStyle } from '../../../../../../../styles'

export function TableView(props: TableViewProps) {
  console.warn('Table rerender')

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const productCartNumber = useSelector((state: IStore) => Object.values(state.cart.items).length)

  const [expandedRow, setExpandedRow] = useState<string | null>(null)
  const rowRefs = useRef<{ [key: string]: HTMLTableRowElement }>({})

  //Определяем элемент, который открылся
  const setRowRef = useCallback((id: string, el: HTMLTableRowElement | null) => {
    if (el) {
      rowRefs.current[id] = el
    }
  }, [])

  //Скроллим до открывшегося элемента
  useEffect(() => {
    if (expandedRow && rowRefs.current[expandedRow]) {
      rowRefs.current[expandedRow].scrollIntoView({ behavior: 'smooth' })
    }
  }, [expandedRow])

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
    backgroundColor: commonStyle[colorTheme].backgroundColor,
  }

  const columns = tableDescription.columns

  const toggleRow = (id: string) => {
    if (expandedRow === id) {
      setExpandedRow(null)
    } else {
      setExpandedRow(id)
    }
  }

  //Плавное раскрытие карточки товара
  const expandedTransitions = useTransition(
    expandedRow ? props.products.filter((product) => generateItemId(product) === expandedRow) : [], {
      from: { height: 0, opacity: 0 },
      enter: { height: 'auto', opacity: 1 },
      keys: (item) => generateItemId(item),
      config: { duration: 300 },
    },
  )

  const showCartInfo = useThresholdScroll()

  return (
    <ThemeProvider theme={theme}>
      <StyledTableView>
        {showCartInfo && !!productCartNumber && (
          <CartInfo showButton={true}/>
        )}

        <table>
          <colgroup>
            {
              columns.map((column, index) => <col
                key={index}
                style={column.width ?
                  column.fixedWidth ? { maxWidth: column.width, minWidth: column.width, width: column.width } :
                    { width: column.width } :
                  {}
                }
              />)
            }
          </colgroup>

          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  style={column.width ? column.fixedWidth ? { maxWidth: column.width } : { width: column.width } : {}}
                >
                  {column.header()}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {props.products.map((product) => (
              <React.Fragment key={generateItemId(product)}>
                <tr ref={el => setRowRef(generateItemId(product), el)} className={generateItemId(product)}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex}>
                      {/*TODO: [@asiuraev 24.03.2024] Нужно здесь указать TableItem*/}
                      {column.name === 'uncover' ? (
                        <ItemButtons
                          onClick={() => toggleRow(generateItemId(product))}
                          isExpanded={expandedRow === generateItemId(product)}
                          itemId={generateItemId(product)}
                        />
                      ) : (
                        <TableItem class={column.alignBody} item={column.body(product)} />
                      )}
                    </td>
                  ))}
                </tr>
                {expandedRow === generateItemId(product) && expandedTransitions((style, item) => (
                  <animated.tr style={style}>
                    <td colSpan={columns.length}>
                      <TableCard product={item} />
                    </td>
                  </animated.tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </StyledTableView>
    </ThemeProvider>
  )
}
