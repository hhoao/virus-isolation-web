import { defHttp } from '/@/utils/http/axios';
import { BasicFetchResult } from '/@/api/model/BaseModel';
import { TagModel, TagPageParams, TagParams } from '/@/api/model/TagModel';
import { TagApi } from '/@/api/enum/TagApi';
import { PathVariables } from '/#/axios';

export const getTagListApi = (params: TagPageParams = { pageNum: 1, pageSize: 5 }) =>
  defHttp.get<BasicFetchResult<TagModel>>({ url: TagApi.GET_TAG_LIST, params });

export const addTagApi = (params: TagParams) => defHttp.post({ url: TagApi.ADD_TAG, params });

export const updateTagApi = (pathVariables: PathVariables, params?: TagParams) =>
  defHttp.put({ url: TagApi.UPDATE_TAG, params }, { pathVariables });
export const deleteTagApi = (pathVariables: PathVariables, params?: TagParams) =>
  defHttp.delete({ url: TagApi.DELETE_TAG, params }, { pathVariables });
