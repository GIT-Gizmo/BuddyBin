'use client'

import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Perspective from '@/components/sections/Perspective';
import SpecialOffer from '@/components/sections/SpecialOffer'
import { Testimonials } from '@/components/landing/Testimonials'
import FAQ from '@/components/sections/FAQ'
import '@/styles/globals.css';
import About from '@/components/landing/About';
import Work from '@/components/sections/HowItWorks';
import { MobileView } from '@/components/landing/Services';
import { HeroContainerScroll } from '@/components/landing/Container';

const Home = () => {

  return (
    <main className='text-center'>

      <Hero />

      <div className="w-full relative">
        <HeroContainerScroll />
        <MobileView />
      </div>

      <About />

      <Features />

      <Perspective />

      <Work />

      <SpecialOffer />

      <Testimonials />

      <FAQ />

    </main>
  );
}

export default Home
