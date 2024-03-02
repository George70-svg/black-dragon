import { ProductFilters } from '@endpoints/endpoints/products/types'

export type SelectorOption = {
  value: string
  name: string
}

export interface TSelectorProps {
  filterName: keyof ProductFilters,
  iconName: string,
  options: SelectorOption[],
  initialValue: string
  onChange: (name: keyof ProductFilters, value: string) => void
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
