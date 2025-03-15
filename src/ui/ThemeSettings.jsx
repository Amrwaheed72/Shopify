import { MdOutlineCancel } from "react-icons/md";

function ThemeSettings() {
  return (
    <div className="bg-half-transparent nav-item fixed top-0 right-0 w-screen">
      <div className="dark:[#484b52] float-right h-screen w-400 bg-white dark:text-gray-200">
        <div className="ml-4 flex items-center justify-between p-4">
          <p className="text-xl font-semibold">Settings</p>
          <button
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            onClick={() => {}}
            type="button"
            className="hover:bg-light-gray p-3 text-2xl hover:drop-shadow-xl"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="border-color ml-4 flex-col border-t-1 p-4">
          <p className="text-lg font-semibold">Theme Options</p>
          <div className="mt-4">
            <input type="radio"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
