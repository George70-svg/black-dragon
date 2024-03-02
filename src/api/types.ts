export type PaginationResult<T> = {
  pageSize: number,
  pageZeroNumber: number
  resource: T,
  totalResourceCount: number,
}
