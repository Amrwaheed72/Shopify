import { MdOutlineCancel } from "react-icons/md";
import { themeColors } from "../data/dummy";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsCheck } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import useOutsideClick from "../hooks/useOutsideClick";
import { useRef } from "react";

function ThemeSettings() {
  const closeRef = useRef(null);
  const {
    setColor,
    setMode,
    currentMode,
    currentColor,
    setThemeSettings,
    themeSettings,
  } = useStateContext();

  useOutsideClick(closeRef, () => setThemeSettings(false));

  return (
    <div className="bg-half-transparent nav-item fixed top-0 right-0 w-screen">
      {themeSettings && (
        <div
          ref={closeRef}
          className="dark:[#484b52] dark:bg-main-dark-bg float-right h-screen w-400 bg-white dark:text-gray-200"
        >
          <div className="ml-4 flex items-center justify-between p-4">
            <p className="text-xl font-semibold">Settings</p>
            <button
              style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
              onClick={() => setThemeSettings(false)}
              type="button"
              className="hover:bg-light-gray p-3 text-2xl hover:drop-shadow-xl"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="border-color ml-4 flex-col border-t-1 p-4">
            <p className="text-lg font-semibold">Theme Options</p>
            <div className="mt-4">
              <input
                type="radio"
                id="light"
                name="theme"
                value="Light"
                className="cursor-pointer"
                checked={currentMode === "Light"}
                onChange={setMode}
              />
              <label htmlFor="light" className="text-md ml-2 cursor-pointer">
                Light
              </label>
            </div>
            <div className="mt-4">
              <input
                type="radio"
                id="dark"
                name="theme"
                value="Dark"
                className="cursor-pointer"
                checked={currentMode === "Dark"}
                onChange={setMode}
              />
              <label htmlFor="dark" className="text-md ml-2 cursor-pointer">
                Dark
              </label>
            </div>
          </div>
          <div className="border-color ml-4 flex-col border-t-1 p-4">
            <p className="text-lg font-semibold">Theme Colors</p>
            <div className="flex gap-3">
              {themeColors.map((theme, index) => (
                <TooltipComponent
                  key={index}
                  content={theme.name}
                  position="TopCenter"
                >
                  <div className="relative mt-2 flex cursor-pointer items-center gap-5">
                    <button
                      type="button"
                      className="h-10 w-10 cursor-pointer rounded-full"
                      style={{ backgroundColor: theme.color }}
                      onClick={() => setColor(theme.color)}
                    >
                      <BsCheck
                        className={`ml-2 text-2xl text-white ${theme.color === currentColor ? "block" : "hidden"}`}
                      />
                    </button>
                  </div>
                </TooltipComponent>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSettings;
