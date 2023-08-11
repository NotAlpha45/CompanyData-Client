import { AddEntitiesModalStepsName } from "../enums/ModalSteps";
import { Entity, OwnerShip } from "./entity-types";

export interface importEntityModal {
  file?: string;
}

export type AddEntitiesModalStepsNameKeyType =
  keyof typeof AddEntitiesModalStepsName;

export type ModalStoreType = {
  type: string;

  data: importEntityModal;

  entityDataToBeEdited?: {
    entity: Entity;
    ownerships: OwnerShip[];
  };
};
