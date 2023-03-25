import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';
import { positionList } from '../data/position';
import { PositionApi } from '/@/api/enum/PositionApi';

export default [
  {
    url: PositionApi.GET_POSITION_PAGE_LIST,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      if (pageSize == 0) {
        return resultSuccess(positionList);
      }
      return resultPageSuccess(page, pageSize, positionList);
    },
  },
  {
    url: PositionApi.ADD_POSITION,
    timeout: 500,
    method: 'post',
    response: ({ query }) => {
      const { id, status } = query;
      return resultSuccess({ id, status });
    },
  },
  {
    url: PositionApi.DELETE_POSITION,
    timeout: 100,
    method: 'delete',
    response: () => {
      return resultSuccess();
    },
  },
  {
    url: PositionApi.UPDATE_POSITION,
    timeout: 100,
    method: 'put',
    response: () => {
      return resultSuccess();
    },
  },
] as MockMethod[];
