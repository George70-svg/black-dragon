import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../../../../../styles'

type StyledItemNumberProps = {
  $active: number | undefined
}

export const StyledItemNumber = styled.div.attrs(() => ({
  className: 'item-number',
}))<StyledItemNumberProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.25rem;
  padding: 0.5rem 1rem;
  background-color: ${() => commonStyle.colors.grey100};
  border-radius: ${() => commonStyle.radii.radius8};
  border: ${props => props.$active ? `1px solid ${commonStyle.colors.red}` : ''};
  
  .number {
    display: flex;
    align-items: center;
    height: 100%;
    
    //Убираем стрелки у input number для Chrome, Safari, Edge, Opera
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    //Убираем стрелки у input number для Firefox
    input[type="number"] {
      -moz-appearance: textfield;
    }
    
    .MuiFormControl-root {
      position: relative;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;

      .MuiInputBase-root {
        height: 100%;
        padding: 0;

        .MuiInputBase-input {
          height: 100%;
          padding: 0;
          text-align: center;
          font-family: 'MontserratFont', sans-serif;
          font-size: ${() => commonStyle.fonts.fs14} !important;
          font-weight: ${props => props.$active ? commonStyle.fontStyles.fw600 : commonStyle.fontStyles.fw600} !important;
          color: ${props => props.$active ? props.theme.color : props.theme.secondColor} !important;
        }
      }

      .Mui-focused {

        .MuiInputBase-input {
          color: ${props => props.theme.color};
        }
      }
    }

    *::before {
      content: none !important;
    }

    *::after {
      content: none !important;
    }
  }

  .calculation {
    height: 100%;
    min-width: 15px;
    font-size: ${() => commonStyle.fonts.fs16};
    text-align: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    user-select: none;
  }
  
  .decrease {
    margin-bottom: 2px;
  }
  
  .increase {
    margin-bottom: 1px;
  }
`
