import { defHttp } from '/@/utils/http/axios';

import { PositionPageParams, PositionParam } from '/@/api/model/PositionModel';
import { PositionApi } from '/@/api/enum/PositionApi';
import { PathVariables } from '/#/axios';

export const getPositionPageListApi = (params: PositionPageParams = { pageNum: 1, pageSize: 5 }) =>
  defHttp.get({ url: PositionApi.GET_POSITION_PAGE_LIST, params });

export const addPositionApi = (params: PositionParam) =>
  defHttp.post({ url: PositionApi.ADD_POSITION, params });

export const updatePositionApi = (pathVariables: PathVariables, params?: PositionParam) =>
  defHttp.put({ url: PositionApi.UPDATE_POSITION, params }, { pathVariables });
export const deletePositionApi = (pathVariables: PathVariables, params?: PositionParam) =>
  defHttp.delete({ url: PositionApi.DELETE_POSITION, params }, { pathVariables });
