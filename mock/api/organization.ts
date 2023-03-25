import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';
import { organizationList } from '../data/organization';
import { OrganizationApi } from '/@/api/enum/OrganizationApi';
import { organizationAccountList } from '../data/user';

export default [
  {
    url: OrganizationApi.GET_ORGANIZATION_PAGE_LIST,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      if (pageSize == 0) {
        return resultSuccess(organizationList);
      }
      return resultPageSuccess(page, pageSize, organizationList);
    },
  },
  {
    url: OrganizationApi.ADD_ORGANIZATION,
    timeout: 500,
    method: 'post',
    response: ({ query }) => {
      const { id, status } = query;
      return resultSuccess({ id, status });
    },
  },
  {
    url: OrganizationApi.DELETE_ORGANIZATION,
    timeout: 100,
    method: 'delete',
    response: () => {
      return resultSuccess();
    },
  },
  {
    url: OrganizationApi.UPDATE_ORGANIZATION,
    timeout: 100,
    method: 'put',
    response: () => {
      return resultSuccess();
    },
  },
  {
    url: OrganizationApi.GET_ORGANIZATION_ACCOUNTS_PAGE_LIST,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      if (pageSize == 0) {
        return resultSuccess(organizationAccountList);
      }
      return resultPageSuccess(page, pageSize, organizationAccountList);
    },
  },
  {
    url: OrganizationApi.DELETE_ORGANIZATION_ACCOUNT_BY_USER_ID,
    timeout: 100,
    method: 'delete',
    response: () => {
      return resultSuccess();
    },
  },
  {
    url: OrganizationApi.UPDATE_ORGANIZATION_ACCOUNT_POSITION,
    timeout: 100,
    method: 'patch',
    response: () => {
      return resultSuccess();
    },
  },
] as MockMethod[];
