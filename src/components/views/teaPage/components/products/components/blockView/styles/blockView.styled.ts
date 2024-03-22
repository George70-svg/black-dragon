import styled from 'styled-components'

export const StyledBlockView = styled.div.attrs(() => ({
  className: 'block-view',
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    border: 1px solid black;
`
