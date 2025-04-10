import {
  OrganizationAccountHealthRecord,
  OrganizationAccountSignInRecord,
  OrganizationAccountSignInStatusModel,
  OrganizationModel,
} from '/@/api/model/OrganizationModel';
import {
  MessageType,
  OrganizationCommunicationMessageModel,
  OrganizationInvitationMessageModel,
} from '/@/api/model/MessageModel';
import * as Mock from 'mockjs';

export const organizationAccountSignInRecodeList: OrganizationAccountSignInRecord[] = (() => {
  const result: OrganizationAccountSignInRecord[] = [];
  for (let index = 0; index < 40; index++) {
    result.push({
      id: '@id',
      name: '@name',
      status: Mock.mock('@pick(0, 1, 2)'),
      createTime: `@date("${new Date().getFullYear()}-MM-dd")`,
      address: '@county(true)',
      remark: '@cparagraph',
    });
  }
  return result;
})();

export const organizationAccountHealthRecodeList: OrganizationAccountHealthRecord[] = (() => {
  const result: OrganizationAccountHealthRecord[] = [];
  for (let index = 0; index < 40; index++) {
    result.push({
      id: '@id',
      realName: '@cname',
      jobNumber: '@id',
      temperature: '@float(36, 37, 1, 1)',
      isSignIn: '@pick(["true", "false"])',
      createTime: `@date("${new Date().getFullYear()}-MM-dd")`,
      address: '@county(true)',
      discomfort: '@pick(["true", "false"])',
      phone: '@integer(123412351986, 9999999999)',
      remark: '@cparagraph',
    });
  }
  return result;
})();

export const organizationAccountSignInStatusList: OrganizationAccountSignInStatusModel[] = (() => {
  const result: OrganizationAccountSignInStatusModel[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: '@id',
      type: Mock.mock('@pick(0, 1, 2)'),
      date: Mock.mock(`@date("${new Date().getFullYear()}-MM-dd")`),
      content: `@sentence`,
    });
  }
  return result;
})();
export const organizationMessageList: OrganizationCommunicationMessageModel[] = (() => {
  const result: OrganizationCommunicationMessageModel[] = [];
  for (let index = 0; index < 10; index++) {
    result.push({
      id: '@id',
      type: MessageType.ORGANIZATION_COMMUNICATION,
      source: '@name',
      target: '@name',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1192430988&s=640',
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
      address: '@county(true)',
      createTime: '@datetime',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1192430988&s=640',
      description: '@sentence',
    });
  }
  return result;
})();
