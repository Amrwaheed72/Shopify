import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import Product from "./Product";
import { CartData } from "../data/dummy";

function Cart() {
  const { handleCloseClick, isClicked, totalPrice } = useStateContext();
  const closeCart = useRef(null);
  useOutsideClick(closeCart, () => handleCloseClick("cart"));

  return (
    <div className="bg-half-transparent fixed top-0 right-0 z-20 w-screen dark:bg-transparent">
      {isClicked && (
        <div
          ref={closeCart}
          className="dark:[#484b52] dark:bg-main-dark-bg float-right h-screen w-400 bg-white dark:text-gray-200"
        >
          <div className="mt-4 flex items-center justify-between p-8">
            <p className="text-2xl font-semibold">Shopping Cart</p>
            <button
              style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
              onClick={() => handleCloseClick("cart")}
              type="button"
              className="hover:bg-light-gray cursor-pointer p-3 text-2xl hover:drop-shadow-xl"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="flex w-full flex-col gap-20">
            {CartData.map((item, index) => (
              <Product key={index} item={item} />
            ))}
          </div>
          <div className="flex justify-between border-t p-4">
            <p className="text-xl font-semibold">Total Price :</p>
            <p className="text-xl font-semibold">{totalPrice}</p>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <button className="h-10 w-80 cursor-pointer rounded-2xl bg-blue-700 text-center text-white">
              Order Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
