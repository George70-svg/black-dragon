import styled from 'styled-components'

export const StyledContactsPage = styled.div.attrs(() => ({
  className: 'contacts-page page',
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
