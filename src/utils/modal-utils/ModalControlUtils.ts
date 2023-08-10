import { appStore } from "../../stores/redux-store";
import {
  ModalStoreType,
  importEntitiesModalsliceActions,
} from "../../stores/slices/entitiesModalSlice";

export class ModalControlUtils {
  static setModal(modalPayload: ModalStoreType) {
    appStore.dispatch(importEntitiesModalsliceActions.addModal(modalPayload));
  }

  static removeModal() {
    appStore.dispatch(importEntitiesModalsliceActions.removeModal());
  }
}
