import { BasicPageParams } from '/@/api/model/BaseModel';

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
export type OrganizationCommunicationMessagePageParam = CommonMessageModel & BasicPageParams;
export type OrganizationInvitationMessagePageParam = CommonMessageModel & BasicPageParams;
