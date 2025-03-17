import { ordersData, ordersGrid } from "../../data/dummy";
import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
} from "@syncfusion/ej2-react-grids";
import Header from "../..//ui/Header";

function OrdersContent() {
  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header title="Orders" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        ></Inject>
      </GridComponent>
    </div>
  );
}

export default OrdersContent;
