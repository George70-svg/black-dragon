import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { useTransition, animated } from '@react-spring/web'
import { IStore, useAppDispatch } from '@store/store'
import { GroupsItem, TableViewProps } from '@components/views/teaPage/components/products/components/tableView/types/types'
import { generateItemId } from '@utils/common'
import { StyledTableView } from '@components/views/teaPage/components/products/components/tableView/styles/tableView.styled'
import { TableItem } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/tableItem'
import { ItemButtons } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/components/itemButtons/itemButtons'
import { useThresholdScroll } from '@components/views/teaPage/components/products/components/tableView/utils/useThresholdScroll'
import { TableCard } from '@components/views/teaPage/components/products/components/tableView/components/tableCard/tableCard'
import { CartInfo } from '@components/header/components/menu/components/menuButtons/components/cartInfo/cartInfo'
import { UpButton } from '@components/views/teaPage/components/products/components/tableView/components/upButton/upButton'
import { setPageNumberThunk } from '@store/products'
import { CircularProgress } from '@mui/material'

import { commonStyle } from '../../../../../../../styles'

export function TableView(props: TableViewProps) {
  console.warn('Table rerender')
  const dispatch = useAppDispatch()

  const allGroups: GroupsItem[] = []

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const productCartNumber = useSelector((state: IStore) => Object.values(state.cart.items).length)
  const currentPage = useSelector((state: IStore) => state.products.filters.pageNumber)
  const isLoading = useSelector((state: IStore) => state.products.isProductsUpdate)
  const groups = useSelector((state: IStore) => state.products.catalog.forEach(item => {
    allGroups.push({ name: item.name, type: item.id })

    if (item.maybeNestedItems?.length) {
      item.maybeNestedItems.forEach(nestedItem => {
        allGroups.push({ name: nestedItem.name, type: nestedItem.id })
      })
    }
  }))

  const currentPageRef = useRef(currentPage)

  useEffect(() => {
    currentPageRef.current = currentPage
  }, [currentPage])

  const [expandedRow, setExpandedRow] = useState<string | null>(null)
  const rowRefs = useRef<{ [key: string]: HTMLTableRowElement }>({})
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  //Определяем элемент, который открылся
  const setRowRef = useCallback((id: string, el: HTMLTableRowElement | null) => {
    if (el) {
      rowRefs.current[id] = el
    }
  }, [])

  //Объявление наблюдателя для отслеживания скролла и дальнейшей пагинации по скроллу
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(handleObserver, option)

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current)
      }
    }
  }, [loadMoreRef.current])

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
    backgroundColor: commonStyle[colorTheme].backgroundColor,
  }

  const toggleRow = (id: string) => {
    if (expandedRow === id) {
      setExpandedRow(null)
    } else {
      setExpandedRow(id)
    }
  }

  const tableUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

  function handleObserver() {
    dispatch(setPageNumberThunk(currentPageRef.current + 1))
  }

  const showCartInfo = useThresholdScroll() //Создаю событие отслеживания скролла страницы для показа корзины
  const showUpButton = useThresholdScroll(1000) //Создаю событие отслеживания скролла страницы для показа кнопки "Наверх"

  return (
    <ThemeProvider theme={theme}>
      <StyledTableView>
        {showCartInfo && !!productCartNumber && (
          <CartInfo showButton={true} />
        )}

        {showUpButton && (
          <div onClick={tableUp}>
            <UpButton />
          </div>
        )}

        <table>
          <colgroup>
            {
              props.tableDescription.columns.map((column, index) => <col
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
            {props.tableDescription.columns.map((column, index) => (
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
          {props.products.map((product, index) => (
            <React.Fragment key={generateItemId(product)}>
              {/*Разделитель категорий товаров*/}
              {product?.group !== props.products[index - 1]?.group && (
                <tr className='tea-group-separate'>
                  <td colSpan={props.tableDescription.columns.length}>
                    {allGroups.find(item => item.type === product.group)?.name ?? 'Неизвестная группа'}
                  </td>
                </tr>
              )}

              {/*Строка товара*/}
              <tr
                ref={el => setRowRef(generateItemId(product), el)}
                className={generateItemId(product)}
              >
                {props.tableDescription.columns.map((column, colIndex) => (
                  <td key={colIndex} style={!product.inStock ? { color: '' } : {}}>
                    {/*TODO: [@asiuraev 24.03.2024] Нужно здесь указать TableItem*/}
                    {column.name === 'uncover' || column.name === 'delete' ? (
                      <ItemButtons
                        onExpandClick={() => toggleRow(generateItemId(product))}
                        isExpanded={expandedRow === generateItemId(product)}
                        canDelete={props.canDeleteItem}
                        canCover={props.canCoverItem}
                        itemId={generateItemId(product)}
                        disabled={!product.inStock}
                      />
                    ) : (
                      <TableItem
                        class={column.alignBody}
                        item={column.body(product)}
                        inStoke={product.inStock}
                      />
                    )}
                  </td>
                ))}
              </tr>

              {/*Карточка товара*/}
              {expandedRow === generateItemId(product) && expandedTransitions((style, item) => (
                <animated.tr style={style}>
                  <td colSpan={props.tableDescription.columns.length}>
                    <TableCard product={item} />
                  </td>
                </animated.tr>
              ))}
            </React.Fragment>
          ))}
          </tbody>
        </table>
        <div className="load-element" ref={loadMoreRef}>
          {isLoading &&
            <CircularProgress className="loading-spinner" color="inherit" />
          }
        </div>
      </StyledTableView>
    </ThemeProvider>
  )
}
