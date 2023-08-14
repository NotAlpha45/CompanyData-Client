import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EntityChartType } from "../../types/entityChartTypes";

// Create a slice for chart data
const initialChartList: EntityChartType[] = [
  {
    chartId: "00",
    chartName: "MyChart",
    chartDescription: "",
  },
];

type chartSliceType = {
  chartList: EntityChartType[];
  selectedChartId: string;
};

const initialChartData: chartSliceType = {
  chartList: initialChartList,
  selectedChartId: "00",
};

const chartSlice = createSlice({
  name: "chart",
  initialState: initialChartData,
  reducers: {
    setChartList: (
      state: chartSliceType,
      action: PayloadAction<EntityChartType[]>
    ) => {
      state.chartList = action.payload;
    },

    setSelectedChartId: (
      state: chartSliceType,
      action: PayloadAction<string>
    ) => {
      state.selectedChartId = action.payload;
    },
  },
});

export const ChartSliceActions = chartSlice.actions;
export const ChartSliceReducer = chartSlice.reducer;
