import styled from 'styled-components'

export const StyledMenu = styled.div.attrs(() => ({
  className: 'menu',
}))`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0.5rem;
    
    .menu-logo {
        flex-basis: 30%;
    }
    
    .menu-search {
        flex-basis: 40%;
    }
    
    .menu-buttons {
        flex-basis: 30%;
    }
`
