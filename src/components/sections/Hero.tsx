import { ArrowRight } from "lucide-react";

import { heroContent } from "../../data/hero";

import Button from "../ui/Button";
import Container from "../ui/Container";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center min-h-[85vh]">

          {/* Left */}

          <div>

            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
              {heroContent.badge}
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-gray-900">
              {heroContent.title}
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              {heroContent.subtitle}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Button>

                {heroContent.primaryButton}

              </Button>

              <Button variant="outline">

                <span className="flex items-center gap-2">

                  {heroContent.secondaryButton}

                  <ArrowRight size={18} />

                </span>

              </Button>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <img
              src={heroContent.image}
              alt="Fresh Grocery"
              className="
              rounded-[40px]
              shadow-2xl
              w-full
              object-cover
              hover:scale-105
              transition-all
              duration-500
              "
            />

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;