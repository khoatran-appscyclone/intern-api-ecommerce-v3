enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class SortDto<T> {
  sortBy: T;
  sortDir: SortDirection;
}
