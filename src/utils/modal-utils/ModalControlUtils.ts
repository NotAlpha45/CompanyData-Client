import { appStore } from "../../stores/redux-store";
import { importEntitiesModalsliceActions } from "../../stores/slices/entitiesModalSlice";
import { ModalStoreType } from "../../types/modal-types";

export class ModalControlUtils {
  static setModal(modalPayload: ModalStoreType) {
    appStore.dispatch(importEntitiesModalsliceActions.addModal(modalPayload));
  }

  static removeModal() {
    appStore.dispatch(importEntitiesModalsliceActions.removeModal());
  }
}
