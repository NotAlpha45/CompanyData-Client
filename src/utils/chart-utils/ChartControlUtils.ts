import { ChartApi } from "../../apis/ChartApi";
import { appStore } from "../../stores/redux-store";
import { ChartSliceActions } from "../../stores/slices/chartSlice";
import { EntityChartType } from "../../types/entityChartType";

export class ChartControlUtils {
  static async getChartList() {
    const chartList: EntityChartType[] = (
      await ChartApi.getChartList()
    ).data.map((chart) => {
      return {
        chartId: chart.Id,
        chartName: chart.Name,
      };
    });

    appStore.dispatch(ChartSliceActions.setChart(chartList));

    return chartList;
  }
}
