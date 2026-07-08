import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Category } from "../../types/category";

type Props = {
  category: Category;
};

function CategoryCard({ category }: Props) {
  return (
    <Link
      to={category.route}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">
        <p className="text-green-700 text-sm font-semibold uppercase">
          {category.subtitle}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-gray-800">
          {category.title}
        </h3>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-gray-500">
            {category.totalItems} Items
          </span>

          <ArrowRight
            size={20}
            className="group-hover:translate-x-2 transition"
          />
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;