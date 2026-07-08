import {
  Truck,
  Leaf,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "Get your groceries delivered within 30 minutes.",
    icon: Truck,
  },
  {
    id: 2,
    title: "Farm Fresh Products",
    description:
      "Fresh vegetables and fruits sourced directly from farms.",
    icon: Leaf,
  },
  {
    id: 3,
    title: "Secure Payments",
    description:
      "100% secure online payments with trusted payment gateways.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Premium Quality",
    description:
      "Every product is quality checked before delivery.",
    icon: BadgeCheck,
  },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Why Choose FreshNest?"
          subtitle="We deliver freshness, quality and convenience every single day."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-3xl bg-green-50 p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;