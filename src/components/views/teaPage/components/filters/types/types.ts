export type SelectorOption = {
  value: string
  name: string
}

export interface TSelectorProps {
  iconName: string,
  options: SelectorOption[],
}

export interface FilterCheckboxProps {
  label: string
}
