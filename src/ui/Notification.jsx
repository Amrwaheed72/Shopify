import { useRef } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";
import useOutsideClick from "../hooks/useOutsideClick";
import { MdOutlineCancel } from "react-icons/md";

function Notification() {
  const { handleCloseClick, isClicked } = useStateContext();
  const closeRef = useRef(null);

  useOutsideClick(closeRef, () => handleCloseClick("notifications"));
  return (
    <div className="bg-half-transparent fixed top-10 right-4 z-20 sm:right-18 md:right-36 dark:bg-transparent">
      {isClicked && (
        <div
          ref={closeRef}
          className="dark:[#484b52] dark:bg-main-dark-bg float-right h-auto w-400 bg-white dark:text-gray-200"
        >
          <div className="mt-4 flex items-center justify-between p-8">
            <p className="text-2xl font-semibold">Notification</p>
            <button
              style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
              onClick={() => handleCloseClick("notifications")}
              type="button"
              className="hover:bg-light-gray cursor-pointer p-3 text-2xl hover:drop-shadow-xl"
            >
              <MdOutlineCancel />
            </button>
          </div>
          {chatData.map((item, index) => (
            <div key={index} className="mt-4 p-4">
              <div className="flex items-center justify-between border-b-1 p-5">
                <img
                  alt="hi"
                  className="h-12 w-12 rounded-full"
                  src={item.image}
                />
                <div className="flex flex-col flex-wrap justify-center">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm">{item.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notification;
