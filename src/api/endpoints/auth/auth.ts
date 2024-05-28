import { axiosInstance } from '@endpoints/axios'
import { LoginData, RegisterData, WhoamiUser } from '@endpoints/endpoints/auth/types'

export const auth = {
  async register(registerData: RegisterData): Promise<void> {
    return axiosInstance.post(
      '/user/register',
      {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
        phoneNumber: registerData.phoneNumber
      }
    )
  },
  async login(loginData: LoginData): Promise<void> {
    const data = new FormData()
    data.append('username', loginData.userName)
    data.append('password', loginData.password)

    return axiosInstance.post(
      '/user/login',
      data
    )
  },
  async logout(): Promise<void> {
    return axiosInstance.delete('/user/logout',)
  },
  async whoami(): Promise<WhoamiUser> {
    return axiosInstance.get('/user/whoami')
      .then(data => {
        console.log(data)
        return data.data
      })
  },
}
