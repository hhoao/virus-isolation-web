export interface CovidStatisticModel {
  currentConfirmedCount?: number;
  currentConfirmedIncr?: null;
  confirmedCount?: number;
  confirmedIncr?: null | number;
  suspectedCount?: number;
  suspectedIncr?: null | number;
  curedCount?: number;
  curedIncr?: number;
  deadCount?: number;
  deadIncr?: number;
  seriousCount?: number;
  seriousIncr?: null | number;
  globalStatistics?: {
    currentConfirmedCount?: number;
    confirmedCount?: number;
    curedCount?: number;
    deadCount?: number;
  };
}
export interface RemarkAndNotesModel {
  generalRemark?: string;
  remark1?: string;
  remark2?: string;
  remark3?: string;
  remark4?: string;
  remark5?: string;
  note1?: string;
  note2?: string;
  note3?: string;
  updateTime?: number;
}
export type CovidModel = CovidStatisticModel & RemarkAndNotesModel;

export interface CovidFetchResult {
  results?: CovidModel[];
  success?: boolean;
}
