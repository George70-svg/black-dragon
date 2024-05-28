export type AuthView = 'login' | 'registration' | 'done' | null

export type RegisterData = {
  name: string
  email: string
  phoneNumber: string
  password: string
}

export type LoginData = {
  userName: string
  password: string
}

export type User = {
  email: string,
  phoneNumber: string
}

export type WhoamiUser = {
  email: string
  maybePhoneNumber: string
}

type ServerErrorType = "VALIDATION_DATA"

export type ServerError = {
  code: number
  message: string
  type: string | ServerErrorType
}
