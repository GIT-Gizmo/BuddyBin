'use client'

import { Services } from '@/components/landing/Services'
import SpecialOffer from '@/components/sections/SpecialOffer'
import BookForm from '@/components/forms/booking'

import Balancer from 'react-wrap-balancer'
import { MobileView } from '@/components/landing/Services'

const page = () => {

  return (
    <>
      <div className='w-[90vw] mt-8 md:mt-16 mx-auto text-center'>
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          <Balancer>
            Book{" "}
            <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-extrabold text-transparent">
              Now
            </span>
          </Balancer>
        </h2>

        <h3 className="text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
            With adroit &apos;book now&apos; you can book your services to your desired time, day or night. <br /> Simply tell us about your project, choose your desired time slot and date, fill the required information below and then submit. <br /> We&apos;ll contact you within a short while to proceed with your request. Thank you!
          </Balancer>
        </h3>
      </div>

      <BookForm />

      <section className="hidden sm:block">
        <Services />
      </section>
      <MobileView />

      <SpecialOffer />
    </>
  )
}

export default page