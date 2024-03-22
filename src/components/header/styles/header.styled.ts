import styled from 'styled-components'

export const StyledHeader = styled.div.attrs(() => ({
  className: 'header',
}))`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    
    .navigation {
        flex-basis: 20%;
        margin-bottom: -10px;
    }
    
    .menu {
        flex-basis: 80%;
    }
`
