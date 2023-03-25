import { BasicPageParams } from '/@/api/model/BaseModel';

export interface OrganizationModel {
  id?: string;
  name?: string;
  email?: string;
  phone?: number;
  avatar?: string;
  description?: string;
  createTime?: string;
}

export interface OrganizationParam {
  id?: string;
  author?: string;
}

export type OrganizationPageParams = OrganizationParam & BasicPageParams;
