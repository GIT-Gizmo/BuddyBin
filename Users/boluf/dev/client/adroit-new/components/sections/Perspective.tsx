import Image from "next/image"
import Balancer from "react-wrap-balancer"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

const Perspective = () => {
  return (
    <section id="about-section" aria-label="about section" className="w-full py-16">
      <div className="container grid max-w-6xl justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Our{" "}
              <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-extrabold text-transparent">
                Persective
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              HOME IS NOT JUST A{" "}
              <span className="font-semibold text-foreground">
                PLACE…
              </span>{" "}
              IT&apos;S A FEELING
            </Balancer>
          </h3>
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="space-y-4 md:space-y-6">

            <Card
              id="2"
              className="h-fit pt-6 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >
              <CardContent className="space-y-6 p-0">
                <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    Home is not just a place, it’s a feeling and the desire to create one is the deepest yearnings of the human soul. Home is the starting place of love, hope and dreams. Your home is a place where you settle your peace and find your pace. Your home is the best comfort zone you will find in the entire world. Your journey will always lead you back to your home.
                  </Balancer>
                </p>
                <Image
                  width={600}
                  height={400}
                  alt="illustration"
                  src="/assets/images/feel-at-home.webp"
                  className="overflow-hidden rounded-b-xl"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 md:mt-20 md:space-y-6">

            <Card
              id="4"
              className="h-fit pt-6 w-full bg-gradient-to-br from-blue-600/10 to-cyan-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >
              <CardContent className="space-y-6 p-0">
                <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    Adroit handyman service considers home as a very important part of our lives. Adroit has emerged to bring that suiting feeling and comfort to your home. you ever thought of a place that has all the answers to virtually all that concerns your home because we pay detailed attention to all that concerns it far beyond expectations. We make the world a better place for you with our delightful services.
                  </Balancer>
                </p>
                <Image
                  width={600}
                  height={400}
                  alt="illustration"
                  src="/assets/images/home.webp"
                  className="overflow-hidden rounded-b-xl"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Perspective;