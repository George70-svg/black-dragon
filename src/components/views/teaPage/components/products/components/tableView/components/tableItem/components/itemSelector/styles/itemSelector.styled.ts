import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../../../../../styles'

export const StyledItemSelector = styled.div.attrs(() => ({
  className: 'item-selector',
}))`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .t-selector {
        width: 100%;
        
        .selector {
            width: 100%;
            background-color: ${() => commonStyle.colors.grey100};
            box-shadow: none;
        }
    }
`
