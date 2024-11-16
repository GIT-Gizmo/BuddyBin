'use client'

import Balancer from "react-wrap-balancer";
import Contact from "@/components/forms/contact";

const page = () => {
  return (
    <section
      id="contact-section"
      aria-label="contact section"
      className="w-full pt-12 pb-2"
    >
      <div className="container grid max-w-4xl grid-cols-1 justify-center gap-8 md:gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Feel free to email us with any questions you might have. We're always happy to hear from you, whether you have a question, a comment, or a suggestion.. We would also love to know your feedback!
            </Balancer>
          </h3>
        </div>

        <Contact />
      </div>
    </section>
  );
}

export default page;