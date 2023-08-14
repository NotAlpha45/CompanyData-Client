import { ChartApi } from "../../apis/ChartApi";
import { appStore } from "../../stores/redux-store";
import { ChartSliceActions } from "../../stores/slices/chartSlice";
import { EntityChartType } from "../../types/entityChartTypes";

export class ChartControlUtils {
  static async getChartList() {
    const chartList: EntityChartType[] = (
      await ChartApi.getChartList()
    ).data.map((chart) => {
      return {
        chartId: chart.Id.toString(),
        chartName: chart.Name,
      };
    });

    appStore.dispatch(ChartSliceActions.setChartList(chartList));

    return chartList;
  }

  static setSelectedChartId(chartId: string) {
    appStore.dispatch(ChartSliceActions.setSelectedChartId(chartId));
  }
}
