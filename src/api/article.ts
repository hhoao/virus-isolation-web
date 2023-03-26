import { defHttp } from '/@/utils/http/axios';
import {
  BaseArticleModel,
  DetailArticleModel,
  DetailArticleModelPageParams,
  SearchArticleModel,
  SearchArticlePageParams,
} from '/@/api/model/DetailArticleModel';
import { BasicFetchPageResult } from '/@/api/model/BaseModel';
import { ArticleApi } from '/@/api/enum/ArticleApi';

export const getBaseArticlePageListApi = (
  params: DetailArticleModelPageParams = { pageNum: 1, pageSize: 5 },
) =>
  defHttp.get<BasicFetchPageResult<BaseArticleModel>>({
    url: ArticleApi.GET_ARTICLE_PAGE_LIST,
    params: params ? Object.assign(params, { base: true }) : { base: true },
  });

export const getDetailsArticles = (
  params: DetailArticleModelPageParams = { pageNum: 1, pageSize: 5 },
) =>
  defHttp.get<BasicFetchPageResult<DetailArticleModel>>({
    url: ArticleApi.GET_ARTICLE_PAGE_LIST,
    params: params ? Object.assign(params, { base: false }) : { base: false },
  });

export const searchArticle = (params: SearchArticlePageParams) =>
  defHttp.get<BasicFetchPageResult<SearchArticleModel>>({
    url: ArticleApi.SEARCH_ARTICLE,
    params: params,
  });
