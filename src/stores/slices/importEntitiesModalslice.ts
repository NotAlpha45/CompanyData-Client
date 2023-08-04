import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { importEntityModal } from "../../types/modal";
import { ModalName } from "../../enums/modalName";

type ModalStore = {
  type: string;
  data: importEntityModal;
};

const initState: ModalStore = {
  type: "",
  data: {},
};

const importEntitiesModalslice = createSlice({
  name: "modals",
  initialState: initState,
  reducers: {
    addModal: (state: ModalStore, action: PayloadAction<ModalStore>) => {
      state.data = action.payload.data;
      state.type = action.payload.type;
    },
    updateModalType: (
      state: ModalStore,
      action: PayloadAction<ModalName>
    ) => {
      state.type = action.payload;
    },
    updateFileIntoModal: (state: ModalStore, action: PayloadAction<string>) => {
      state.data.file = action.payload;
    },
    removeModal: (state: ModalStore) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state.type = "";
    },
  },
});

export const importEntitiesModalsliceActions = importEntitiesModalslice.actions;
export const importEntitiesModalsliceReducer = importEntitiesModalslice.reducer;
