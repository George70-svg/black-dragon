import { useSelector } from 'react-redux'
import { IStore } from '@store/store'
import { ThemeProvider } from 'styled-components'
import { StyledAuthorization } from '@components/authorization/styles/authorization.styled'
import { AuthorizationProps } from '@components/authorization/types/types'
import { Login } from '@components/authorization/components/login/login'
import { Registration } from '@components/authorization/components/registration/registration'
import { Done } from '@components/authorization/components/done/done'

import { commonStyle } from '../../styles'
import { useEffect } from 'react'

export function Authorization(props: AuthorizationProps) {
  const authView = useSelector((state: IStore) => state.auth.authView)
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor
  }

  useEffect(() => {
    if(!authView) {
      props.onClose()
    }
  }, [authView])

  return (
    <ThemeProvider theme={theme}>
      <StyledAuthorization>
        {authView === 'login' &&
          <Login />
        }

        {authView === 'registration' &&
          <Registration />
        }

        {authView === 'done' &&
          <Done onClose={props.onClose}/>
        }
      </StyledAuthorization>
    </ThemeProvider>
  )
}
