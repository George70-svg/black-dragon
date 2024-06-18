import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../../../styles'

type StyledTableItemProps = {
  $inStoke: boolean
}

export const StyledTableItem = styled.div.attrs(() => ({
  className: 'table-item',
}))<StyledTableItemProps>`
  height: 100%;
  font-size: ${() => commonStyle.fonts.fs14};
  color: ${props => props.$inStoke ? props.theme.color : commonStyle.colors.grey400};
  font-weight: ${() => commonStyle.fontStyles.fw500};
  
  .center {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  
  .left {
    display: flex;
    justify-content: start;
    height: 100%;
    width: 100%;
  }
`
