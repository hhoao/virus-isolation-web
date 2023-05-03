import { defHttp } from '/@/utils/http/axios';

import { LoginParams, LoginResultModel, UserInfo } from '/@/api/model/AcountModel';
import { ErrorMessageMode, PathVariables } from '/#/axios';
import { AccountApi } from '/@/api/enum/AccountApi';
import {
  OrganizationCommunicationMessagePageParam,
  OrganizationModel,
  OrganizationParam,
} from '/@/api/model/OrganizationModel';
import { BasicFetchPageResult } from '/@/api/model/BaseModel';
import { OrganizationApi } from '/@/api/enum/OrganizationApi';

export const getAccountInfo = () => defHttp.get<UserInfo>({ url: AccountApi.ACCOUNT_INFO });

export const getJoinedOrganizationsMessages = (
  params: OrganizationCommunicationMessagePageParam = { pageNum: 1, pageSize: 5 },
) =>
  defHttp.get<BasicFetchPageResult<OrganizationJoinMessageModel>>({
    url: OrganizationApi.GET_JOINED_ORGANIZATIONS_MESSAGES_PAGE_LIST,
    params,
  });
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
