import { BasicPageParams } from '/@/api/model/BaseModel';

export interface ArticleCommentModel {
  id: number;
  author: string;
  content: string;
  lastModification: Date;
}
export interface ArticleCommentModelParams {
  id?: number;
  author?: string;
}

export type ArticleCommentPageModelParams = ArticleCommentModelParams & BasicPageParams;
