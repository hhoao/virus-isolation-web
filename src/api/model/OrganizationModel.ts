import { BasicPageParams } from '/@/api/model/BaseModel';

export enum SignInStatusType {
  SUCCESS = 0,
  WARN = 1,
  DANGER = 2,
}
export interface OrganizationAccountSignInStatusModel {
  id?: string;
  date?: string;
  type?: SignInStatusType;
  content?: string;
}
export interface OrganizationModel {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  description?: string;
  address?: string;
  createTime?: string;
}

export interface OrganizationParam {
  id?: string;
  author?: string;
}

export type OrganizationPageParams = OrganizationParam & BasicPageParams;
