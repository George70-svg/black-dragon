import styled from 'styled-components'
import { commonStyle } from '../../../../../../../../../../../../styles'

export const StyledItemInfo = styled.div.attrs(() => ({
  className: 'item-info',
}))`
  display: flex;
  gap: 6.25rem;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.color};
  
  .left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-basis: 70%;

    h2 {
      margin-bottom: 1rem;
      font-size: ${() => commonStyle.fonts.fs20};
      font-weight: ${() => commonStyle.fontStyles.fw600};
    }
    
    .info-item {
      display: flex;
      gap: 0.5rem;
      font-size: ${() => commonStyle.fonts.fs14};
      
      .name {
        color: ${props => props.theme.secondColor};
      }
    }
  }
  
  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-basis: 30%;
    min-width: 13rem;
    
    .price {
      padding: 0.5rem 1rem;
      background-color: ${() => commonStyle.colors.grey246};
      font-size: ${() => commonStyle.fonts.fs28};
      font-weight: ${() => commonStyle.fontStyles.fw600};
      border-radius: ${() => commonStyle.radii.radius8};
    }
    
    .number {
      display: flex;
      gap: 0.5rem;
      
      .item-number {
        height: 3rem;
        flex-grow: 1;
        
        .number {
          font-size: ${() => commonStyle.fonts.fs16};
        }
        
        .calculation {
          font-size: ${() => commonStyle.fonts.fs20};
        }
      }
      
      .item-selector {
        height: 3rem;
        flex-basis: 5rem;

        .t-selector {

          .selector {
            font-size: ${() => commonStyle.fonts.fs16};
          }
        }
      }
    }
    
    .result {
      display: flex;
      gap: 0.5rem;
      font-size: ${() => commonStyle.fonts.fs14};
      font-weight: ${() => commonStyle.fontStyles.fw600};
      
      .dotted {
        margin-bottom: 3px;
        flex-grow: 1;
        border-bottom: 2px dotted ${props => props.theme.secondColor};
      }
    }
  }
`
