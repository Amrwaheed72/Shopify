import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import Header from "../../ui/Header";
import { scheduleData } from "../../data/dummy";

function CalendarContent() {
  return (
    <div className="m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ datasource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Agenda, Resize, Month, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
}

export default CalendarContent;
