import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ThemeProvider } from 'styled-components'
import { createTheme, ThemeProvider as ThemeProviderMui } from '@mui/material/styles'
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { IStore, useAppDispatch } from '@store/store'
import { setAuthViewThunk } from '@store/auth'
import Icons from '@icons/icons'
import { StyledRegistration } from '@components/authorization/components/registration/styles/registration.styled'

import { commonStyle } from '../../../../styles'

interface IFormInput {
  name: string
  email: string
  password: string
  confirmPassword: string
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
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const appTheme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  const onSubmit = async (data: IFormInput) => {
    const user: IFormInput = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      agreeWithLicense: data.agreeWithLicense
    }

    dispatch(setAuthViewThunk('done'))
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
                  className={`input-email input ${errors.email && 'input-error'}`}
                  type='text'
                  placeholder='Email'
                  color='primary'
                  autoComplete='off'
                  {...register('email', { required: true })}
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

              <Box className="input-container">
                <TextField
                  className={`input-confirm-password input ${errors.confirmPassword && 'input-error'}`}
                  type='password'
                  placeholder='Пароль ещё раз'
                  color='primary'
                  autoComplete='off'
                  {...register('confirmPassword', { required: true })}
                />
              </Box>

              <Box className='input-container'>
                <TextField
                  className={`input-name input ${errors.name && 'input-error'}`}
                  type='number'
                  placeholder='Телефон (необязательно)'
                  color='primary'
                  autoComplete='off'
                  {...register('name', { required: true })}
                />
              </Box>

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

            <Button className='enter-button' variant='contained' type='submit'>
              Продолжить
            </Button>
          </form>
        </StyledRegistration>
      </ThemeProviderMui>
    </ThemeProvider>
  )
}
