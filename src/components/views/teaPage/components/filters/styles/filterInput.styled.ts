import styled from 'styled-components'

import { commonStyle } from '../../../../../../styles'

export const StyledFilterInput = styled.div.attrs(() => ({
  className: 'filter-input',
}))`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 2.25rem;
    
    p {
        font-size: ${() => commonStyle.fonts.fs14};
        color: ${props => props.theme.color};
    }
    
    .prices {
        display: flex;
        width: 9.1rem;
        height: 2.25rem;
        border: 1px solid ${() => commonStyle.colors.grey600};
        border-radius: ${() => commonStyle.radii.radius8};
        
        .MuiFormControl-root {
            display: flex;
            justify-content: center;
            align-items: center;
            position: static;
            padding: 0;
            
            .MuiInputBase-root {
                position: static;
                padding: 0;
                
                .MuiInputBase-input {
                    padding: 0 0.5rem;
                    font-family: 'MontserratFont', sans-serif;
                    color: ${props => props.theme.color};
                    font-size: ${() => commonStyle.fonts.fs12} !important;
                }
            }
            
            .Mui-focused {

                .MuiInputBase-input {
                    color: ${props => props.theme.color};
                }
            }
        }

        .separator-container {
            height: 100%;

            .separator {
                width: 1px;
                height: 100%;
                background-color: ${() => commonStyle.colors.grey600};
            }
        }
    }
`
