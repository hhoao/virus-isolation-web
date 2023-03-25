import { defHttp } from '/@/utils/http/axios';

import { ArticlePageParams, ArticleParam } from '/@/api/model/ArticleModel';
import { ArticleApi } from '/@/api/enum/ArticleApi';
import { PathVariables } from '/#/axios';

export const getArticlePageListApi = (params: ArticlePageParams = { pageNum: 1, pageSize: 5 }) =>
  defHttp.get({ url: ArticleApi.GET_ARTICLE_PAGE_LIST, params });

export const addArticleApi = (params: ArticleParam) =>
  defHttp.post({ url: ArticleApi.ADD_ARTICLE, params });

export const updateArticleApi = (pathVariables: PathVariables, params?: ArticleParam) =>
  defHttp.put({ url: ArticleApi.UPDATE_ARTICLE, params }, { pathVariables });
export const deleteArticleApi = (pathVariables: PathVariables, params?: ArticleParam) =>
  defHttp.delete({ url: ArticleApi.DELETE_ARTICLE, params }, { pathVariables });
