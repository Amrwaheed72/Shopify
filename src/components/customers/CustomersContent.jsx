import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Filter,
  GridComponent,
  Inject,
  Page,
  Selection,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../../data/dummy";
import Header from "../../ui/Header";

function CustomersContent() {
  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Toolbar, Selection, Edit, Sort, Filter]}
        ></Inject>
      </GridComponent>
    </div>
  );
}

export default CustomersContent;
