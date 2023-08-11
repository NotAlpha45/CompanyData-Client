import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalStoreType } from "../../types/modal-types";
import { ModalName } from "../../enums/modalName";
import { Entity, OwnerShip } from "../../types/entity-types";

const initState: ModalStoreType = {
  type: "",
  data: {},
};

const importEntitiesModalslice = createSlice({
  name: "modals",
  initialState: initState,
  reducers: {
    addModal: (
      state: ModalStoreType,
      action: PayloadAction<ModalStoreType>
    ) => {
      state.data = action.payload.data;
      state.type = action.payload.type;
      // state.entityDataToBeEdited = action.payload.entityDataToBeEdited;
    },
    updateModalType: (
      state: ModalStoreType,
      action: PayloadAction<ModalName>
    ) => {
      state.type = action.payload;
    },

    updateEntityDataToBeEdited: (
      state: ModalStoreType,
      action: PayloadAction<{ entity: Entity; ownerships: OwnerShip[] }>
    ) => {
      state.entityDataToBeEdited = action.payload;
    },

    updateFileIntoModal: (
      state: ModalStoreType,
      action: PayloadAction<string>
    ) => {
      state.data.file = action.payload;
    },
    removeModal: (state: ModalStoreType) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state.type = "";
      state.data = {};
      state.entityDataToBeEdited = undefined;
    },
  },
});

export const importEntitiesModalsliceActions = importEntitiesModalslice.actions;
export const importEntitiesModalsliceReducer = importEntitiesModalslice.reducer;
