'use client'

import { Services } from "@/components/landing/Services"
import Features from "@/components/landing/Features"
import FAQ from "@/components/sections/FAQ"
import { MobileView } from "@/components/landing/Services"

const page = () => {
  return (
    <main>
      <section className="hidden sm:block">
        <Services />
      </section>
      <MobileView />

      <Features />

      <FAQ />
    </main>
  )
}

export default page