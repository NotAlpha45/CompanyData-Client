import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  initialEntities,
  initialOwnerships,
} from "../../dummy-data/entity-ownership";
import { Entity, OwnerShip } from "../../types/entity-types";

// const initialStoreEntities: Entity[] = initialEntities ?? [];
type EntityStoreType = {
  entities: Entity[];
  ownerships: OwnerShip[];
};

const initialEntityState: EntityStoreType = {
  entities: initialEntities ?? [],
  ownerships: initialOwnerships ?? [],
};

const entitySlice = createSlice({
  name: "entities",
  initialState: initialEntityState,
  reducers: {
    addEntity: (state: EntityStoreType, action: PayloadAction<Entity>) => {
      state.entities.push(action.payload);
    },

    setEntities: (state: EntityStoreType, action: PayloadAction<Entity[]>) => {
      state.entities = action.payload;
    },

    setOwnerships: (
      state: EntityStoreType,
      action: PayloadAction<OwnerShip[]>
    ) => {
      state.ownerships = action.payload;
    },

    addOwnership: (
      state: EntityStoreType,
      action: PayloadAction<OwnerShip>
    ) => {
      state.ownerships.push(action.payload);
    },

    addOwnerships: (
      state: EntityStoreType,
      action: PayloadAction<OwnerShip[]>
    ) => {
      return {
        ...state,
        ownerships: [...state.ownerships, ...action.payload],
      };
    },

    removeOwnerships: (
      state: EntityStoreType,
      action: PayloadAction<OwnerShip[]>
    ) => {
      const ownerships = action.payload;
      ownerships.forEach((ownership) => {
        const index = state.ownerships.findIndex(
          (o) => o.ownershipId === ownership.ownershipId
        );
        if (index !== -1) {
          state.ownerships.splice(index, 1);
        }
      });
    },

    updateEntity: (state: EntityStoreType, action: PayloadAction<Entity>) => {
      const entity = action.payload;
      const index = state.entities.findIndex(
        (e) => e.entityId === entity.entityId
      );
      if (index !== -1) {
        state.entities[index] = entity;
      }
    },

    updateOwnerships: (
      state: EntityStoreType,
      action: PayloadAction<OwnerShip[]>
    ) => {
      const ownerships = action.payload;
      ownerships.forEach((ownership) => {
        const index = state.ownerships.findIndex(
          (o) => o.ownershipId === ownership.ownershipId
        );
        if (index !== -1) {
          state.ownerships[index] = ownership;
        }
      });
    },
  },
});

export const EntitySliceActions = entitySlice.actions;
export const EntitySliceReducer = entitySlice.reducer;
