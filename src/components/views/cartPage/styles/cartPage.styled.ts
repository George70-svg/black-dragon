import styled from 'styled-components'

import { commonStyle } from '../../../../styles'

export const StyledCartPage = styled.div.attrs(() => ({
  className: 'cart-page page',
}))`
  position: relative;

  .cart-container {
    display: grid;

    grid-template-areas:
    "news news"
    "data filters"
    "data products";

    grid-template-rows: 0 2.5rem 1fr;
    grid-template-columns: 16.5rem 1fr;
    gap: 1rem;

    position: relative;
  }

  .empty-cart {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
      font-size: ${() => commonStyle.fonts.fs20};
      font-weight: ${() => commonStyle.fontStyles.fw600};
      color: ${props => props.theme.secondColor};
    }
  }
`
