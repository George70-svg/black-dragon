import styled from 'styled-components'

export const StyledProducts = styled.div.attrs(() => ({
  className: 'products scroll-bar-hide',
}))`
    grid-area: products;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    height: 100%;
`
