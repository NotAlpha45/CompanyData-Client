const excelType = [
  "application/excel",
  "application/vnd.ms-excel",
  "application/x-excel",
  "application/x-msexcel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

export function IsExcelFile(type: string) {
  return excelType.some((validType) => type.includes(validType));
}
