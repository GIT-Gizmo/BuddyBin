'use client'

import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import PricingSection from "@/components/sections/Pricing";
import Features from "@/components/landing/Features";
import { Services } from "@/components/landing/Services";
import FAQ from '@/components/sections/FAQ';
import { MobileView } from '@/components/landing/Services';

const page = () => {
  return (
    <>
      <PricingSection />

      <section id="about-section" aria-label="about section" className="w-full py-16">
        <div className="container grid max-w-6xl justify-center gap-16">
          <h3 className="text-muted-foreground sm:text-xl sm:leading-8 text-center">
            <Balancer>
              WE KEEP YOUR HOME RUNNING AND {" "}
              <span className="font-semibold text-foreground">
                YOUR BUDGET ON TRACK
              </span>{" "}
              WITH OUR FLEXIBLE PLANS AND FLEXIBLE PRICING.
            </Balancer>
          </h3>

          <div className="grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 text-center">
            <div className="space-y-4 md:space-y-6">

              <Card
                id="2"
                className="h-fit pt-6 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
              >
                <CardContent className="space-y-6 p-auto md:px-4">
                  <p className="px-4 text-base font-bold leading-8 tracking-wide text-left sm:text-center mx-auto text-muted-foreground">
                    <Balancer>
                      The cost of your warranty plan depends on a few factors:
                    </Balancer>
                  </p>

                  <div className="grid justify-center">
                    <ul className="text-left list-disc">
                      <li>The level of coverage needed for your plan selection.</li>
                      <li>The size of your home.</li>
                      <li>Any additional coverage added to your plan.</li>
                      <li>Service fee.</li>
                    </ul>
                  </div>

                  <p className="text-left mx-auto lg:text-center">
                    <Balancer>
                      To subscribe, simply select one of the plans above and provide us with the address, this information helps us provide the most accurate price quote for your home. Our plans begin with as low as #20,000 per month.
                    </Balancer>
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 md:space-y-6">

              <Card
                id="4"
                className="h-fit pt-6 w-full bg-gradient-to-br from-blue-600/10 to-cyan-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
              >
                <CardContent className="space-y-6 p-auto">
                  <p className="px-4 text-base font-bold leading-8 tracking-wide text-muted-foreground">
                    <Balancer>
                      NEED MORE COVERAGE? NO PROBLEM. WE GOT YOU!
                    </Balancer>
                  </p>

                  <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                    <Balancer>
                      Have a pool?  Want to protect your electronics? Every plan can be tailored to fit your needs, simply communicate your requirements, and we'll tailor a plan to suit your specific needs. Keep in mind, opting for extended coverage may incur additional charges, but the peace of mind it brings is priceless..
                    </Balancer>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <section className="hidden sm:block">
        <Services />
      </section>
      <MobileView />

      <FAQ />
    </>
  )
}

export default page