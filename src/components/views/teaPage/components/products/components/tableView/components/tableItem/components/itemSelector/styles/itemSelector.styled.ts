import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../../../../../styles'

export const StyledItemSelector = styled.div.attrs(() => ({
  className: 'item-selector',
}))`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    .t-selector {
        width: 100%;
        
        .selector {
            width: 100%;
            padding: 0.5rem 0.75rem;
            background-color: ${() => commonStyle.colors.grey100};
            font-weight: ${() => commonStyle.fontStyles.fw600};
            box-shadow: none;
        }
    }
`
