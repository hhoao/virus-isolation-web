import { defHttp } from '/@/utils/http/axios';

import {
  AccountListGetResultModel,
  AccountPageParams,
  AccountParams,
} from '/@/api/model/AccountModel';
import { GetUserInfoModel, LoginParams, LoginResultModel } from '/@/api/model/UserModel';
import { ErrorMessageMode, PathVariables } from '/#/axios';
import { AccountApi } from '/@/api/enum/AccountApi';

export const getAccountInfo = () => defHttp.get<GetUserInfoModel>({ url: AccountApi.ACCOUNT_INFO });

export const getAccountPageList = (params: AccountPageParams) =>
  defHttp.get<AccountListGetResultModel>({ url: AccountApi.AccountPageList, params });

export const getAccountList = (params: AccountParams) => {
  return getAccountPageList({
    pageNum: 1,
    pageSize: 0,
    ...params,
  });
};

export const isAccountExist = (username: string) =>
  defHttp.get(
    { url: AccountApi.AccountPageList, params: { username } },
    { errorMessageMode: 'none' },
  );

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

export function deleteAccount(pathVariables: PathVariables) {
  return defHttp.delete({ url: AccountApi.DELETE_ACCOUNT }, { pathVariables });
}
export function updateAccount(pathVariables: PathVariables, params?: AccountParams) {
  return defHttp.put({ url: AccountApi.UPDATE_ACCOUNT, params }, { pathVariables });
}
export function addAccount(params?: AccountParams) {
  return defHttp.put({ url: AccountApi.UPDATE_ACCOUNT, params });
}

export function doLogout() {
  return defHttp.delete({ url: AccountApi.Logout });
}
