import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import CategoryCard from "../products/CategoryCard";

import { categories } from "../../data/categories";

function Categories() {
  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          title="Shop by Category"
          subtitle="Choose your favorite category and start shopping."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}

export default Categories;