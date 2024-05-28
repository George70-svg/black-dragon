import styled from 'styled-components'

export const StyledShopPage = styled.div.attrs(() => ({
  className: 'shop-page',
}))`
  height: 100vh;
  width: 100vw;
  padding: var(--padding-size);

  .header {
    height: var(--header-height);
  }

  .page {
    height: var(--main-height);
  }
`
