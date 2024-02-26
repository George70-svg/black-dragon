import styled from 'styled-components'
// @ts-ignore

import { commonStyle } from '../../../../../../../styles'

export const StyledMenuButtons = styled.div.attrs(() => ({
  className: 'menu-buttons',
}))`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3rem;
    height: 100%;
    
    .button-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        cursor: pointer;
        
        .icon {
            
        }
        
        p {
            font-size: ${() => commonStyle.fonts.fs14};
            color: ${props => props.theme.secondColor};
        }
    }
`
