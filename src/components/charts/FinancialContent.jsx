import { useStateContext } from "../../contexts/ContextProvider";
import Header from "../../ui/Header";
import {
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  CandleSeries,
  Category,
  Tooltip,
  Legend,
} from "@syncfusion/ej2-react-charts";
import {
  barPrimaryXAxis,
  barPrimaryYAxis,
  financialChartData,
} from "../../data/dummy";

function FinancialContent() {
  const { currentMode } = useStateContext();
  return (
    <div className="dark:bg-secondary-dark-bg m-4 mt-24 rounded-3xl bg-white p-10 md:m-10">
      <Header category="Chart" title="Financial Data" />
      <div className="flex h-[420px] w-full items-center justify-center">
        <ChartComponent
          id="financial-chart"
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          background={currentMode === "Dark" ? "#33373e" : "#fff"}
          tooltip={{ enable: true }} // ✅ Add Tooltip
          legendSettings={{ visible: true }} // ✅ Show Legend
        >
          <Inject services={[CandleSeries, Category, Tooltip, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={financialChartData} // ✅ Use single object instead of map
              xName="x"
              high="high"
              low="low"
              open="open"
              close="close"
              volume="volume"
              type="Candle"
              name="Stock Data"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default FinancialContent;
