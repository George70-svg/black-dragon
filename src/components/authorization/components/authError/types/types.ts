import { FieldError } from 'react-hook-form'

export type Field = 'name' | 'email' | 'password' | 'confirmPassword' | 'serverError' | 'phoneNumber' | 'login' | 'registration'

export type AuthErrorProps = {
  validationErrors?: FieldError | undefined
  dataErrors?: boolean
  field: Field
}
