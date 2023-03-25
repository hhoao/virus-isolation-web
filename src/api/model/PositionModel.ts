import { BasicPageParams } from '/@/api/model/BaseModel';

export interface PositionModel {
  id: string;
  name: string;
  status?: string;
  description?: string;
  createTime?: string;
}

export interface PositionParam {
  id?: string;
  name?: string;
}

export type PositionPageParams = PositionParam & BasicPageParams;
