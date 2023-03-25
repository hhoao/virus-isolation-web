import { BasicPageParams } from '/@/api/model/BaseModel';

export interface CommentModel {
  id: string;
  author: string;
  content: string;
  lastModification: Date;
}
export interface CommentParams {
  id?: string;
  author?: string;
}

export type CommentPageParams = CommentParams & BasicPageParams;
