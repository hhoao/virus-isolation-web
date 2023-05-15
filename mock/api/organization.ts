import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';
import { OrganizationApi } from '/@/api/enum/OrganizationApi';
import { organizationAccountList } from '../data/account';
import {
  organizationAccountSignInStatusList,
  organizationInvitationList,
  organizationMessageList,
} from '../data/organization';

export default [
  {
    url: OrganizationApi.INVITE_ACCOUNT,
    timeout: 100,
    method: 'post',
    response: () => {
      return resultSuccess();
    },
  },
  {
    url: OrganizationApi.CANCEL_INVITATION,
    timeout: 100,
    method: 'delete',
    response: () => {
      return resultSuccess();
    },
  },
  {
    url: OrganizationApi.GET_INVITE_RECORD,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      if (pageSize == 0) {
        return resultSuccess(organizationInvitationList);
      }
      return resultPageSuccess(page, pageSize, organizationInvitationList);
    },
  },
  {
    url: OrganizationApi.GET_JOINED_ORGANIZATION_MESSAGES_PAGE_LIST,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      if (pageSize == 0) {
        return resultSuccess(organizationMessageList);
      }
      return resultPageSuccess(page, pageSize, organizationMessageList);
    },
  },
  {
    url: OrganizationApi.GET_ORGANIZATION_ACCOUNT_SIGN_IN_STATUS,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = organizationAccountSignInStatusList.length } = query;
      if (pageSize == 0) {
        return resultSuccess(organizationAccountSignInStatusList);
      }
      return resultPageSuccess(page, pageSize, organizationAccountSignInStatusList);
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
