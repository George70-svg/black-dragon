import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../../../../../styles'

interface StyledImageSliderProps {
  $imagesPerPage: number;
}

export const StyledImageSlider = styled.div.attrs(() => ({
  className: 'image-slider',
}))<StyledImageSliderProps>`
  width: 100%;
  height: 25rem;
  user-select: none;

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
          border-radius: ${() => commonStyle.radii.radius8};
        }
      }

      .slider {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-basis: 20%;

        .arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${props => props.theme.backgroundColor};
          border: none;
          cursor: pointer;
        }

        .images {
          display: flex;
          justify-content: flex-start;
          gap: 0.5rem;
          overflow: hidden;
          width: ${(props) => `calc(1rem + 3.875rem * ${props.$imagesPerPage})`};

          .image {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            min-width: 3.875rem;
            height: 3.875rem;
            cursor: pointer;
            border: 2px solid ${props => props.theme.backgroundColor};
            border-radius: ${() => commonStyle.radii.radius8};
            transition: border 0.3s;

            img {
              width: 3.875rem;
              height: 3.875rem;
              border-radius: ${() => commonStyle.radii.radius8};
            }
          }

          .select {
            border: 2px solid ${() => commonStyle.colors.red};
            transition: border 0.3s;
          }
        }
        
        .images-center {
          justify-content: center;
        }
      }
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
