import styled from 'styled-components'
import { commonStyle } from '../../../../../../styles'

export const StyledCartData = styled.div.attrs(() => ({
  className: 'cart-data',
}))`
  grid-area: data;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1rem;
  position: fixed;
  top: calc(var(--header-height) + var(--padding-size));
  height: var(--main-height);
  width: 16.5rem;
  
  .info-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    .info {
      display: flex;
      gap: 0.5rem;
      font-size: ${() => commonStyle.fonts.fs16};
      font-weight: ${() => commonStyle.fontStyles.fw500};
      
      .first {
        font-weight: ${() => commonStyle.fontStyles.fw600};
      }
      
      .second {
        
      }
    }
  }

  .checkout {
    width: 100%;
    height: 4rem;
    background-color: ${() => commonStyle.colors.red};
    font-size: ${() => commonStyle.fonts.fs20};
    font-family: 'MontserratFont', sans-serif;
    border-radius: ${() => commonStyle.radii.radius16};
    text-transform: inherit;
    box-shadow: none;

    &:hover {
      background-color: ${() => commonStyle.colors.darkRed};
    }
  }
`
