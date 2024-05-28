import styled from 'styled-components'

import { commonStyle } from '../../../styles'

export const StyledProfile = styled.div.attrs(() => ({
  className: 'profile',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;

  h2 {
    font-size: ${() => commonStyle.fonts.fs32};
    font-weight: ${() => commonStyle.fontStyles.fw600};
    color: ${props => props.theme.color};
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    width: 100%;

    .info {
      display: flex;
      justify-content: start;
      gap: 0.5rem;
      width: 100%;
      font-size: ${() => commonStyle.fonts.fs16};
      color: ${props => props.theme.color};

      .head {
        font-weight: ${() => commonStyle.fontStyles.fw600};
      }
    }
  }

  .logout-button {
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
