import { BasicFetchPageResult, BasicPageParams } from '/@/api/model/BaseModel';
/**
 * @description: Login interface parameters
 */
import { UserInfo } from '/#/store';

export type AccountPageParams = BasicPageParams & AccountParams;

export type AccountParams = {
  account?: string;
  nickname?: string;
};

export interface AccountListItem {
  id: string;
  // account: string;
  email: string;
  // nickname: string;
  username: string;
  role: number;
  createTime: string;
  latestTime: string;
  // remark: string;
  status: number;
}

/**
 * @description: Request list return value
 */
export type AccountListGetResultModel = BasicFetchPageResult<AccountListItem>;

export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  tokenHead: string;
}

/**
 * @description: Get user information return value
 */
export type GetUserInfoModel = UserInfo;

export type OrganizationAccount = UserInfo & { positionId?: string };
