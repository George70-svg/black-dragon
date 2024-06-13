import styled from 'styled-components'

import { commonStyle } from '../../../../../../../styles'

export const StyledMenuSearch = styled.div.attrs(() => ({
  className: 'menu-search',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  
  .input-container {
    width: 100%;

    .input-search {
      width: 100%;
      border-radius: ${() => commonStyle.radii.radius8} !important;
      background-color: rgba(246, 246, 246, 1);
      
      .MuiInputBase-root {
        
        .MuiInputBase-input {
          font-size: ${() => commonStyle.fonts.fs14};
        }
      }

      div {
        height: 2.5rem;
        font-family: 'MontserratFont', sans-serif;

        .MuiOutlinedInput-notchedOutline {
          border: none;
        }
      }
    }
  }
`
