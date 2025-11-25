"use client";

import { useCartContext } from "@/context/CartContext";

interface IaddToCartProps {
  id: string;
  qty?: number,

}

const AddToCart = ({ id }: IaddToCartProps) => {
  const { cartItem, handelIncreas, getItemQty, handelDeCrease, handelRemove } =
    useCartContext();

  console.log(cartItem);
  return (
    <div>
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => {
            handelDeCrease(parseInt(id));
          }}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
        >
          -
        </button>
        <span className="font-medium text-gray-800 px-3 py-1 bg-white border border-gray-300 rounded-md min-w-10 text-center">
          {getItemQty(parseInt(id))}
        </span>
        <button
          onClick={() => {
            handelIncreas(parseInt(id));
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          +
        </button>
      </div>
      <button
    onClick={() => handelRemove(parseInt(id))}
    className="bg-blue-500 mt-5 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
  >
    Delete
  </button>
    </div>
  );
};

export default AddToCart;
