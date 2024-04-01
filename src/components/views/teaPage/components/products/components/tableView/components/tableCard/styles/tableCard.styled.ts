import styled from 'styled-components'

export const StyledTableCard = styled.div.attrs(() => ({
  className: 'table-card',
}))`
  display: flex;
  gap: 3.125rem;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  
  .image-slider {
    flex-basis: 26rem;
  }
  
  .item-info {
    flex-grow: 1;
  }
`
