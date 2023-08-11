export type EntityMapDto = {
  IsMatch: boolean;
  ExcelColumn: ExcelHeader[];
  Column: ExcelHeader[];
  MapedColumn: KeyValue[];
};

export type ExcelHeader = {
  index: number;
  header: string;
};

export type KeyValue = {
  key: number;
  value: string;
};

export type ReviewEntity = {
  Id: number;
  EntityId: string;
  EntityName: string;
  Data: ReviewEntityData[];
};
export type ReviewEntityData = {
  Column: string;
  Old: string;
  New: string;
};
