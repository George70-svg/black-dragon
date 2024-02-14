import styled from 'styled-components'

export const StyledNavigation = styled.div.attrs(() => ({
  className: 'navigation',
}))`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid black;
    
    ul {
        display: flex;
        justify-content: center;
        gap: 2.4rem;
    }
`
