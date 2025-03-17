import { useStateContext } from "../contexts/ContextProvider";

function Product({ item }) {
  const { img, price, title, subtitle, id } = item;
  const { count, increment, decrement } = useStateContext();

  const totalItemPrice = (count[id] || 1) * price;

  return (
    <>
      <div className="mt-2 flex h-32 w-full items-center justify-between border-b-1 p-6 pb-20">
        <div className="h-20 w-20">
          <img alt="hi" className="rounded-xl" src={img} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-black dark:text-gray-400">
              {title}
            </p>
            <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <p className="text-xl font-semibold text-black dark:text-gray-400">
                {totalItemPrice}
              </p>
            </div>
            <div className="flex h-12 w-24 items-center justify-center border-1 border-gray-400">
              <button
                onClick={() => decrement(id, price)}
                className="h-full cursor-pointer border-r-1 border-gray-400 p-1"
              >
                <p className="text-center text-3xl text-black dark:text-gray-400">
                  -
                </p>
              </button>
              <div className="p-1">
                <p className="p-2 text-xl text-black dark:text-gray-400">
                  {count[id] || 1}
                </p>
              </div>
              <button
                onClick={() => increment(id, price)}
                className="h-full cursor-pointer border-l-1 border-gray-400 p-1"
              >
                <p className="text-center text-2xl text-black dark:text-gray-400">
                  +
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
