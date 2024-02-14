import styled from 'styled-components'

export const StyledShopPage = styled.div.attrs(() => ({
  className: 'shopPage',
}))`
    --header-height: 5rem;
    --padding-size: 1rem;
    --main-height: calc(100vh - var(--header-height) - (var(--padding-size) * 2));
    
    height: 100vh;
    width: 100vw;
    padding: 1rem;
    
    .header {
        height: var(--header-height);
    }
    
    .page {
        height: var(--main-height);
    }
`
