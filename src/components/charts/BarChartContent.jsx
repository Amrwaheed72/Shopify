import { useStateContext } from "../../contexts/ContextProvider";
import Header from "../../ui/Header";
import {
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  ColumnSeries,
  Category,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import {
  barCustomSeries, // ✅ Use this instead
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

function BarChartContent() {
  const { currentMode } = useStateContext();

  return (
    <div className="dark:bg-secondary-dark-bg m-4 mt-24 rounded-3xl bg-white p-10 md:m-10">
      <Header category="Chart" title="Inflation Rate" />
      <div className="flex h-[420px] w-full items-center justify-center">
        <ChartComponent
          id="bar-chart"
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          background={currentMode === "Dark" ? "#33373e" : "#fff"}
          legendSettings={{ visible: true }} // ✅ Show legend
        >
          <Inject services={[ColumnSeries, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default BarChartContent;
