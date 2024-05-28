import styled from 'styled-components'

import { commonStyle } from '../../../../../styles'

export const StyledNavigation = styled.div.attrs(() => ({
  className: 'navigation',
}))`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    
    ul {
        display: flex;
        justify-content: space-between;
        width: 40%;
        padding: 0 1rem;
        
        li {
            font-size: ${() => commonStyle.fonts.fs14};
            cursor: pointer;
        }
        
        .not-active {
            color: ${props => props.theme.secondColor};
            transition: color ${() => commonStyle.times.time3};
        }
        
        .active {
            color: ${props => props.theme.color};
            transition: color ${() => commonStyle.times.time3};
        }
    }
`
