import styled from 'styled-components'
//@ts-ignore

import { commonStyle } from '../../../../../../../styles'

export const StyledMenuLogo = styled.div.attrs(() => ({
  className: 'menu-logo',
}))`
    display: flex;
    align-items: center;
    height: 100%;
    
    
    .icon-container {
        cursor: pointer;
    }

    .name-container {
        cursor: pointer;
        
        h2 {
            font-size: ${() => commonStyle.fonts.fs21};
            font-weight: ${() => commonStyle.fontStyles.fw600};
            color: ${() => commonStyle.colors.red};
            text-transform: uppercase;
        }
        
        p {
            color: ${props => props.theme.secondColor};
            font-weight: ${() => commonStyle.fontStyles.fw600};
            text-transform: uppercase;
        }
    }
`
