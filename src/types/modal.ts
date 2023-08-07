import { AddEntitiesModalStepsName } from "../enums/ModalSteps";

export interface importEntityModal {
  file?: string;
}

export type AddEntitiesModalStepsNameKeyType =
  keyof typeof AddEntitiesModalStepsName;
