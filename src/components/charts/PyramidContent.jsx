import { useStateContext } from "../../contexts/ContextProvider";
import Header from "../../ui/Header";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
  PyramidSeries,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";

function PyramidContent() {
  const { currentMode } = useStateContext();

  return (
    <div className="dark:bg-secondary-dark-bg m-4 mt-24 rounded-3xl bg-white p-10 md:m-10">
      <Header category="Chart" title="Inflation Rate" />
      <div className="flex h-[420px] w-full items-center justify-center">
        <AccumulationChartComponent
          id="charts"
          height="420px"
          background={currentMode === "Dark" ? "#33373e" : "#fff"}
        >
          <Inject services={[PyramidSeries]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              xName="x"
              yName="y"
              type="Pyramid"
              dataSource={PyramidData} 
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
}

export default PyramidContent;
