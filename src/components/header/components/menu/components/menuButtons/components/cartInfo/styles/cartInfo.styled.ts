import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../../styles'

export const StyledCartInfo = styled.div.attrs(() => ({
  className: 'cart-info',
}))`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .cart-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: ${() => commonStyle.colors.grey246};
    border-radius: ${() => commonStyle.radii.radius8};
    
    .icon {
      
    }
    
    p {
      font-size: ${() => commonStyle.fonts.fs14};
    }
  }
  
  .cart-info {
    display: flex;
    flex-direction: column;
    
    .cart-weight {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.25rem;
      
      .sum {
        color: ${() => commonStyle.colors.grey400};
        font-size: ${() => commonStyle.fonts.fs10};
      }
      
      .weight {
        font-size: ${() => commonStyle.fonts.fs10};
        font-weight: ${() => commonStyle.fontStyles.fw600};
      }
    }
    
    .cart-price {
      font-size: ${() => commonStyle.fonts.fs18};
      font-weight: ${() => commonStyle.fontStyles.fw600};
      white-space: nowrap;
    }
  }
`
