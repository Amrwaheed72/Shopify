import Header from "../../ui/Header";
import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
function LineContent() {
  const { currentMode } = useStateContext();
  return (
    <div className="dark:bg-secondary-dark-bg m-4 mt-24 rounded-3xl bg-white p-10 md:m-10">
      <Header category="Chart" title="Inflation rate" />
      <div className="w-full">
        <ChartComponent
          id="line-chart"
          height="420px"
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373e" : "#fff"}
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default LineContent;
