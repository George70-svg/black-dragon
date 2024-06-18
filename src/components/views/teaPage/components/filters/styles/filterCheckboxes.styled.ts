import styled from 'styled-components'

import { commonStyle } from '../../../../../../styles'

type StyledFilterCheckboxProps = {
  $active: boolean
}

export const StyledFilterCheckbox = styled.div.attrs(() => ({
  className: 'filter-checkbox',
}))<StyledFilterCheckboxProps>`

  .MuiFormControlLabel-root {
    margin: 0;

    .MuiButtonBase-root {

      .PrivateSwitchBase-input {

      }

      .MuiSvgIcon-root {
        background-color: ${props => props.$active ? commonStyle.colors.grey246 : commonStyle.colors.white};
        border-radius: ${() => commonStyle.radii.radius8};
      }
    }

    .MuiTypography-root {
      font-family: 'MontserratFont', sans-serif;
      font-size: ${() => commonStyle.fonts.fs14};
      color: ${props => props.theme.color};
    }

    .Mui-checked {

    }
  }
`
