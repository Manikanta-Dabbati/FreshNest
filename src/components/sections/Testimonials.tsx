import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Kumar",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "FreshNest always delivers fresh vegetables on time. The quality is amazing!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Verified Buyer",
    image: "https://i.pravatar.cc/150?img=5",
    review:
      "The dairy products are always fresh, and the delivery service is super fast.",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    role: "Happy Customer",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "I love the premium quality of the non-veg products. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-green-50">
      <Container>

        <SectionTitle
          title="What Our Customers Say"
          subtitle="Trusted by thousands of happy customers across the country."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((user) => (

            <div
              key={user.id}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex items-center gap-4">

                <img
                  src={user.image}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    {user.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {user.role}
                  </p>

                </div>

              </div>

              <div className="flex gap-1 mt-5">

                {[...Array(5)].map((_, index) => (

                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <p className="mt-5 text-gray-600 leading-7 italic">
                "{user.review}"
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Testimonials;