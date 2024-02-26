import styled from 'styled-components'

import { commonStyle } from '../../../../../../styles'

export const StyledFilterCheckbox = styled.div.attrs(() => ({
  className: 'filter-checkbox',
}))`

    .MuiFormControlLabel-root {
        margin: 0;

        .MuiButtonBase-root {

            .PrivateSwitchBase-input {
                
            }

            .MuiSvgIcon-root {
                background-color: rgba(246, 246, 246, 1);
                border-radius: ${() => commonStyle.radii.radius8};
            }
        }

        .MuiTypography-root {font-family: 'MontserratFont', sans-serif;
            font-size: ${() => commonStyle.fonts.fs14};
            color: ${props => props.theme.color};
        }

        .Mui-checked {

        }
    }
`
