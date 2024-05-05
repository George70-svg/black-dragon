import styled from 'styled-components'

export const StyledCartPage = styled.div.attrs(() => ({
  className: 'cartPage page',
}))`
  height: 100%;
  width: 100%;

  h1 {

  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    
    div {
      width: 50rem;
      margin-top: 2rem;
    }
  }
`
