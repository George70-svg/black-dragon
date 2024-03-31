import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../../../../../styles'

export const StyledItemButtons = styled.div.attrs(() => ({
  className: 'item-buttons',
}))`
  display: flex;
  gap: 0.5rem;
  height: 2.25rem;

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.25rem;
    height: 2.25rem;
    padding: 0.5rem;
    background-color: ${() => commonStyle.colors.grey100};
    border-radius: ${() => commonStyle.radii.radius8};
    cursor: pointer;
  }
`
