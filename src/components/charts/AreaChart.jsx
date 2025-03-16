import { useStateContext } from "../../contexts/ContextProvider";
import Header from "../../ui/Header";
import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SplineAreaSeries,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
function AreaChart() {
  const { currentMode } = useStateContext();
  return (
    <div className="dark:bg-secondary-dark-bg m-4 mt-24 rounded-3xl bg-white p-10 md:m-10">
      <Header category="Chart" title="Inflation rate" />
      <div className="w-full">
        <ChartComponent
          id="area-chart"
          height="420px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373e" : "#fff"}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default AreaChart;
