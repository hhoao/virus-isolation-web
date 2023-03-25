import { OrganizationModel } from '/@/api/model/OrganizationModel';

export const organizationList: OrganizationModel[] = (() => {
  const result: any[] = [];
  for (let index = 0; index < 4; index++) {
    result.push({
      id: '@id',
      name: `@name`,
      email: '@email',
      phone: '@first',
      createTime: '@datetime',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      description: '@sentence',
    });
  }
  return result;
})();
