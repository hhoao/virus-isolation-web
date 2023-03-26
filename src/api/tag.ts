import { defHttp } from '/@/utils/http/axios';
import { BasicFetchPageResult } from '/@/api/model/BaseModel';
import { TagModel, TagPageModelParams } from '/@/api/model/TagModel';
import { TagApi } from '/@/api/enum/TagApi';

export const getTagListApi = (params: TagPageModelParams = { pageNum: 1, pageSize: 5 }) =>
  defHttp.get<BasicFetchPageResult<TagModel>>({ url: TagApi.GET_TAG_LIST, params });
