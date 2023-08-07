export type OwnerShip = {
  ownershipId: string;
  ownerId: string;
  ownedId: string;
  ownershipName: string;
  ownershipPercentage: number;
};

export type Entity = {
  entityId: string;
  entityName: string;
  incorporationJurisdiction: string;
  entityType: string;
  subNational: string;
  sicCode: string;
  businessType?: string;
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
