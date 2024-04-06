import styled from 'styled-components'
//@ts-ignore

import { commonStyle } from '../../../../../../../styles'

export const StyledMenuLogo = styled.div.attrs(() => ({
  className: 'menu-logo',
}))`
  display: flex;
  align-items: center;
  gap: 0.813rem;
  height: 100%;

  .icon-container {
    cursor: pointer;
    margin-right: -12px;
  }

  .name-container {
    cursor: pointer;

    h2 {
      font-size: ${() => commonStyle.fonts.fs21};
      font-weight: ${() => commonStyle.fontStyles.fw600};
      color: ${() => commonStyle.colors.red};
      letter-spacing: -1px;
      line-height: 150%;
      text-transform: uppercase;
    }

    p {
      font-size: ${() => commonStyle.fonts.fs12};
      color: ${props => props.theme.secondColor};
      font-weight: 650;
      letter-spacing: 5%;
      line-height: 150%;
      text-transform: uppercase;
    }
  }
`
