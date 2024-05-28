import styled from 'styled-components'

import { commonStyle } from '../../../../../styles'

export const StyledAuthError = styled.div.attrs(() => ({
  className: 'auth-error',
}))`
  display: flex;
  justify-content: start;
  width: 100%;
  
  p {
    font-size: ${() => commonStyle.fonts.fs14};
    color: ${() => commonStyle.colors.red};
  }
`
