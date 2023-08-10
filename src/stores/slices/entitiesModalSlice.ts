import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalStoreType, importEntityModal } from "../../types/modal-types";
import { ModalName } from "../../enums/modalName";



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
    },
    updateModalType: (
      state: ModalStoreType,
      action: PayloadAction<ModalName>
    ) => {
      state.type = action.payload;
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
    },
  },
});

export const importEntitiesModalsliceActions = importEntitiesModalslice.actions;
export const importEntitiesModalsliceReducer = importEntitiesModalslice.reducer;
