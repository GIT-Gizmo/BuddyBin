'use client'

import Balancer from 'react-wrap-balancer'

import ApplyForm from '@/components/forms/application'
import About from '@/components/landing/About'
import FAQ from '@/components/sections/FAQ'

const page = () => {
  return (
    <main>
      <div className='w-[90vw] mt-8 md:mt-16 mx-auto text-center'>
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          <Balancer>
            Join Our{" "}
            <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-extrabold text-transparent">
              Team
            </span>
          </Balancer>
        </h2>

        <h3 className="text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
            Are you skilled and have over 5years working experience? Join our team today. Fill the form below to process your application. <br /> We&apos;ll contact you after a review to confirm your application has been received.  Thank you for your interest in joining us!
          </Balancer>
        </h3>
      </div>

      <ApplyForm />

      <About />

      <FAQ />

    </main>
  )
}

export default page