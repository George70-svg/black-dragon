import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { IStore } from '@store/store'
import { TableViewProps } from '@components/views/teaPage/components/products/components/tableView/types/types'
import { tableDescription } from '@components/views/teaPage/components/products/components/tableView/utils/tableDescription'
import { StyledTableView } from '@components/views/teaPage/components/products/components/tableView/styles/tableView.styled'
import { TableItem } from '@components/views/teaPage/components/products/components/tableView/components/tableItem/tableItem'

import { commonStyle } from '../../../../../../../styles'

export function TableView(props: TableViewProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
    backgroundColor: commonStyle[colorTheme].backgroundColor,
  }

  const columns = tableDescription.columns

  return (
    <ThemeProvider theme={theme}>
      <StyledTableView>
        <table>
          <colgroup>
            {
              columns.map((column, index) => <col
                key={index}
                style={column.width ? { width: column.width } : {}}
              />)
            }
          </colgroup>

          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} style={{ width: column.width }}>{column.header()}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {props.products.map((product, productIndex) => (
              <tr key={productIndex}>
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    style={{ width: column.width }}
                  >
                    <TableItem class={column.alignBody} item={column.body(product)} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </StyledTableView>
    </ThemeProvider>
  )
}
