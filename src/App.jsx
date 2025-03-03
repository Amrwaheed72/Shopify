import "./App.css";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
function App() {
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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
