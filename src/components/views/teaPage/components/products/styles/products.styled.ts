import styled from 'styled-components'

export const StyledProducts = styled.div.attrs(() => ({
  className: 'products scroll-bar-hide',
}))`
  grid-area: products;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  position: relative;
  height: 100%;

  .loading-container {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
`
