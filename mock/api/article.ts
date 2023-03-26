import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';
import { detailsArticleList, simplerArticleList } from '../data/article';
import { ArticleApi } from '/@/api/enum/ArticleApi';

export default [
  {
    url: ArticleApi.GET_ARTICLE_PAGE_LIST,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 8, base = false } = query;
      if (pageSize == 0) {
        if (base == 'false' || !base) {
          return resultSuccess(detailsArticleList);
        } else {
          return resultSuccess(simplerArticleList);
        }
      } else {
        if (base == 'false' || !base) {
          return resultPageSuccess(page, pageSize, detailsArticleList);
        } else {
          return resultPageSuccess(page, pageSize, simplerArticleList);
        }
      }
    },
  },
] as MockMethod[];
