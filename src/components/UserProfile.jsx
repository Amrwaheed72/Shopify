import { useRef } from "react";
import { userProfileData } from "../data/dummy";
import useOutsideClick from "../hooks/useOutsideClick";
import { useStateContext } from "../contexts/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";
import amr from "/amr.jpg";

function UserProfile() {
  const { handleCloseClick, isClicked } = useStateContext();
  const closeRef = useRef(null);

  useOutsideClick(closeRef, () => handleCloseClick("notifications"));
  return (
    <div className="bg-half-transparent fixed top-10 right-36 z-20 dark:bg-transparent">
      {isClicked && (
        <div
          ref={closeRef}
          className="dark:[#484b52] dark:bg-main-dark-bg float-right h-auto w-400 bg-white dark:text-gray-200"
        >
          <div className="mt-4 flex items-center justify-between p-8">
            <p className="text-2xl font-semibold">User Profile</p>
            <button
              style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
              onClick={() => handleCloseClick("notifications")}
              type="button"
              className="hover:bg-light-gray cursor-pointer p-3 text-2xl hover:drop-shadow-xl"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-center gap-10 p-6">
              <img alt="hi" className="h-28 w-28 rounded-full" src={amr} />
              <div className="flex flex-col flex-wrap justify-center">
                <p className="font-bold">Amr Waheed</p>
                <p className="text-sm">Full Stack developer</p>
                <p className="text-sm text-gray-400">amrmohamed@gmail.com</p>
              </div>
            </div>
          </div>
          {userProfileData.map((item, index) => (
            <div key={index} className="mt-4 py-4">
              <div className="flex items-center justify-between border-b-1 border-gray-500 px-12 py-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <p className="text-2xl" style={{ color: item.iconColor }}>
                    {item.icon}
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
