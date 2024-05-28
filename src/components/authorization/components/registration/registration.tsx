import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ThemeProvider } from 'styled-components'
import { createTheme, ThemeProvider as ThemeProviderMui } from '@mui/material/styles'
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { IStore, useAppDispatch } from '@store/store'
import { registerThunk } from '@store/auth'
import Icons from '@icons/icons'
import { AuthError } from '@components/authorization/components/authError/authError'
import { StyledRegistration } from '@components/authorization/components/registration/styles/registration.styled'

import { commonStyle } from '../../../../styles'

interface IFormInput {
  name: string
  email: string
  password: string
  confirmPassword: string
  phoneNumber: number
  agreeWithLicense: boolean
}

declare module '@mui/material/styles' {
  interface Palette {
    gray: Palette['primary']
    red: Palette['primary']
    secondary: Palette['primary']
  }

  interface PaletteOptions {
    gray?: PaletteOptions['primary']
    red?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    gray: true
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    red: true,
    gray: true,
    secondary: true
  }
}

const theme = createTheme({
  palette: {
    gray: {
      main: 'rgba(246, 246, 246, 1)',
    },
    red: {
      main: commonStyle.colors.red,
    },
    secondary: {
      main: commonStyle.colors.grey500,
    }
  },
})

export function Registration() {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<IFormInput>()

  const [passwordsNotEqual, setPasswordsNotEqual] = useState(false)

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const registrationError = useSelector((state: IStore) => state.auth.registerServerError)

  const appTheme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  const onSubmit = async (data: IFormInput) => {
    if(passwordsNotEqual) {
      return
    }

    dispatch(registerThunk({
      name: data.name,
      email: data.email,
      phoneNumber: `${data.phoneNumber}`,
      password: data.password,
    }))
  }

  //Проверка совпадения паролей при клике на кнопку "Продолжить"
  const handelClick = () => {
    const password1 = getValues('password')
    const password2 = getValues('confirmPassword')

    if (password1 !== password2) {
      setPasswordsNotEqual(true)
      return
    } else {
      setPasswordsNotEqual(false)
    }
  }

  return (
    <ThemeProvider theme={appTheme}>
      <ThemeProviderMui theme={theme}>
        <StyledRegistration $active={true}>
          <h2>Регистрация</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='inputs-container'>
              <Box className='input-container'>
                <TextField
                  className={`input-name input ${errors.name && 'input-error'}`}
                  type='text'
                  placeholder='Имя'
                  color='primary'
                  autoComplete='off'
                  {...register('name', { required: true, maxLength: 100 })}
                />
              </Box>
              <AuthError validationErrors={errors.name} field='name' />

              <Box className='input-container'>
                <TextField
                  className={`input-email input ${errors.email && 'input-error'}`}
                  type='email'
                  placeholder='Email'
                  color='primary'
                  autoComplete='off'
                  {...register('email', { required: true, maxLength: 100 })}
                />
              </Box>
              <AuthError validationErrors={errors.email} field='email' />

              <Box className="input-container">
                <TextField
                  className={`input-password input ${errors.password && 'input-error'}`}
                  type='password'
                  placeholder='Пароль'
                  color='primary'
                  autoComplete='off'
                  {...register('password', {
                    pattern: /^(?=.*[A-Z])(?=.*[ !"#$%&'()*+,-./:;<=>?@^_`{|}~])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
                    required: true,
                    minLength: 8,
                    maxLength: 64
                  })}
                />
              </Box>
              <AuthError validationErrors={errors.password} field='password' />

              <Box className="input-container">
                <TextField
                  className={`input-confirm-password input ${errors.confirmPassword && 'input-error'}`}
                  type='password'
                  placeholder='Пароль ещё раз'
                  color='primary'
                  autoComplete='off'
                  {...register('confirmPassword', {
                    pattern: /^(?=.*[A-Z])(?=.*[ !"#$%&'()*+,-./:;<=>?@^_`{|}~])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
                    required: true,
                    minLength: 8,
                    maxLength: 64
                  })}
                />
              </Box>
              <AuthError validationErrors={errors.confirmPassword} dataErrors={passwordsNotEqual} field='confirmPassword' />

              <Box className='input-container'>
                <TextField
                  className={`input-phone-number input ${errors.phoneNumber && 'input-error'}`}
                  type='number'
                  placeholder='Телефон'
                  color='primary'
                  autoComplete='off'
                  {...register('phoneNumber', { required: true })}
                />
              </Box>
              <AuthError validationErrors={errors.phoneNumber} field='phoneNumber' />

              <div className={`checkbox ${errors.agreeWithLicense && 'checkbox-error'}`}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color='gray'
                      icon={<Icons name='empty-block-bold' color='secondary' size="24" className="icon" />}
                      checkedIcon={<CheckIcon color='red' />}
                      defaultChecked
                      {...register('agreeWithLicense', { required: true, value: false })}
                    />}
                  label='Согласен с'
                />
                <p className='action-text'>условиями пользования</p>
              </div>
            </div>

            {registrationError && registrationError.code === 1000 && <AuthError field='registration'/>}

            <Button className='enter-button' variant='contained' type='submit' onClick={handelClick}>
              Продолжить
            </Button>
          </form>
        </StyledRegistration>
      </ThemeProviderMui>
    </ThemeProvider>
  )
}
