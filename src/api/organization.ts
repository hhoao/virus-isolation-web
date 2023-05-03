import { defHttp } from '/@/utils/http/axios';

import { OrganizationPageParams, OrganizationParam } from '/@/api/model/OrganizationModel';
import { OrganizationApi } from '/@/api/enum/OrganizationApi';
import { PathVariables } from '/#/axios';
import { BasicFetchPageResult } from '/@/api/model/BaseModel';
import { OrganizationAccount } from '/@/api/model/AcountModel';
import { OrganizationInvitationMessageModel } from '/@/api/model/MessageModel';

export const getOrganizationAccountsPageListApi = (
  params: OrganizationPageParams = { pageNum: 1, pageSize: 5 },
) =>
  defHttp.get<BasicFetchPageResult<OrganizationAccount>>({
    url: OrganizationApi.GET_ORGANIZATION_ACCOUNTS_PAGE_LIST,
    params,
  });

export const updateOrganizationAccountPositionApi = (
  params: OrganizationParam,
  pathVariables: PathVariables,
) =>
  defHttp.put(
    { url: OrganizationApi.UPDATE_ORGANIZATION_ACCOUNT_POSITION, params },
    { pathVariables },
  );
export const deleteOrganizationAccountByUserIdApi = (
  params: OrganizationParam,
  pathVariables: PathVariables,
) =>
  defHttp.delete(
    { url: OrganizationApi.DELETE_ORGANIZATION_ACCOUNT_BY_USER_ID, params },
    { pathVariables },
  );

export const inviteAccount = (
  pathVariables: PathVariables,
  params: OrganizationInvitationMessageModel,
) => defHttp.put({ url: OrganizationApi.INVITE_ACCOUNT, params }, { pathVariables });

export const getInviteRecord = (pathVariables: PathVariables) =>
  defHttp.put<BasicFetchPageResult<OrganizationInvitationMessageModel>>(
    { url: OrganizationApi.GET_INVITE_RECORD },
    { pathVariables },
  );

export const cancelInvitation = (pathVariables: PathVariables) =>
  defHttp.put({ url: OrganizationApi.CANCEL_INVITATION }, { pathVariables });
