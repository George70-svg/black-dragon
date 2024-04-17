import styled from 'styled-components'

import { commonStyle } from '../../../../../styles'

export const StyledLogin = styled.div.attrs(() => ({
  className: 'login',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;

  h2 {
    font-size: ${() => commonStyle.fonts.fs32};
    font-weight: ${() => commonStyle.fontStyles.fw600};
    color: ${props => props.theme.color};
  }
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    gap: 1rem;
    
    .inputs-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: 100%;
      
      .input-container {
        width: 100%;
        
        .input {
          width: 100%;
          border-radius: ${() => commonStyle.radii.radius16} !important;
          background-color: rgba(246, 246, 246, 1);

          .MuiInputBase-root {

            .MuiInputBase-input {
              font-size: ${() => commonStyle.fonts.fs16};
              font-weight: ${() => commonStyle.fontStyles.fw600};
            }
          }

          div {
            height: 4rem;
            font-family: 'MontserratFont', sans-serif;

            .MuiOutlinedInput-notchedOutline {
              border: none;
            }
          }
        }
        
        .input-error {
          background-color: ${() => commonStyle.colors.lightRed};
          box-shadow: 0 0 0 1px ${() => commonStyle.colors.red};
        }
      }
    }
    
    .enter-button {
      width: 100%;
      height: 4rem;
      background-color: ${() => commonStyle.colors.red};
      font-size: ${() => commonStyle.fonts.fs20};
      font-family: 'MontserratFont', sans-serif;
      border-radius: ${() => commonStyle.radii.radius16};
      text-transform: inherit;
      
      &:hover {
        background-color: ${() => commonStyle.colors.darkRed};
      }
    }
  }
  
  .not-account {
    font-size: ${() => commonStyle.fonts.fs16};
    
    .action-text {
      color: ${() => commonStyle.colors.red};
      font-weight: ${() => commonStyle.fontStyles.fw600};
      cursor: pointer;
      transition: color ${() => commonStyle.times.time3};

      &:hover {
        color: ${() => commonStyle.colors.darkRed};
        transition: color ${() => commonStyle.times.time3};
      }
    }
  }
`
