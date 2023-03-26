import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';
import { tagList } from '../data/tag';
import { TagApi } from '/@/api/enum/TagApi';

export default [
  {
    url: TagApi.GET_TAG_LIST,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 8 } = query;
      if (pageSize == 0) {
        return resultSuccess(tagList);
      }
      return resultPageSuccess(page, pageSize, tagList);
    },
  },
] as MockMethod[];
