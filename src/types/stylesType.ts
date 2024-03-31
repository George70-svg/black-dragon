type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
type HSL = `hsl(${string})`
type HSLA = `hsla(${string})`

type Color = RGB | RGBA | HEX | HSL | HSLA

type Colors = {
  white: Color
  whiteOpacity: Color
  blue: Color
  lightBlue: Color
  darkBlue: Color
  yellow: Color
  darkYellow: Color
  red: Color
  green: Color
  purple: Color
  darkPurple: Color
  grey100: Color
  grey200: Color
  grey300: Color
  grey400: Color
  grey500: Color
  grey600: Color
  grey700: Color
  grey800: Color
  grey900: Color
  grey189: Color
  grey224: Color
  grey246: Color
  black: Color
}

type Fonts = {
  fs12: string
  fs14: string
  fs16: string
  fs20: string
  fs21: string
  fs28: string
}

type FontStyles = {
  fw500: string
  fw600: string
}

type Shadows = {
  primaryShadow: string
  smallShadow: string
  secondaryShadow: string
  halfHorShadow: string
}

type Radii = {
  radius8: string
  fullRadius: string
}

type Times = {
  time1: string
  time2: string
  time3: string
  time4: string
  time5: string
}

type Theme = {
  color: Color
  secondColor: Color
  tertiaryColor: Color
  backgroundColor: Color
  backgroundGradient: string
}

export type CommonStyle = {
  colors: Colors
  fonts: Fonts
  fontStyles: FontStyles
  shadows: Shadows
  radii: Radii
  times: Times
  darkTheme: Theme
  lightTheme: Theme
}

export type ColorThemeProps = {
  colorTheme: 'darkTheme' | 'lightTheme'
}
