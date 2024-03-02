import styled from 'styled-components'

export const StyledTeaPage = styled.div.attrs(() => ({
  className: 'teaPage page',
}))`
    display: grid;
    
    grid-template-areas:
    "news news"
    "categories filters"
    "categories products";
    
    //grid-template-rows: 6.25rem 5.5rem 1fr; //Add for news widget
    grid-template-rows: 0 5.5rem 1fr;
    grid-template-columns: 12.5rem 1fr;
    gap: 1rem;

    height: 100%;
    width: 100%;
`
