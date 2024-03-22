import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../styles'

export const StyledSeeMore = styled.div.attrs(() => ({
  className: 'see-more',
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 4rem;
    min-height: 4rem;
    background-color: ${() => commonStyle.colors.grey246};
    font-size: ${() => commonStyle.fonts.fs16};
    border-radius: ${() => commonStyle.radii.radius8};
    cursor: pointer;
    transition: all ${() => commonStyle.times.time3};
    
    &:hover {
        background-color: ${() => commonStyle.colors.grey200};
        transition: all ${() => commonStyle.times.time3};
    }
`
