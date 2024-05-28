import { FieldError } from 'react-hook-form'
import { ServerError } from '@endpoints/endpoints/auth/types'

export type Field = 'login' | 'email' | 'password' | 'confirmPassword' | 'serverError'

export type AuthErrorProps = {
  validationErrors: FieldError | ServerError | undefined
  dataErrors?: boolean
  field: Field
}
