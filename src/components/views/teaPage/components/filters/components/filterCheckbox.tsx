import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Checkbox, FormControlLabel } from '@mui/material'
import { createTheme, ThemeProvider as ThemeProviderMui } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check'
import Icons from '@icons/icons'
import { IStore } from '@store/store'
import { FilterCheckboxProps } from '@components/views/teaPage/components/filters/types/types'
import { StyledFilterCheckbox } from '@components/views/teaPage/components/filters/styles/filterCheckboxes.styled'

import { commonStyle } from '../../../../../../styles'

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

export function FilterCheckbox(props: FilterCheckboxProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const appTheme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(props.filterName, event.target.checked)
  }

  return (
    <ThemeProvider theme={appTheme}>
      <ThemeProviderMui theme={theme}>
        <StyledFilterCheckbox $active={!!props.initialValue}>
          <FormControlLabel
            control={
              <Checkbox
                checked={ props.initialValue ? props.initialValue : false }
                color='gray'
                icon={<Icons name='empty-block' color='secondary' size="24" className="icon" />}
                checkedIcon={<CheckIcon color='red' />}
                onChange={handleChange}
                disabled={props.isDisabled}
              />
            }
            label={props.label} />
        </StyledFilterCheckbox>
      </ThemeProviderMui>
    </ThemeProvider>
  )
}
