'use client'

import Balancer from 'react-wrap-balancer'

// Import components
import { Services } from '@/components/landing/Services'
import FAQ from '@/components/sections/FAQ'
import EstimateForm from '@/components/forms/estimate'
import { MobileView } from '@/components/landing/Services'

const page = () => {

  return (
    <>
      <div className='w-[90vw] mt-8 md:mt-16 mx-auto text-center'>
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          <Balancer>
            Get {" "}
            <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-extrabold text-transparent">
              Estimate
            </span>
          </Balancer>
        </h2>

        <h3 className="text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
            With adroit &apos;estimate form&apos; you can get service pricing tailored to your need. <br /> Simply tell us about your project, and services needed, fill the required information below and then submit. <br /> We&apos;ll contact you within a short while with your estimated service request. Thank you!
          </Balancer>
        </h3>
      </div>

      <EstimateForm />

      <section className="hidden sm:block">
        <Services />
      </section>
      <MobileView />

      <FAQ />
    </>
  )
}

export default page