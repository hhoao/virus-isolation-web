import { RoleListItem, RolePageParams, RoleParams } from '/@/api/model/AccountModel';
import { defHttp } from '/@/utils/http/axios';
import { RoleApi } from '/@/api/enum/RoleApi';
import { BasicFetchResult } from '/@/api/model/BaseModel';
import { PathVariables } from '/#/axios';

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get({ url: RoleApi.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<BasicFetchResult<RoleListItem>>({ url: RoleApi.RolePageList, params });

export const updateRole = (pathVariables: PathVariables, params?: RoleParams) =>
  defHttp.put({ url: RoleApi.UpdateRole, params }, { pathVariables });

export const deleteRole = (pathVariables: PathVariables, params?: RoleParams) =>
  defHttp.delete({ url: RoleApi.DeleteRole, params }, { pathVariables });

export const addRole = (params?: RoleParams) => defHttp.post({ url: RoleApi.AddRole, params });
