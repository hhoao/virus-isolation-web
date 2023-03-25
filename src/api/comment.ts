import { defHttp } from '/@/utils/http/axios';
import { BasicFetchResult } from '/@/api/model/BaseModel';
import { CommentModel, CommentPageParams, CommentParams } from '/@/api/model/CommentModel';
import { CommentApi } from '/@/api/enum/CommentApi';
import { PathVariables } from '/#/axios';

export const getCommentPageListApi = (params: CommentPageParams = { pageNum: 1, pageSize: 5 }) =>
  defHttp.get<BasicFetchResult<CommentModel>>({ url: CommentApi.GET_COMMENT_PAGE_LIST, params });

export const addCommentApi = (params: CommentParams) =>
  defHttp.post({ url: CommentApi.ADD_COMMENT, params });

export const updateCommentApi = (pathVariables: PathVariables, params?: CommentParams) =>
  defHttp.put({ url: CommentApi.UPDATE_COMMENT, params }, { pathVariables });
export const deleteCommentApi = (pathVariables: PathVariables, params?: CommentParams) =>
  defHttp.delete({ url: CommentApi.DELETE_COMMENT, params }, { pathVariables });
