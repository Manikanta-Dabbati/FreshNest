import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProductGrid from "../products/ProductGrid";
import { products } from "../../data/products";

function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionTitle
          title="Today's Fresh Picks"
          subtitle="Handpicked products loved by our customers."
        />

        <ProductGrid products={products} />
      </Container>
    </section>
  );
}

export default FeaturedProducts;