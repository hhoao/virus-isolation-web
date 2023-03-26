import { BasicPageParams } from '/@/api/model/BaseModel';

export interface DetailArticleModel extends BaseArticleModel {
  content: string;
}
export interface SearchArticleModel {
  id: string;
  title: string;
  digest: string;
}
export interface BaseArticleParam {
  id?: string;
  title?: string;
  author?: string;
  type?: string;
  level?: number;
  visible?: boolean;
}

export interface SearchArticlePageParams extends BasicPageParams {
  queryInfo: string;
}
export type DetailArticleModelPageParams = BaseArticleParam & BasicPageParams;

export interface BaseArticleModel {
  id?: string;
  title?: string;
  author?: string;
  digest?: string;
  type?: string;
  top?: boolean;
  level?: number;
  visible?: boolean;
  cover?: string;
  lastModification?: string;
  readingAmount?: number;
}
