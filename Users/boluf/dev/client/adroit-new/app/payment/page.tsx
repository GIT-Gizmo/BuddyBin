'use client'

import Link from "next/link"
import Pay from "@/components/sections/Pay"
import FAQ from "@/components/sections/FAQ"

const page = () => {
  return (
    <>
      <section className="w-full py-3 md:py-6 lg:py-8 bg-gradient-to-r from-blue-600/30 to-cyan-500/30">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Image showcasing easy payment"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom w-full h-[400px] md:h-[550px] lg:h-[450px] xl:h-[550px] lg:order-last lg:aspect-square"
              height="550"
              src="/assets/images/payment.webp"
              width="550"
            />
            <div className="flex flex-col mx-auto lg:mx-0 justify-center space-y-1">
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Make
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{' '} Payment</span>
                </h1>
                <p className="max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8">Pick your preferred payment method.</p>
              </div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:text-[#3B82F6] border border-solid border-transparent transition-all m-[0.5em] hover:border-[#3B82F6] hover:bg-none active:border-[#3B82F6] active:text-[#3B82F6] active:link-gradient"
                  href="#pay"
                >
                  Bank Transfer
                </Link>

                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border bg-[#202020] px-8 text-sm font-medium shadow-sm text-white hover:text-[#202020] border-solid border-transparent transition-all m-[0.5em] hover:border-[#202020] hover:bg-gray-300 active:border-[#3B82F6] active:text-[#3B82F6] active:link-gradient"
                  href="https://paystack.com/pay/adroithandymanservices" target="_blank" rel="noopener noreferrer"
                >
                  Paystack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pay">
        <Pay />
      </section>

      <FAQ />
    </>
  )
}

export default page