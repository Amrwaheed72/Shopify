import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from "@syncfusion/ej2-react-kanban";
import Header from "../../ui/Header";
import { kanbanData, kanbanGrid } from "../../data/dummy";

function KanbanContent() {
  return (
    <div className="m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
}

export default KanbanContent;
