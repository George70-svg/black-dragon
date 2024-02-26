import styled from 'styled-components'

export const StyledFilters = styled.div.attrs(() => ({
  className: 'filters',
}))`
    grid-area: filters;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;

    .filter-group-1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .selectors-group {
            display: flex;
            gap: 0.5rem;
        }
    }

    .filter-group-2 {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;
        width: 100%;

        .checkbox-container {
            display: flex;
            gap: 1rem;
        }
    }
`
