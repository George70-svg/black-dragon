import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { IStore } from '@store/store'
import { StyledTSelector } from '@components/views/teaPage/components/filters/styles/tSelector.styled'
import { TSelectorProps } from '@components/views/teaPage/components/filters/types/types'
import Icons from '@icons/icons'

import { commonStyle } from '../../../../../../styles'

export function TSelector(props: TSelectorProps) {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  const theme = {
    color: commonStyle[colorTheme].color,
    secondColor: commonStyle[colorTheme].secondColor,
  }

  const [option, setOption] = React.useState<string | null>(props.initialValue)
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    const currentOption = props.options.find(item => item.value === props.initialValue)?.value

    if(currentOption) {
      setOption(currentOption)
    }
  }, [ props.initialValue ])

  const handleChange = (event: SelectChangeEvent<typeof option>) => {
    const selectItem = props.options.find(item => item.value === event.target.value)

    if(selectItem) {
      props.onChange(props.filterName, selectItem.value)
      setOption(selectItem.value)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledTSelector>
        <button className={`selector ${props.isDisabled ? 'selector-disabled' : ''}`} onClick={handleOpen} disabled={props.isDisabled}>
          {props.iconName ?
            <Icons name={props.iconName} color="#fff" size="20" className="icon" /> :
            null
          }

          <p>{props.options.find(item => item.value === option)?.name}</p>

          {open && !props.isDisabled &&
            <Icons name="arrow-up-grey" color="#fff" size="20" className="icon" />
          }

          {!open && !props.isDisabled &&
            <Icons name="arrow-down-grey" color="#fff" size="20" className="icon" />
          }
        </button>

        <FormControl>
          <Select
            id="open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={option}
            onChange={handleChange}
          >
            {props.options.map(item => (
              <MenuItem value={item.value} key={item.name}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </StyledTSelector>
    </ThemeProvider>
  )
}
