import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { GraphReducer } from "./slices/graph-slice";
import { TypedUseSelectorHook, createSelectorHook } from "react-redux";
import { EntitySliceReducer } from "./slices/entity-slice";
import { GraphFilterSliceReducer as GraphFilterReducer } from "./slices/graph-filter-slice";
import { importEntitiesModalsliceReducer } from "./slices/entitiesModalSlice";
import { AuthReducer } from "./slices/authReducer";
import { ChartSliceReducer } from "./slices/chartSlice";

const appReducer = combineReducers({
  graph: GraphReducer,
  entity: EntitySliceReducer,
  graphFilter: GraphFilterReducer,
  modals: importEntitiesModalsliceReducer,
  auth: AuthReducer,
  chart: ChartSliceReducer,
});

export const appStore = configureStore({
  reducer: appReducer,
});

type AppStoreType = ReturnType<typeof appReducer>;

export const useAppSelector =
  createSelectorHook() as TypedUseSelectorHook<AppStoreType>;
