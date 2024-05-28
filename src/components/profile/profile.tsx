import { useSelector } from 'react-redux'
import { IStore, useAppDispatch } from '@store/store'
import { ThemeProvider } from 'styled-components'
import { Button } from '@mui/material'
import { StyledProfile } from '@components/profile/styles/profile.styled'
import { logoutThunk } from '@store/auth'
import { ProfileProps } from '@components/profile/types/types'

import { commonStyle } from '../../styles'

export function Profile(props: ProfileProps) {
  const dispatch = useAppDispatch()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const user = useSelector((state: IStore) => state.auth.user)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  const handleClick = () => {
    dispatch(logoutThunk())
    props.onClose()
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledProfile>
        <h2>Профиль</h2>

        <div className="info-container">
          <div className="name info">
            <p className="head">Имя: </p>
            <p className="text">{user?.name}</p>
          </div>

          <div className="email info">
            <p className="head">Почта: </p>
            <p className="text">{user?.email}</p>
          </div>

          <div className="phone-number info">
            <p className="head">Телефон: </p>
            <p className="text">{user?.phoneNumber}</p>
          </div>
        </div>

        <Button
          className="logout-button"
          variant="contained"
          onClick={handleClick}
        >
          Выйти
        </Button>
      </StyledProfile>
    </ThemeProvider>
  )
}
