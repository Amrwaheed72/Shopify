import "./App.css";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Line from "./pages/charts/Line";
import Area from "./pages/charts/Area";
import Bar from "./pages/charts/Bar";
import Pie from "./pages/charts/Pie";
import Fianancial from "./pages/charts/Fianancial";
import Pyramid from "./pages/charts/Pyramid";
import Stacked from "./pages/charts/Stacked";
import Ecommerce from "./pages/Ecommerce";
import Orders from "./pages/Orders";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import Kanban from "./pages/Kanban";
import Editor from "./pages/Editor";
import Calendar from "./pages/Calendar";
import ColorPicker from "./pages/ColorPicker";
import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";
import Footer from "./ui/Footer";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { activeMenu } = useStateContext();
  // const activeMenu=true
  return (
    <div>
      <BrowserRouter>
        <div className="dark:bg-main-dark-bg relative flex">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                className="hover:bg-light-gray p-3 text-3xl text-white hover:drop-shadow-xl"
                type="button"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="sidebar dark:bg-secondary-dark-bg fixed w-72 bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="dark:bg-secondary-dark-bg w-0">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div className="bg-main-bg dark:bg-main-dark-bg navbar fixed w-full md:static">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Fianancial />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
