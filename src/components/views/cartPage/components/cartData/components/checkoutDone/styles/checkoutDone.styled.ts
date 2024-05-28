import styled from 'styled-components'
import { commonStyle } from '../../../../../../../../styles'

export const StyledCheckoutDone = styled.div.attrs(() => ({
  className: 'checkout-done',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.75rem;
  padding: 2.75rem 0;

  h2 {
    font-size: ${() => commonStyle.fonts.fs32};
    font-weight: ${() => commonStyle.fontStyles.fw600};
    color: ${props => props.theme.color};
  }
  
  p {
    font-size: ${() => commonStyle.fonts.fs16};
    color: ${props => props.theme.secondColor};
  }
`
