import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../../../../../styles'

export const StyledImageSlider = styled.div.attrs(() => ({
  className: 'image-slider',
}))`
  width: 100%;
  height: 25rem;
  
  .image-container {
    width: 100%;
    height: 100%;
    
    .image-exist {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      height: 100%;

      .main-image {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 80%;
        overflow: hidden;
        border-radius: ${() => commonStyle.radii.radius8};

        img {
          width: 100%;
        }
      }

      .slider {
        flex-basis: 20%;
      }
    }

    .image-not-exist {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: ${() => commonStyle.colors.grey200};
      border-radius: ${() => commonStyle.radii.radius8};
    }
  }
  
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 25rem;
  }
`
