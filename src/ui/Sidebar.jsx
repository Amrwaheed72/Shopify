import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";

function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize, setScreensize } =
    useStateContext();

  function handleCloseSidebar() {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="mt-4 ml-3 flex items-center gap-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <SiShopware /> <span>Shopify</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                className="hover:bg-light-gray mt-4 block rounded-full p-3 text-xl md:hidden"
                onClick={() => {
                  setActiveMenu((prev) => !prev);
                }}
                type="button"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    key={link.name}
                    onClick={handleCloseSidebar}
                    to={`/${link.name}`}
                  >
                    {link.icon} <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
