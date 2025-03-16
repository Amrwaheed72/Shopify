import {
  employeesData,
  contextMenuItems,
  employeesGrid,
} from "../../data/dummy";
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
  Search,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import Header from "../..//ui/Header";

function EmployeesContent() {
  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10 dark:bg-main-dark-bg">
      <Header title="Orders" category="Page" />
      <GridComponent 
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]}></Inject>
      </GridComponent>
    </div>
  );
}

export default EmployeesContent;
