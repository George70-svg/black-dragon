import styled from 'styled-components'

import { commonStyle } from '../../../../../../styles'

export const StyledTSelector = styled.div.attrs(() => ({
  className: 't-selector',
}))`
    font-size: ${() => commonStyle.fonts.fs14};
    box-shadow: ${() => commonStyle.shadows.primaryShadow};
    border-radius: ${() => commonStyle.radii.radius8};
    cursor: pointer;
    
    .selector {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 0.5rem;
    }

    .MuiFormControl-root {
        display: block;
        visibility: hidden;
        position: relative;
        top: -0.8rem;
        width: 100%;
        height: 0;
        margin: 0;

        .MuiInputBase-root {
            width: 100%;
            padding: 0;

            .MuiSelect-select {
                display: none;
                width: 100%;
            }

            .MuiOutlinedInput-notchedOutline {
                display: none;
            }

            .MuiSvgIcon-root {
                display: none;
            }
        }
    }
`
