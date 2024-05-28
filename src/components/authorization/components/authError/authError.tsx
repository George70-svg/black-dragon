import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'
import { AuthErrorProps } from '@components/authorization/components/authError/types/types'
import { StyledAuthError } from '@components/authorization/components/authError/styles/authError.styled'

import { commonStyle } from '../../../../styles'

export function AuthError(props: AuthErrorProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  type ErrorMessages = {
    passwordsNotEqual: string
    default: string
  }

  const errorMessages: ErrorMessages = {
    passwordsNotEqual: 'Ваши пароли не совпадают',
    default: 'Неизвестная ошибка'
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledAuthError>
        {props.field === 'confirmPassword' && props.dataErrors &&
          <p className='error-text'>{errorMessages.passwordsNotEqual}</p>
        }
      </StyledAuthError>
    </ThemeProvider>
  )
}
