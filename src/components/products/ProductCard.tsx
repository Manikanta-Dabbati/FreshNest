import type { Product } from "../../types/product";
import { Star, ShoppingCart, Heart } from "lucide-react";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <div className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {product.name}
        </h3>

        <p className="text-gray-500 mt-1">
          {product.unit}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <Star className="text-yellow-500 fill-yellow-400" size={18} />
          <span>{product.rating}</span>
        </div>

        <div className="flex justify-between items-center mt-5">

          <span className="text-2xl font-bold text-green-700">
            ₹{product.price}
          </span>

          <div className="flex gap-3">

            <button className="p-3 rounded-full bg-red-50 hover:bg-red-100 transition">
              <Heart size={18} />
            </button>

            <button className="p-3 rounded-full bg-green-700 text-white hover:bg-green-800 transition">
              <ShoppingCart size={18} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;