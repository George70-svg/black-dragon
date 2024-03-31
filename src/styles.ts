import { createGlobalStyle } from 'styled-components'
// @ts-ignore
import { ColorThemeProps, CommonStyle } from '@types/stylesType'

export const Styles = createGlobalStyle<ColorThemeProps>`
    * {
        box-sizing: border-box;
    }

    body {
        box-sizing: border-box;
        height: 100vh;
        width: 100vw;
        margin: 0;
        background: ${(props) => commonStyle[props.colorTheme].backgroundColor};
        color: ${(props) => commonStyle[props.colorTheme].color};
        font-size: ${() => commonStyle.fonts.fs12};
        font-weight: ${() => commonStyle.fontStyles.fw500};
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

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .scroll-bar-hide {
        &::-webkit-scrollbar {
            width: 0;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: #aaa;
        }
    }
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
    red: 'rgba(183, 10, 6, 1)',
    green: '#7DD76F',
    purple: '#ca8eba',
    darkPurple: '#191c29',
    grey100: '#f5f5f5',
    grey200: '#ededed',
    grey300: '#e0e0e0',
    grey400: '#bdbdbd',
    grey500: '#9e9e9e',
    grey600: '#8f8f8f',
    grey700: '#616161',
    grey800: '#424242',
    grey900: '#212121',
    grey189: 'rgba(189, 189, 189, 1)',
    grey224: 'rgba(224, 224, 224, 1)',
    grey246: 'rgba(246, 246, 246, 1)',
    black: '#000000',
  },
  fonts: {
    fs12: '0.75rem',
    fs14: '0.875rem',
    fs16: '1rem',
    fs20: '1.25rem',
    fs21: '1.3rem',
    fs28: '1.75rem',
  },
  fontStyles: {
    fw500: '500',
    fw600: '600',
  },
  shadows: {
    primaryShadow: '0 0 24px 0 rgba(0, 0, 0, 0.1)',
    smallShadow: '0 0 4px 0 rgba(0 , 0, 0, 25%)',
    secondaryShadow: '0 0 20px 0 rgba(0 , 0, 0, 25%)',
    halfHorShadow: '4px 0 20px 0 rgba(0 , 0, 0, 25%)',
  },
  radii: {
    radius8: '0.5rem',
    fullRadius: '100%',
  },
  times: {
    time1: '0.1s',
    time2: '0.2s',
    time3: '0.3s',
    time4: '0.4s',
    time5: '0.5s',
  },
  darkTheme: {
    color: '#ffffff',
    secondColor: '#cbcbcb',
    backgroundColor: '#191c29',
    tertiaryColor: '#1e1e1e54',
    backgroundGradient: 'linear-gradient(-10deg, rgba(33,33,33,1) 25%, rgba(64,72,94,1) 75%)',
  },
  lightTheme: {
    color: 'rgba(30, 30, 30, 1)',
    secondColor: 'rgba(30, 30, 30, 0.5)',
    tertiaryColor: '#1e1e1e54',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    backgroundGradient: 'linear-gradient(150deg, rgba(56,93,166,1) 47%, rgba(202,142,186,1) 93%)',
  },
}
