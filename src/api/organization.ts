import { defHttp } from '/@/utils/http/axios';

import { OrganizationPageParams, OrganizationParam } from '/@/api/model/OrganizationModel';
import { OrganizationApi } from '/@/api/enum/OrganizationApi';
import { PathVariables } from '/#/axios';

export const getOrganizationPageListApi = (
  params: OrganizationPageParams = { pageNum: 1, pageSize: 5 },
) => defHttp.get({ url: OrganizationApi.GET_ORGANIZATION_PAGE_LIST, params });

export const addOrganizationApi = (params: OrganizationParam) =>
  defHttp.post({ url: OrganizationApi.ADD_ORGANIZATION, params });

export const updateOrganizationApi = (params: OrganizationParam, pathVariables: PathVariables) =>
  defHttp.put({ url: OrganizationApi.UPDATE_ORGANIZATION, params }, { pathVariables });
export const deleteOrganizationApi = (params: OrganizationParam, pathVariables: PathVariables) =>
  defHttp.delete({ url: OrganizationApi.DELETE_ORGANIZATION, params }, { pathVariables });
