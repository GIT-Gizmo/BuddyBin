import Balancer from "react-wrap-balancer"
import Link from 'next/link'

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { IconCircleArrowRightFilled } from "@tabler/icons-react"

const About = () => {

  return (
    <section id="about-section" aria-label="about section" className="w-full pb-16 py-4">
      <div className="container grid max-w-6xl justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              About{" "}
              <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-extrabold text-transparent">
                Us
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              NOT JUST ANY{" "}
              <span className="font-semibold text-foreground">
                HANDYMAN
              </span>{" "}
              WILL DO.
            </Balancer>
          </h3>
        </div>

        <div className="grid w-[95vw] md:max-w-6xl grid-cols-1 gap-2">
          <div className="">

            <Card
              id="2"
              className="h-fit bg-gradient-to-br from-blue-600/10 to-cyan-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3 items"
            >
              <CardContent className="py-6 md:py-16">
                <p className="px-1 md:px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    Adroit handyman service is a home improvement company that improves the value and appearance of your homes & commercials. Adroit provides you with professional craftsmen/handymen that have good working experience in tackling several forms of challenges that has to do with your residents and commercials. Our craftsmen are background checked, skilled and possess good working experience. we take pride in our quality jobs and detail-oriented services as we ensure 100% customer satisfaction on every job. Regardless of the size of your project you can rely on us for exceptional workmanship at affordable rates.
                  </Balancer>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="md:mt-4">

            <Card
              id="4"
              className="h-fit w-full bg-gradient-to-br from-blue-400/10 to-cyan-600/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
            >

              <h3 className='px-16 my-3 text-muted-foreground sm:text-xl sm:leading-8'>ADROIT WARRANTY PLAN</h3>


              <CardContent className="p-0">
                <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                  <Balancer>
                    Adroit handyman services have designed a one-year warranty plan for your home maintenance and craftsmanship to help you love your home. We keep your home up and running and your budget on track.
                  </Balancer>
                </p>

                <Link href="/plans" className='flex items-center gap-2 justify-center w-full md:w-fit float-right p-2 rounded-b-md transition-all bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-none hover:border-blue-600 hover:border hover:bg-transparent hover:text-blue-600 active:border-blue-600 active:text-blue-600 active:link-gradient'>Check Out Our Warranty Plan <IconCircleArrowRightFilled className="text-blue-700" /></Link>

              </CardContent>

            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;