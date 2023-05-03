import { BasicFetchPageResult, BasicPageParams } from '/@/api/model/BaseModel';
/**
 * @description: Login interface parameters
 */
export type AccountPageParams = BasicPageParams & AccountParams;

export interface AccountJoinOrganizationParam {
  organizationId: string;
  type: '1';
}

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

export interface AccountTag {
  id: string;
  label: string;
}

export interface UserInfo {
  id: string;
  username: string;
  nickname: string;
  sex?: string;
  avatar?: string;
  desc?: string;
  homePath?: string;
  phone?: string;
  email?: string;
  icon?: string;
  status?: boolean;
  latestTime?: string;
  notifyCount?: number;
  introduction?: string;
  school?: string;
  company?: string;
  createTime?: string;
  signature?: string;
  unreadCount?: number;
  title?: string;
  address?: string;
  country?: string;
  password?: string;
  tags?: AccountTag[];
}

/**
 * @description: Get user information return value
 */

export type OrganizationAccount = UserInfo & { positionId?: string };
