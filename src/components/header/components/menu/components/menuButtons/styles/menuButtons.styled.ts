import styled from 'styled-components'

import { commonStyle } from '../../../../../../../styles'

export const StyledMenuButtons = styled.div.attrs(() => ({
  className: 'menu-buttons',
}))`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  height: 100%;

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    position: relative;
    cursor: pointer;
    
    .item-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1rem;
        height: 1rem;
        position: absolute;
        top: -5px;
        right: 12px;
        color: ${() => commonStyle.colors.white};
        font-size: ${() => commonStyle.fonts.fs10};
        border-radius: ${() => commonStyle.radii.fullRadius};
        background-color: ${() => commonStyle.colors.red};
      }
  
      p {
        font-size: ${() => commonStyle.fonts.fs14};
        color: ${props => props.theme.secondColor};
      }
  }
`
