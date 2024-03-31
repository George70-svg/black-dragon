import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../styles'

export const StyledTableView = styled.div.attrs(() => ({
  className: 'table-view scroll-bar-hide',
}))`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  
  table {
    position: relative;
    border-collapse: collapse;

    thead {
      position: sticky;
      top: 0;
      height: 2rem;
      background-color: ${props => props.theme.backgroundColor};
      color: ${props => props.theme.secondColor};

      tr {
        height: 100%;
        box-shadow: 0 0 1px 1px ${() => commonStyle.colors.grey224};

        th {
          height: 100%;
          padding: 0;
          font-weight: ${() => commonStyle.fontStyles.fw500};

          .top-left {
            display: flex;
            justify-content: start;
            align-items: start;
            height: 2rem;
          }
        }
      }
    }

    tbody {

      tr {
        height: 3.25rem;
        border-bottom: 1px solid ${() => commonStyle.colors.grey224};

        td {
          padding: 0.5rem 0.25rem;

          .table-item {
            width: 100%;
          }
        }
      }
    }
  }
`
