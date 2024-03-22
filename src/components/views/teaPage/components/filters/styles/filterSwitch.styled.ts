import styled from 'styled-components'

import { commonStyle } from '../../../../../../styles'

export const StyledFilterSwitch = styled.div.attrs(() => ({
  className: 'filter-switch',
}))`
    display: flex;
    gap: 0.5rem;
    height: 100%;
    padding: 0.5rem 1rem;
    box-shadow: ${() => commonStyle.shadows.primaryShadow};
    border-radius: ${() => commonStyle.radii.radius8};
    
    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`
