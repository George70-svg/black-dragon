import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../../../styles'

export const StyledUpButton = styled.div.attrs(() => ({
  className: 'up-button',
}))`
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 4.5rem;
    height: 4.5rem;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: ${() => commonStyle.radii.fullRadius};
    box-shadow: ${() => commonStyle.shadows.primaryShadow};
    cursor: pointer;
    transition: box-shadow ${() => commonStyle.times.time3};
    
    &:hover {
      box-shadow: ${() => commonStyle.shadows.secondaryShadow};
      transition: box-shadow ${() => commonStyle.times.time3};
    }
    
    .icon {
      margin-top: 0.5rem;
    }
    
    p {
      font-size: ${() => commonStyle.fonts.fs12};
    }
  }
`
