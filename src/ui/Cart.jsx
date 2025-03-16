import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import product2 from "../data/product2.jpg";
import product3 from "../data/product3.jpg";
import product4 from "../data/product4.jpg";
import Product from "./Product";
import { CartData } from "../data/dummy";

function Cart() {
  const { handleCloseClick, isClicked } = useStateContext();
  const closeCart = useRef(null);
  useOutsideClick(closeCart, () => handleCloseClick("cart"));
  return (
    <div className="dark:bg-main-dark-bg bg-half-transparent w-scree fixed top-0 right-0 z-20">
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
          <div className="flex h-full w-full flex-col gap-20">
            {CartData.map((item, index) => (
              <Product
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                img={item.img}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
