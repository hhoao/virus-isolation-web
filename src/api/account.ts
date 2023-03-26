import { defHttp } from '/@/utils/http/axios';

import { GetUserInfoModel, LoginParams, LoginResultModel } from '/@/api/model/AcountModel';
import { ErrorMessageMode } from '/#/axios';
import { AccountApi } from '/@/api/enum/AccountApi';

export const getAccountInfo = () => defHttp.get<GetUserInfoModel>({ url: AccountApi.ACCOUNT_INFO });

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
