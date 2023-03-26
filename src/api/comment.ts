import { defHttp } from '/@/utils/http/axios';
import { BasicFetchPageResult } from '/@/api/model/BaseModel';
import {
  ArticleCommentModel,
  ArticleCommentPageModelParams,
} from '/@/api/model/ArticleCommentModel';
import { CommentApi } from '/@/api/enum/CommentApi';

export const getArticleCommentListApi = (
  params: ArticleCommentPageModelParams = { pageNum: 1, pageSize: 5 },
) =>
  defHttp.get<BasicFetchPageResult<ArticleCommentModel>>({
    url: CommentApi.GET_COMMENT_PAGE_LIST,
    params,
  });
