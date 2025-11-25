"use client";

import { ServerOnly } from "@/app/about/server";
import axios from "axios";

const AddProduct = () => {
  ServerOnly()
  const hendelProduct = () => {
    axios({
      url: "https://fakestoreapi.com/products",
      method: "post",
      data: {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
    });
  };


  return (
    <div>
      <button onClick={hendelProduct} className="btn">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
