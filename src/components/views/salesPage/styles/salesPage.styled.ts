import styled from 'styled-components'

export const StyledSalesPage = styled.div.attrs(() => ({
  className: 'sales-page page',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  img {
    height: 50%;
  }
`
