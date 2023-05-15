import { BasicPageParams } from '/@/api/model/BaseModel';

export enum MessageType {
  ORGANIZATION_INVITATION = 21,
  ORGANIZATION_COMMUNICATION = 22,
  JOIN_ORGANIZATION_MESSAGE = 23,
}
interface CommonMessageModel {
  id?: string;
  type?: MessageType;
  source?: string;
  target?: string;
  content?: string;
  createTime?: string;
}

export interface OrganizationInvitationMessageModel extends CommonMessageModel {
  type: MessageType.ORGANIZATION_INVITATION;
}

export interface OrganizationCommunicationMessageModel extends CommonMessageModel {
  type: MessageType.ORGANIZATION_COMMUNICATION;
  avatar?: string;
}

export type OrganizationCommunicationPageMessageModel = BasicPageParams & CommonMessageModel;

export interface OrganizationJoinMessageModel extends CommonMessageModel {
  type: MessageType.JOIN_ORGANIZATION_MESSAGE;
}
