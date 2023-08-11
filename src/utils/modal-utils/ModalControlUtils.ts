import { ModalName } from "../../enums/modalName";
import { appStore } from "../../stores/redux-store";
import { importEntitiesModalsliceActions } from "../../stores/slices/entitiesModalSlice";
import { Entity, OwnerShip } from "../../types/entity-types";
import { ModalStoreType } from "../../types/modal-types";

export class ModalControlUtils {
  static setModal(modalPayload: ModalStoreType) {
    appStore.dispatch(importEntitiesModalsliceActions.addModal(modalPayload));
  }

  static updateModalType(modalName: ModalName) {
    appStore.dispatch(
      importEntitiesModalsliceActions.updateModalType(modalName)
    );
  }

  static updateEntityDataToBeEdited(entityDataToBeEdited: {
    entity: Entity;
    ownerships: OwnerShip[];
  }) {
    appStore.dispatch(
      importEntitiesModalsliceActions.updateEntityDataToBeEdited(
        entityDataToBeEdited
      )
    );
  }

  static removeModal() {
    appStore.dispatch(importEntitiesModalsliceActions.removeModal());
  }
}
