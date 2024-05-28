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
    requiredName: string
    nameMaxLength: string
    requiredEmail: string
    emailMaxLength: string
    wrongPasswordPattern: string
    requiredPassword: string
    passwordMinLength: string
    passwordMaxLength: string
    wrongConfirmPasswordPattern: string
    requiredConfirmPassword: string
    confirmPasswordMinLength: string
    confirmPasswordMaxLength: string
    passwordsNotEqual: string
    requiredPhone: string
    wrongLogin: string
    wrongRegistration: string
    default: string
  }

  const errorMessages: ErrorMessages = {
    requiredName: 'Имя обязательно',
    nameMaxLength: 'Длина имени не должна превышать 100 символов',
    requiredEmail: 'Почта обязательна',
    emailMaxLength: 'Длина почты не должна превышать 100 символов',
    wrongPasswordPattern: 'Пароль должен содержать заглавные и строчные латинские буквы, цифры и специальные символы',
    requiredPassword: 'Пароль обязателен',
    passwordMinLength: 'Длина пароля не должна быть меньше 8 символов',
    passwordMaxLength: 'Длина пароля не должна превышать 64 символов',
    wrongConfirmPasswordPattern: 'Пароль должен содержать заглавные и строчные латинские буквы, цифры и специальные символы',
    requiredConfirmPassword: 'Пароль обязателен',
    confirmPasswordMinLength: 'Длина пароля не должна быть меньше 8 символов',
    confirmPasswordMaxLength: 'Длина пароля не должна превышать 64 символов',
    passwordsNotEqual: 'Ваши пароли не совпадают',
    requiredPhone: 'Телефон обязателен',
    wrongLogin: 'Некорректные логин или пароль',
    wrongRegistration: 'Такой пользователь уже существует',
    default: 'Неизвестная ошибка'
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledAuthError>
        {props.field === 'name' && props.validationErrors?.type === 'required' &&
          <p className='error-text'>{errorMessages.requiredName}</p>
        }

        {props.field === 'name' && props.validationErrors?.type === 'maxLength' &&
          <p className='error-text'>{errorMessages.nameMaxLength}</p>
        }

        {props.field === 'email' && props.validationErrors?.type === 'required' &&
          <p className='error-text'>{errorMessages.requiredEmail}</p>
        }

        {props.field === 'email' && props.validationErrors?.type === 'maxLength' &&
          <p className='error-text'>{errorMessages.emailMaxLength}</p>
        }

        {props.field === 'password' && props.validationErrors?.type === 'pattern' &&
          <p className='error-text'>{errorMessages.wrongPasswordPattern}</p>
        }

        {props.field === 'password' && props.validationErrors?.type === 'required' &&
          <p className='error-text'>{errorMessages.requiredPassword}</p>
        }

        {props.field === 'password' && props.validationErrors?.type === 'minLength' &&
          <p className='error-text'>{errorMessages.passwordMinLength}</p>
        }

        {props.field === 'password' && props.validationErrors?.type === 'maxLength' &&
          <p className='error-text'>{errorMessages.passwordMaxLength}</p>
        }

        {props.field === 'confirmPassword' && props.validationErrors?.type === 'pattern' &&
          <p className='error-text'>{errorMessages.wrongConfirmPasswordPattern}</p>
        }

        {props.field === 'confirmPassword' && props.validationErrors?.type === 'required' &&
          <p className='error-text'>{errorMessages.requiredConfirmPassword}</p>
        }

        {props.field === 'confirmPassword' && props.validationErrors?.type === 'minLength' &&
          <p className='error-text'>{errorMessages.confirmPasswordMinLength}</p>
        }

        {props.field === 'confirmPassword' && props.validationErrors?.type === 'maxLength' &&
          <p className='error-text'>{errorMessages.confirmPasswordMaxLength}</p>
        }

        {props.field === 'confirmPassword' && props.dataErrors &&
          <p className='error-text'>{errorMessages.passwordsNotEqual}</p>
        }

        {props.field === 'phoneNumber' && props.validationErrors?.type === 'required' &&
          <p className='error-text'>{errorMessages.requiredPhone}</p>
        }

        {props.field === 'login' &&
          <p className='error-text'>{errorMessages.wrongLogin}</p>
        }

        {props.field === 'registration' &&
          <p className='error-text'>{errorMessages.wrongRegistration}</p>
        }
      </StyledAuthError>
    </ThemeProvider>
  )
}
