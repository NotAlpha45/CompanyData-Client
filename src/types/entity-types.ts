export type OwnerShip = {
  ownershipId: string;
  ownerId: string;
  ownedId: string;
  ownerName?: string;
  ownedName?: string;
  ownershipName?: string;
  ownershipPercentage: number;
};

export type Entity = {
  chartId?: string;
  entityCode?: string;
  entityId: string;
  entityName: string;
  incorporationJurisdiction: string;
  entityType: string;
  subNational?: string;
  sicCode?: string;
  businessType?: string;
  entityTax?: EntityTax;
  taxResidentJurisdiction?: string;
};

export type EntityTax = {
  taxResidentJurisdiction: string;
  pe: boolean;
  sme: boolean;
  llc: boolean;
  publicLtd: boolean;
  privateLtd: boolean;
  tct?: EntityTct;
};

export type EntityTct = {
  tctName: string;
  tctDescription: string;
};

export type GetEntityListByChartIdResponseType = {
  ChartId: string;
  Id: string;
  Code: string;
  Name: string;
  IncorporationJurisdiction: string;
  EntityType: string;
  EntityOwnerList: {
    OwnerName: string;
    OwnerPercentage: number;
  }[];
  BusinessType: string;
  TaxResidentJurisdiction: string;
};
