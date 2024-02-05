import { createSlice } from '@reduxjs/toolkit'

type ColorTheme = 'darkTheme' | 'lightTheme'

export interface IColorThemeState {
  colorTheme: ColorTheme
}

const initialState: IColorThemeState = {
  colorTheme: (localStorage.getItem('theme_color') as ColorTheme) || 'darkTheme',
}

export const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.colorTheme = state.colorTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme'
      localStorage.setItem('theme_color', state.colorTheme)
    },
  },
})

export const { changeTheme } = colorThemeSlice.actions

export default colorThemeSlice.reducer
