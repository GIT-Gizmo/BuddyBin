import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import TextCarousel from '@/components/TextCarousel';
import { buttonVariants } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero-section"
      aria-label="hero section"
      className="py-8 w-full grid items-center h-[90vh] sm:h-screen lg:h-auto md:py-16 min-[1300px]:py-8 bg-gradient-to-r from-blue-600/30 to-cyan-500/30"
    >
      <div className="container flex flex-col items-center gap-6 text-center">
        <h1 className="animate-fade-up font-urbanist text-3xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <Balancer>
            Get your job done right today with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-extrabold text-transparent">
              Adroit HandyMan Services
            </span>
          </Balancer>
        </h1>
        <h2 className="max-w-[42rem] xs:mb-8 md:mt-8 lg:mt-0 lg:mb-0 animate-fade-up text-muted-foreground text-lg sm:text-xl md:text-3xl sm:leading-8">
          <Balancer>Not just any Handyman will do, book a professional.</Balancer>
        </h2>
        <TextCarousel />
        <div className="z-10 flex flex-col xs:mt-8 lg:mt-0 animate-fade-up justify-center gap-4 sm:flex-row">
          <LinkButton href="/book" size="lg" className="transition-all duration-1000 ease-out md:hover:-translate-y-2">
            Book Now
          </LinkButton>
          <LinkButton
            href="/estimate"
            variant="outline"
            size="lg"
            className="transition-all duration-1000 ease-out md:hover:-translate-y-2"
          >
            Get Estimate
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

const LinkButton = ({ href, variant = "default", size = "md", className, children }) => {
  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
};

export default Hero;