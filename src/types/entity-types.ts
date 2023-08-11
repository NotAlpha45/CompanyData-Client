export type OwnerShip = {
  ownershipId: string;
  ownerId: string;
  ownedId: string;
  ownerName?: string;
  ownedName?: string;
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
  entityTax?: EntityTax;
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
