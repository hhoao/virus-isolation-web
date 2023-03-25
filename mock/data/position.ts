import { PositionModel } from '/@/api/model/PositionModel';

export const positionList: PositionModel[] = (() => {
  const result: any[] = [];
  for (let index = 0; index < 4; index++) {
    result.push({
      id: '@id',
      name: `@name`,
      status: '@email',
      description: '@cparagraph',
      createTime: '@datetime',
    });
  }
  return result;
})();
