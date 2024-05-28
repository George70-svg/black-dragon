import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Modal } from '@mui/material'
import { IStore, useAppDispatch } from '@store/store'
import Icons from '@icons/icons'
import { StyledMenuButtons } from '@components/header/components/menu/components/menuButtons/styles/menuButtons.styled'
import { CartInfo } from '@components/header/components/menu/components/menuButtons/components/cartInfo/cartInfo'
import { Authorization } from '@components/authorization/authorization'
import { Profile } from '@components/profile/profile'
import { setAuthViewThunk } from '@store/auth'
// @ts-ignore
import { Routers } from '@types/routers'

import { commonStyle } from '../../../../../../styles'

export function MenuButtons() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const productCartNumber = useSelector((state: IStore) => Object.values(state.cart.items).length)
  const user = useSelector((state: IStore) => state.auth.user)

  const setRouter = (routerName: Routers) => {
    navigate(routerName)
  }

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const [authOpen, setAuthOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const handleLoginOpen = () => setAuthOpen(true)
  const handleProfileOpen = () => setProfileOpen(true)

  const handleLoginClose = () => {
    setAuthOpen(false)

    setTimeout(() => {
      dispatch(setAuthViewThunk('login'))
    }, 300)
  }

  const handleProfileClose = () => setProfileOpen(false)

  return (
    <ThemeProvider theme={theme}>
      <StyledMenuButtons>
        {!user && (
          <Button
          variant="text"
          className="login-button"
          onClick={handleLoginOpen}
          >
            Войти
          </Button>
        )}

        {user && (
          <button
              className="button-container profile-button"
              onClick={handleProfileOpen}
            >
            <Icons name="profile" color="#fff" size="24" className="icon" />
            <p>Профиль</p>
          </button>
        )}

        {/*<div className="button-container">
          <Icons name="heart" color="#fff" size="24" className="icon" />
          <p>Избранное</p>
        </div>*/}

        <div className="button-container" onClick={() => setRouter('cart')}>
          <Icons name="basket" color="#fff" size="24" className="icon" />
          <p>Корзина</p>
        </div>

        {!!productCartNumber &&
          <CartInfo showButton={false}/>
        }

        <Modal
          open={authOpen}
          onClose={handleLoginClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='registration-modal'
        >
          <div className='modal-content'>
            <Authorization onClose={handleLoginClose}/>
          </div>
        </Modal>

        <Modal
          open={profileOpen}
          onClose={handleProfileClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='profile-modal'
        >
          <div className='modal-content'>
            <Profile onClose={handleProfileClose}/>
          </div>
        </Modal>
      </StyledMenuButtons>
    </ThemeProvider>
  )
}
