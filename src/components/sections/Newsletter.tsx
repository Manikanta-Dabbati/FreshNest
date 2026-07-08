import { Mail } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-700 to-green-900">
      <Container>

        <div className="max-w-4xl mx-auto text-center text-white">

          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-5 rounded-full">
              <Mail size={36} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Stay Fresh with FreshNest
          </h2>

          <p className="mt-5 text-green-100 text-lg leading-8">
            Subscribe to receive exclusive offers, seasonal discounts,
            fresh arrivals, and grocery tips.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Enter your email address"
              className="
                w-full
                md:w-96
                px-6
                py-4
                rounded-2xl
                text-gray-800
                outline-none
                bg-white
              "
            />

            <Button>
              Subscribe
            </Button>

          </div>

          <p className="mt-6 text-sm text-green-200">
            🎁 Get <strong>10% OFF</strong> on your first order after subscribing.
          </p>

        </div>

      </Container>
    </section>
  );
}

export default Newsletter;