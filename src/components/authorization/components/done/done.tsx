import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'
import { DoneProps } from '@components/authorization/components/done/types/types'
import { StyledDone } from '@components/authorization/components/done/styles/done.styled'
import Icons from '@icons/icons'

import { commonStyle } from '../../../../styles'

export function Done(props: DoneProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  //Закрываем окно готово через 10 секунды после открытия
  setTimeout(() => {
    props.onClose()
  }, 10000)

  return (
    <ThemeProvider theme={theme}>
      <StyledDone>
        <Icons name="check" color={commonStyle.colors.red} size="64" className="icon" />

        <h2>Готово</h2>
        <p>Перед входом вам необходимо подтвердить почту</p>
        <p>Приятных покупок</p>
      </StyledDone>
    </ThemeProvider>
  )
}
