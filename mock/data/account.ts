import { OrganizationAccount, UserInfo } from '/@/api/model/AcountModel';
import { mock } from 'mockjs';

export const organizationAccountList: OrganizationAccount[] = (() => {
  const result: OrganizationAccount[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      username: '@first',
      sex: '@pick(0, 1, 2)',
      email: '@email',
      phone: '@natural(1000000000, 9999999999)',
      nickname: '@cname()',
      createTime: '@datetime',
      latestTime: '@datetime',
      status: mock('@boolean'),
      positionId: '@id',
    });
  }
  return result;
})();
export const accountList: UserInfo[] = (() => {
  const result: UserInfo[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      username: '@first',
      sex: '@pick(0, 1, 2)',
      email: '@email',
      phone: '@natural(1000000000, 9999999999)',
      nickname: '@cname()',
      createTime: '@datetime',
      latestTime: '@datetime',
      status: mock('@boolean'),
    });
  }
  return result;
})();

export function createFakeUserList(): UserInfo[] {
  return [
    {
      id: '1',
      username: 'mock',
      nickname: 'mock',
      sex: '@pick(0, 1, 2)',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      password: '123456',
      email: 'test@gmail.com',
      signature: '海纳百川，有容乃大',
      introduction: '微笑着，努力着，欣赏着',
      title: '交互专家',
      school: 'web',
      company: 'w3c',
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      address: 'Xiamen City 77',
      phone: '0592-268888888',
      createTime: '2022-09-09T02:19:26.000+00:00',
      tags: [
        {
          id: '@id',
          label: '很有想法的',
        },
        {
          id: '@id',
          label: '专注设计',
        },
        {
          id: '@id',
          label: '辣~',
        },
        {
          id: '@id',
          label: '大长腿',
        },
        {
          id: '@id',
          label: '川妹子',
        },
        {
          id: '@id',
          label: '海纳百川',
        },
      ],
    },
    {
      id: '@id',
      username: 'test',
      nickname: 'test',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      password: '123456',
    },
  ];
}
export const token1 = 'wethasdfkajsdfn';
export const token2 = 'usdfhwkervsdfg';
export const generateToken = (id: string) => {
  switch (id) {
    case '1':
      return token1;
    case '2':
      return token2;
    default:
      return '';
  }
};

export const getUserByToken = (token: string): UserInfo | undefined => {
  switch (token) {
    case token1:
      return createFakeUserList()[0];
    case token2:
      return createFakeUserList()[1];
    default:
      return undefined;
  }
};
