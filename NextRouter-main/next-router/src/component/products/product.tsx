import axios from "axios";
import Link from "next/link";

export interface Root {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  rate: number;
}

export interface Rating {
  rate: number;
  count: number;
}

async function Product() {
  const { data } = await axios("https://fakestoreapi.com/products");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-8 px-4">
      {/* Header Section */}
      <div className="text-center mb-12 mt-14">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Our Products
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover amazing products with the best quality and prices
        </p>
      </div>

      {/* Products Grid - تغییر اصلی اینجاست */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {data.map((item: Root) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            {/* Product Card */}
            <div className="group bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:scale-105 h-full flex flex-col">
              {/* Image Container */}
              <div className="mb-4 flex-1 flex items-center justify-center min-h-[160px] md:min-h-[200px] bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-3 md:p-4 group-hover:from-purple-100 group-hover:to-blue-100 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 md:h-40 object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="mt-auto">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {item.category}
                  </span>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    ${item.price}
                  </span>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Details
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-300 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none"></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <p className="text-gray-500">Showing {data.length} amazing products</p>
      </div>
    </div>
  );
}

export default Product;
