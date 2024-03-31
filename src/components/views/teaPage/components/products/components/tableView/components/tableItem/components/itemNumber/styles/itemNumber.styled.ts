import styled from 'styled-components'

import { commonStyle } from '../../../../../../../../../../../../styles'

type StyledItemNumberProps = {
  active: number
}

export const StyledItemNumber = styled.div.attrs(() => ({
  className: 'item-number',
}))<StyledItemNumberProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.25rem;
    padding: 0.5rem 1rem;
    background-color: ${() => commonStyle.colors.grey100};
    border-radius: ${() => commonStyle.radii.radius8};
    border: ${props => props.active ? `1px solid ${commonStyle.colors.red}` : ''};

    .number {
        font-size: ${() => commonStyle.fonts.fs14};
        font-weight: ${props => props.active ? commonStyle.fontStyles.fw600 : commonStyle.fontStyles.fw600};
        color: ${props => props.active ? props.theme.color : props.theme.secondColor};
    }

    .calculation {
        font-size: ${() => commonStyle.fonts.fs16};
        cursor: pointer;
        user-select: none;
    }
`
