import { useEffect, useState } from "react";
import axios from "axios";
import { useCartContext } from "@/context/CartContext";

interface ItemProps {
  id: number;
  qty: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

function CartItem({ id, qty }: ItemProps) {
  const { handelIncreas, getItemQty, handelDeCrease, handelRemove } =
    useCartContext();

  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!productData) return <div>Loading...</div>;

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-8">
          <h2 className="text-lg font-medium text-gray-900">
            {productData.title}
          </h2>

          <div className="mt-2">
            <p className="text-gray-600">
              Price:{" "}
              <span className="font-medium text-gray-800">
                ${productData.price}
              </span>
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={() => handelDeCrease(id)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              -
            </button>

            <span className="font-medium text-gray-800 px-3 py-1 bg-white border border-gray-300 rounded-md min-w-10 text-center">
              {getItemQty(id)}
            </span>

            <button
              onClick={() => handelIncreas(id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              +
            </button>
          </div>

          <button
            onClick={() => handelRemove(id)}
            className="bg-red-500 mt-5 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600"
          >
            Delete
          </button>
        </div>

        <div className="col-span-4 flex justify-end">
          <img
            src={productData.image}
            alt={productData.title}
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
