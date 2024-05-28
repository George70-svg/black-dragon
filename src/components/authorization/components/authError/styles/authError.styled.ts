import styled from 'styled-components'

import { commonStyle } from '../../../../../styles'

export const StyledAuthError = styled.div.attrs(() => ({
  className: 'auth-error',
}))`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.5rem;
  width: 100%;
  
  p {
    font-size: ${() => commonStyle.fonts.fs14};
    color: ${() => commonStyle.colors.red};
  }
`
