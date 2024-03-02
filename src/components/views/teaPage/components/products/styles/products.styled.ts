import styled from 'styled-components'

export const StyledProducts = styled.div.attrs(() => ({
  className: 'products scroll-bar-hide',
}))`
    grid-area: products;
    display: flex;
    flex-direction: column;
    overflow: auto;
    border: 1px solid black;
    
    .headerss {
        position: sticky;
        top: 0;
        border: 1px solid black;
        background-color: blue;
    }
    
    .tabless {
        position: static;
        border: 1px solid black;
    }
`
