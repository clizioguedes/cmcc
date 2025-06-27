export type Meta = {
  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}

export type Paginated<T> = {
  data: Array<T>
  meta: Meta
}
