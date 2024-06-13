import styled from 'styled-components'

import { commonStyle } from '../../../../../../styles'

export const StyledCategories = styled.div.attrs(() => ({
  className: 'categories scroll-bar-hide',
}))`
  grid-area: categories;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .MuiList-root {
    padding: 0;

    .MuiListItemButton-root {
      height: 2.75rem;

      .MuiListItemText-root {
        flex: 0 1 auto;

        span {
          font-family: 'MontserratFont', sans-serif;
          font-size: ${() => commonStyle.fonts.fs12};
          font-weight: ${() => commonStyle.fontStyles.fw600};
          text-transform: uppercase;
        }
      }

      .MuiSvgIcon-root {
        fill: ${() => commonStyle.colors.red};
      }
    }
  }
`
