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
import { setAuthViewThunk } from '@store/auth'
// @ts-ignore
import { Routers } from '@types/routers'

import { commonStyle } from '../../../../../../styles'

export function MenuButtons() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const productCartNumber = useSelector((state: IStore) => state.cart.itemCartNumber)

  const setRouter = (routerName: Routers) => {
    navigate(routerName)
  }

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)

    setTimeout(() => {
      dispatch(setAuthViewThunk('login'))
    }, 300)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledMenuButtons>
        <Button
          variant="text"
          className='loginButton'
          onClick={handleOpen}
        >
          Войти
        </Button>

        <div className="button-container">
          <Icons name="profile" color="#fff" size="24" className="icon" />
          <p>Профиль</p>
        </div>

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
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='registration-modal'
        >
          <div className='modal-content'>
            <Authorization onClose={handleClose}/>
          </div>
        </Modal>
      </StyledMenuButtons>
    </ThemeProvider>
  )
}
