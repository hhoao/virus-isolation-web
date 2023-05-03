import { OrganizationModel } from '/@/api/model/OrganizationModel';
import {
  MessageType,
  OrganizationCommunicationMessageModel,
  OrganizationInvitationMessageModel,
} from '/@/api/model/MessageModel';

export const organizationMessageList: OrganizationCommunicationMessageModel[] = (() => {
  const result: OrganizationCommunicationMessageModel[] = [];
  for (let index = 0; index < 10; index++) {
    result.push({
      id: '@id',
      type: MessageType.ORGANIZATION_COMMUNICATION,
      source: '@name',
      target: '@name',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      content: `@sentence`,
      createTime: '@datetime',
    });
  }
  return result;
})();

export const organizationInvitationList: OrganizationInvitationMessageModel[] = (() => {
  const result: OrganizationInvitationMessageModel[] = [];
  for (let index = 0; index < 10; index++) {
    result.push({
      id: '@id',
      type: MessageType.ORGANIZATION_INVITATION,
      source: '@name',
      target: `@name`,
      createTime: '@datetime',
    });
  }
  return result;
})();

export const organizationList: OrganizationModel[] = (() => {
  const result: OrganizationModel[] = [];
  for (let index = 0; index < 10; index++) {
    result.push({
      id: '@id',
      name: `@name`,
      email: '@email',
      phone: '@first',
      address: '@address',
      createTime: '@datetime',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      description: '@sentence',
    });
  }
  return result;
})();
