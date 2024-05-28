import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { useForm } from 'react-hook-form'
import { Box, Button, TextField } from '@mui/material'
import { IStore, useAppDispatch } from '@store/store'
import { loginThunk, setAuthViewThunk } from '@store/auth'
import { StyledLogin } from '@components/authorization/components/login/styles/login.styled'
import { AuthError } from '@components/authorization/components/authError/authError'

import { commonStyle } from '../../../../styles'

interface IFormInput {
  userName: string
  password: string
}

export function Login() {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const loginError = useSelector((state: IStore) => state.auth.loginServerError)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  const onSubmit = async (data: IFormInput) => {
    const user: IFormInput = {
      userName: data.userName,
      password: data.password
    }

    dispatch(loginThunk(user))
  }

  const handleChangeAuthView = () => {
    dispatch(setAuthViewThunk('registration'))
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledLogin>
        <h2>Войти</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='inputs-container'>
            <Box className='input-container'>
              <TextField
                className={`input-user-name input ${errors.userName && 'input-error'}`}
                type='text'
                placeholder='Email'
                color='primary'
                autoComplete='off'
                {...register('userName', { required: true })}
              />
            </Box>

            <Box className="input-container">
              <TextField
                className={`input-password input ${errors.password && 'input-error'}`}
                type='password'
                placeholder='Пароль'
                color='primary'
                autoComplete='off'
                {...register('password', { required: true })}
              />
            </Box>

            {loginError && <AuthError field='login'/>}
          </div>

          <Button className='enter-button' variant='contained' type='submit'>
            Войти
          </Button>
        </form>

        <div className='not-account'>
          <p>Нет аккаунта? <span onClick={() => handleChangeAuthView()} className='action-text'>Создать</span></p>
        </div>
      </StyledLogin>
    </ThemeProvider>
  )
}
