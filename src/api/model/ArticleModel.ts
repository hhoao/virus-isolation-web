import { BasicPageParams } from '/@/api/model/BaseModel';

export interface ArticleModel extends BaseArticleModel {
  content: string;
}
export interface ArticleParam {
  id?: string;
  title?: string;
  author?: string;
  type?: string;
  level?: number;
  visible?: boolean;
}
export type ArticlePageParams = ArticleParam & BasicPageParams;

export interface BaseArticleModel {
  id?: string;
  title: string;
  author: string;
  digest: string;
  type: string;
  top: boolean;
  level: number;
  visible: boolean;
  cover?: string;
  lastModification?: string;
  readingAmount?: number;
}
