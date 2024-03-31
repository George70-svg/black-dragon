import { ProductFilters, SelectorTypes } from '@endpoints/endpoints/products/types'

export type SelectorOption = {
  value: string
  name: string
}

export interface TSelectorProps {
  filterName: keyof ProductFilters | SelectorTypes,
  iconName: string | null,
  options: SelectorOption[],
  initialValue: string | null
  onChange: (name: string, value: string) => void
  isDisabled: boolean
}

export interface FilterCheckboxProps {
  filterName: keyof ProductFilters,
  label: string
  initialValue: boolean | null
  onChange: (name: keyof ProductFilters, value: boolean) => void
  isDisabled: boolean
}

export interface FilterInputProps {
  filterName: Array<keyof ProductFilters>,
  initialValue: (number | null)[]
  onChange: (name: keyof ProductFilters, value: number) => void
  isDisabled: boolean
}
