'use client'

import About from "@/components/sections/About"
import Perspective from "@/components/sections/Perspective"
import FAQ from "@/components/sections/FAQ"
import { Services } from "@/components/landing/Services"
import { MobileView } from "@/components/landing/Services"

const page = () => {
  return (

    <main className="my-8">
      <About />

      <Perspective />

      <section className="hidden sm:block">
        <Services />
      </section>
      <MobileView />

      <FAQ />
    </main>
  )
}

export default page