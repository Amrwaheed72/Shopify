import avatar from "/amr.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import { AiOutlineMenu } from "react-icons/ai";
import NavButton from "./NavButton";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdKeyboardArrowDown } from "react-icons/md";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "../components/UserProfile";
import { useEffect } from "react";

function Navbar() {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="relative flex justify-between p-2 md:mx-6">
      <NavButton
        title="Menu"
        customFunction={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunction={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunction={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor="#03c9d7"
        />
        <NavButton
          title="Notifications"
          customFunction={() => handleClick("notifications")}
          color={currentColor}
          icon={<RiNotification3Line />}
          dotColor="#03c9d7"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="hover:bg-light-gray flex cursor-pointer items-center gap-2 rounded-lg p-1"
            onClick={() => handleClick("userProfile")}
          >
            <img className="h-8 w-8 rounded-full" src={avatar} />
            <p>
              <span className="text-14 text-gray-400">Hi, </span> {"  "}
              <span className="text-14 ml-1 font-bold text-gray-400">Amr</span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
}

export default Navbar;
