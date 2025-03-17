import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { chatData } from "../data/dummy";

function Chat() {
  const { handleCloseClick, isClicked } = useStateContext();
  const closeRef = useRef(null);

  useOutsideClick(closeRef, () => handleCloseClick("chat"));
  return (
    <div className="bg-half-transparent fixed top-10 right-36 z-20 dark:bg-transparent">
      {isClicked && (
        <div
          ref={closeRef}
          className="dark:[#484b52] dark:bg-main-dark-bg float-right h-auto w-400 bg-white dark:text-gray-200"
        >
          <div className="mt-4 flex items-center justify-between p-8">
            <p className="text-2xl font-semibold">Chat</p>
            <button
              style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
              onClick={() => handleCloseClick("chat")}
              type="button"
              className="hover:bg-light-gray cursor-pointer p-3 text-2xl hover:drop-shadow-xl"
            >
              <MdOutlineCancel />
            </button>
          </div>
          {chatData.map((item, index) => (
            <div key={index} className="mt-4 p-4">
              <div className="flex items-center justify-center border-b-1 p-5 gap-6">
                <img alt="hi" className="h-12 w-12 rounded-full" src={item.image} />
                <div className="flex flex-col justify-center flex-wrap">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm">{item.subtext}</p>
                  <p className="text-sm text-gray-400">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Chat;
