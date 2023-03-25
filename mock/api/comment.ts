import type { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';
import { commentList } from '../data/comment';
import { CommentApi } from '/@/api/enum/CommentApi';

export default [
  {
    url: CommentApi.GET_COMMENT_PAGE_LIST,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 8 } = query;
      if (pageSize == 0) {
        return resultSuccess(commentList);
      }
      return resultPageSuccess(page, pageSize, commentList);
    },
  },
  {
    url: CommentApi.DELETE_COMMENT,
    timeout: 100,
    method: 'delete',
    response: ({ query }) => {
      const { page = 1, pageSize = 8 } = query;
      if (pageSize == 0) {
        return resultSuccess(commentList);
      }
      return resultPageSuccess(page, pageSize, commentList);
    },
  },
  {
    url: CommentApi.UPDATE_COMMENT,
    timeout: 100,
    method: 'put',
    response: ({ query }) => {
      const { page = 1, pageSize = 8 } = query;
      if (pageSize == 0) {
        return resultSuccess(commentList);
      }
      return resultPageSuccess(page, pageSize, commentList);
    },
  },
  {
    url: CommentApi.ADD_COMMENT,
    timeout: 100,
    method: 'post',
    response: ({ query }) => {
      const { page = 1, pageSize = 8 } = query;
      if (pageSize == 0) {
        return resultSuccess(commentList);
      }
      return resultPageSuccess(page, pageSize, commentList);
    },
  },
] as MockMethod[];
