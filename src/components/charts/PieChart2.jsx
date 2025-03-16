import { useStateContext } from "../../contexts/ContextProvider";
import Header from "../../ui/Header";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
} from "@syncfusion/ej2-react-charts";
import { pieChartData } from "../../data/dummy";

function PieChart2() {
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
          <Inject services={[PieSeries]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
            
              xName="x"
              yName="y"
              type="Pie"
              dataSource={pieChartData} // Ensure correct structure
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
}

export default PieChart2;
