import styled from 'styled-components'

export const StyledHeader = styled.div.attrs(() => ({
  className: 'header',
}))`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border: 1px solid black;
    
    .navigation {
        flex-basis: 25%;
    }
    
    .menu {
        flex-basis: 75%;
    }
`
