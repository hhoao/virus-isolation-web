import { BasicPageParams } from '/@/api/model/BaseModel';

export interface TagModel {
  id: number;
  label: string;
}
export interface TagParams {
  id?: number;
  label?: string;
}

export type TagPageParams = TagParams & BasicPageParams;
