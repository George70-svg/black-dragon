import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../styles'

export const StyledTableView = styled.div.attrs(() => ({
  className: 'table-view',
}))`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: visible;
  position: relative;

  .cart-info {
    position: fixed;
    top: 0.5rem;
    right: 2rem;
    z-index: ${() => commonStyle.layers.firstLayer};
  }
  
  .up-button {
    position: fixed;
    bottom: 5rem;
    left: 8rem;
    z-index: ${() => commonStyle.layers.firstLayer};
  }
  
  table {
    position: relative;
    border-collapse: collapse;
    
    thead {
      position: sticky;
      z-index: ${() => commonStyle.layers.secondLayer};
      top: 0;
      height: 3.5rem;
      background-color: ${props => props.theme.backgroundColor};
      color: ${props => props.theme.secondColor};

      tr {
        height: 100%;
        box-shadow: 0 1px 0 0 ${() => commonStyle.colors.grey224};

        th {
          height: 100%;
          padding: 0;
          background-color: ${props => props.theme.backgroundColor};
          font-weight: ${() => commonStyle.fontStyles.fw500};

          .top-left {
            display: flex;
            justify-content: start;
            align-items: start;
          }
          
          .center-left {
            display: flex;
            justify-content: start;
            align-items: center;
            text-align: left;
          }
        }
      }
    }
    
    tbody {

      tr {
        scroll-margin-top: 3.5rem;
        height: 3.25rem;
        border-bottom: 1px solid ${() => commonStyle.colors.grey224};

        td {
          padding: 0.5rem 0.25rem;

          .table-item {
            width: 100%;
          }
        }
      }

      .tea-group-separate {
        background-color: ${() => commonStyle.colors.grey224};
        
        td {
          padding-left: 5rem;
          font-size: ${() => commonStyle.fonts.fs20};
          font-weight: ${() => commonStyle.fontStyles.fw600};
        }
      }
    }
  }
  
  .load-element {
    height: 5rem;
    position: relative;
    
    .loading-spinner {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
    }
  }
  
  //Если экран шире full hd, то у нас появляются боковые полосы. Нужно смещать кнопки от краёв.
  //Поэтому завязываемся на основное разрешение 1920px (возможно, стоит вынести в переменную)
  @media screen and (min-width: 1921px) {
    .cart-info {
      right: 50%;
      transform: translateX(calc(960px - 2.8rem));
    }

    .up-button {
      left: 50%;
      transform: translateX(calc(-960px + 8rem));
    }
  }
`
