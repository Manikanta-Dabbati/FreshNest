import Hero from "../components/sections/Hero";
import Categories from "../components/sections/Categories";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials  from "../components/sections/Testimonials";
import Newsletter from "../components/sections/Newsletter";
function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;