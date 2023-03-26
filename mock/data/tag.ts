import * as Mock from 'mockjs';
import { TagModel } from '/@/api/model/TagModel';

export const tagList = ((): TagModel[] => {
  const result: TagModel[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: Mock.mock('@number'),
      label: '@word',
    });
  }
  return result;
})();
