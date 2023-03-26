export interface BasicPageParams {
  pageNum?: number;
  pageSize?: number;
  totalPage?: number;
  total?: number | string;
}

export interface BasicFetchPageResult<T> {
  list: T[];
  pageNum: number;
  pageSize: number;
  totalPage?: number;
  total?: number;
}
