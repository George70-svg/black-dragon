export type ItemButtonsProps = {
  onExpandClick?: () => void
  onDeleteClick?: () => void
  isExpanded?: boolean
  canDelete?: boolean
  canCover?: boolean
  itemId: string
  disabled: boolean
}
