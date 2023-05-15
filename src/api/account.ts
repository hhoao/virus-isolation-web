import { defHttp } from '/@/utils/http/axios';

import { LoginParams, LoginResultModel, UserInfo } from '/@/api/model/AcountModel';
import { ErrorMessageMode, PathVariables } from '/#/axios';
import { AccountApi } from '/@/api/enum/AccountApi';
import { OrganizationModel, OrganizationParam } from '/@/api/model/OrganizationModel';
import { BasicFetchPageResult } from '/@/api/model/BaseModel';
import { OrganizationApi } from '/@/api/enum/OrganizationApi';
import { OrganizationJoinMessageModel } from '@/api/model/MessageModel';
import { OrganizationCommunicationPageMessageModel } from '/@/api/model/MessageModel';

export const getAccountInfo = () => defHttp.get<UserInfo>({ url: AccountApi.ACCOUNT_INFO });

export const getOrganizationSignInStatus = (pathVariables: PathVariables) =>
  defHttp.get<BasicFetchPageResult<OrganizationJoinMessageModel>>(
    {
      url: OrganizationApi.GET_ORGANIZATION_ACCOUNT_SIGN_IN_STATUS,
    },
    { pathVariables },
  );
export const getJoinedOrganizationMessages = (
  pathVariables: PathVariables,
  params: OrganizationCommunicationPageMessageModel = { pageNum: 1, pageSize: 20 },
) =>
  defHttp.get<BasicFetchPageResult<OrganizationJoinMessageModel>>(
    {
      url: OrganizationApi.GET_JOINED_ORGANIZATION_MESSAGES_PAGE_LIST,
      params,
    },
    { pathVariables },
  );
export const joinOrganization = (
  pathVariables: PathVariables,
  params: OrganizationJoinMessageModel,
) =>
  defHttp.get<OrganizationModel>({ url: AccountApi.JOIN_ORGANIZATION, params }, { pathVariables });

export const getAccountOrganizations = (accountId: PathVariables, params?: OrganizationParam) =>
  defHttp.get<OrganizationModel[]>(
    { url: AccountApi.GET_ACCOUNT_ORGANIZATIONS, params },
    { pathVariables: accountId },
  );

export const updateAccount = (params?: UserInfo) =>
  defHttp.get({ url: AccountApi.UPDATE_USER_INFO, params });

export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: AccountApi.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function doLogout() {
  return defHttp.delete({ url: AccountApi.Logout });
}
