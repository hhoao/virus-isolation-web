import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';
import { roleList } from '../data/role';
import { RoleApi } from '/@/api/enum/RoleApi';

export default [
  {
    url: RoleApi.RolePageList,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      if (pageSize == 0) {
        return resultSuccess(roleList);
      }
      return resultPageSuccess(page, pageSize, roleList);
    },
  },
  {
    url: RoleApi.AddRole,
    timeout: 500,
    method: 'post',
    response: ({ query }) => {
      const { id, status } = query;
      return resultSuccess({ id, status });
    },
  },
  {
    url: RoleApi.UpdateRole,
    timeout: 500,
    method: 'put',
    response: ({ query }) => {
      const { id, status } = query;
      return resultSuccess({ id, status });
    },
  },
  {
    url: RoleApi.DeleteRole,
    timeout: 500,
    method: 'delete',
    response: ({ query }) => {
      const { id, status } = query;
      return resultSuccess({ id, status });
    },
  },
] as MockMethod[];
