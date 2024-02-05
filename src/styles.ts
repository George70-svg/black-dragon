import { createGlobalStyle } from 'styled-components'
// @ts-ignore
import { ColorThemeProps, CommonStyle } from '@types/stylesType'

export const Styles = createGlobalStyle<ColorThemeProps>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

  * {
    box-sizing: border-box;
  }
  
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    background: ${(props) => commonStyle[props.colorTheme].backgroundGradient};
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: ${() => commonStyle.fonts.fs2};
  }
  
  #root {
    height: 100%;
    width: 100%;
  }
  
  a {
    text-decoration: none;
    color: ${() => commonStyle.colors.white};
  }
  
  h1, h2, h3 {
    margin: 0;
  }
  
  p {
    margin: 0;
  }

  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  
  .login-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .scroll-bar {
    ::-webkit-scrollbar {
      width: 7px;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background-color: #aaa;
    }
  }
  
  :root {}
`

export const commonStyle: CommonStyle = {
  colors: {
    white: '#ffffff',
    whiteOpacity: 'rgba(255, 255, 255, 0.95)',
    blue: '#1976d2',
    lightBlue: '#42a5f5',
    darkBlue: '#1565c0',
    yellow: '#F8D96D',
    darkYellow: '#efbe00',
    red: '#ED3D3D',
    green: '#7DD76F',
    purple: '#ca8eba',
    darkPurple: '#191c29',
    grey100: '#f5f5f5',
    grey200: '#ededed',
    grey300: '#e0e0e0',
    grey400: '#bdbdbd',
    grey500: '#9e9e9e',
    grey600: '#757575',
    grey700: '#616161',
    grey800: '#424242',
    grey900: '#212121',
    black: '#000000',
  },
  fonts: {
    fs0: '0.75rem',
    fs1: '1rem',
    fs2: '1.2rem',
    fs3: '1.4rem',
    fs4: '1.6rem',
    fs5: '1.8rem',
    fs6: '2rem',
    fs7: '2.2rem',
    fs8: '2.4rem',
  },
  shadows: {
    primaryShadow: '0 4px 10px 0 rgba(0 , 0, 0, 25%)',
    smallShadow: '0 0 4px 0 rgba(0 , 0, 0, 25%)',
    secondaryShadow: '0 0 20px 0 rgba(0 , 0, 0, 25%)',
    halfHorShadow: '4px 0 20px 0 rgba(0 , 0, 0, 25%)',
  },
  radii: {
    radius1: '0.8rem',
    radius2: '1rem',
    radius3: '1.5rem',
    radius4: '2rem',
    radius5: '2.5rem',
    radius6: '3rem',
    radius7: '3.5rem',
    radius8: '4rem',
    radiusFull: '100%',
  },
  times: {
    time1: '0.1',
    time2: '0.2',
    time3: '0.3',
    time4: '0.4',
    time5: '0.5',
  },
  darkTheme: {
    color: '#ffffff',
    backgroundColor: '#191c29',
    backgroundGradient: 'linear-gradient(-10deg, rgba(33,33,33,1) 25%, rgba(64,72,94,1) 75%)',
    widgetBackground: 'rgba(79, 83, 115, 0.5)',
    widgetBackgroundHover: 'rgba(79, 83, 115, 1)',
  },
  lightTheme: {
    color: '#000000',
    backgroundColor: '#ededed',
    backgroundGradient: 'linear-gradient(150deg, rgba(56,93,166,1) 47%, rgba(202,142,186,1) 93%)',
    widgetBackground: 'rgba(118, 127, 161, 0.5)',
    widgetBackgroundHover: 'rgba(104, 112, 143, 1)',
  },
}
