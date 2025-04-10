import { BasicPageParams } from '/@/api/model/BaseModel';

export enum SignInStatusType {
  SUCCESS = 0,
  WARN = 1,
  DANGER = 2,
}

export enum OrganizationDocumentType {
  HEALTH_INFORMATION = 0,
  SIGN_IN_INFORMATION = 1,
}

export interface OrganizationCommonDocumentParams {
  type: OrganizationDocumentType;
}

export interface OrganizationAccountSignInRecord {
  id?: string;
  name?: string;
  status?: SignInStatusType;
  createTime?: string;
  address?: string;
  remark?: string;
}

export interface OrganizationAccountHealthRecord {
  id?: string;
  realName?: string;
  jobNumber?: string;
  temperature?: string;
  isSignIn?: string;
  createTime?: string;
  address?: string;
  discomfort?: string;
  phone?: string;
  remark?: string;
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
export interface OrganizationDocumentPageParams
  extends OrganizationCommonDocumentParams,
    BasicPageParams {}
export interface OrganizationHealthRecodePageParams
  extends OrganizationAccountHealthRecord,
    OrganizationDocumentPageParams {}
export interface OrganizationSignInRecodePageParams
  extends OrganizationAccountSignInRecord,
    OrganizationDocumentPageParams {}
