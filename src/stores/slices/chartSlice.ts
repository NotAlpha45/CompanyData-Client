import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EntityChartType } from "../../types/entityChartType";

// Create a slice for chart data
const initialChartData: EntityChartType = {
  chartId: "00",
  chartName: "MyChart",
  chartDescription: "",
};

const chartSlice = createSlice({
  name: "chart",
  initialState: initialChartData,
  reducers: {
    setChart: (
      state: EntityChartType,
      action: PayloadAction<EntityChartType>
    ) => {
      state.chartId = action.payload.chartId;
      state.chartName = action.payload.chartName;
      state.chartDescription = action.payload.chartDescription;
    },
  },
});

export const ChartSliceActions = chartSlice.actions;
export const ChartSliceReducer = chartSlice.reducer;
