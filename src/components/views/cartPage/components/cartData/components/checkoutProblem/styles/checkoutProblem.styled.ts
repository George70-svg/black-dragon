import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../styles'

export const StyledCheckoutProblem = styled.div.attrs(() => ({
  className: 'checkout-problem',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  
  h2 {
    text-align: center;
    font-size: ${() => commonStyle.fonts.fs32};
    font-weight: ${() => commonStyle.fontStyles.fw600};
    color: ${props => props.theme.color};
  }
  
  p {
    font-size: ${() => commonStyle.fonts.fs14};
  }
`
