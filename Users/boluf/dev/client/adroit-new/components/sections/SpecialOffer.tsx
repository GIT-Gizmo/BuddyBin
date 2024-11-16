import Balancer from "react-wrap-balancer"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

const SpecialOffer = () => {
  return (
    <section className="py-4 text-center">

      <div className="">

        <Card
          id="2"
          className="h-fit bg-gradient-to-br from-blue-600/10 to-cyan-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3 py-6"
        >

          <h3 className='my-3 font-urbanist text-lg font-extrabold tracking-tight sm:text-xl md:text-2xl lg:text-3xl'>
            <Balancer>
              SPECIAL{' '}
              <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                OFFERS
              </span>
            </Balancer>
          </h3>

          <CardContent className="px-8">
            <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
              <Balancer>
                Enjoy 50% one off discount on all home cleaning services and 20% One off discount on every other services from 1st of January 2024- 31st December 2024. With the exception of our one-year warranty plan.
              </Balancer>
            </p>
          </CardContent>
        </Card>
      </div>

    </section>
  )
}

export default SpecialOffer;