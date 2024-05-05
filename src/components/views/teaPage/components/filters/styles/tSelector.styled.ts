import styled from 'styled-components'

import { commonStyle } from '../../../../../../styles'

export const StyledTSelector = styled.div.attrs(() => ({
  className: 't-selector',
}))`
  height: 100%;
  
  .selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.5rem;
    height: 100%;
    background-color: ${() => commonStyle.colors.white};
    font-size: ${() => commonStyle.fonts.fs14};
    box-shadow: ${() => commonStyle.shadows.primaryShadow};
    border: none;
    border-radius: ${() => commonStyle.radii.radius8};
    cursor: pointer;
  }
  
  .selector-disabled {
    justify-content: center;
  }

  .MuiFormControl-root {
    display: block;
    visibility: hidden;
    position: relative;
    top: -0.8rem;
    width: 100%;
    height: 0;
    margin: 0;

    .MuiInputBase-root {
      width: 100%;
      padding: 0;

      .MuiSelect-select {
        display: none;
        width: 100%;
      }
      
      .MuiOutlinedInput-notchedOutline {
        display: none;
      }

      .MuiSvgIcon-root {
        display: none;
      }
    }
  }
`
