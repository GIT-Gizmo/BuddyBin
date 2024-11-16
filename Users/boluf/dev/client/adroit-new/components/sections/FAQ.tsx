import Link from "next/link"
import Balancer from "react-wrap-balancer"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  const frequentlyAskedQuestions = [
    {
      question: 'Who is adroit handyman service?',
      answer: 'Adroit handyman service is a home improvement company that provides you with several services needed to improve the value and appearance of your residents and commercials with help of our professionally trained and experienced handymen/craftsmen. We offer great warranty plans that help you love your home better. We take pride in our quality jobs and detail oriented services as we ensure 100% customer satisfaction on every job.'
    },
    {
      question: 'Who are handymen/craftsmen?',
      answer: 'Handyman or craftsmen men are the trusted and well experienced contractors that we send to carry out your residential and commercial improvement services. They are usually background checked and well experienced.'
    },
    {
      question: 'How does it work?',
      answer: <ol type="1">
        <li>
          <p>Pick a service</p>
          <p>Find your service and select your required service. </p>
        </li>
        <li>
          <p>Book online or get estimate online</p>
          <p>Using our book now! feature simply tell us what the problem is and when and where you want our professional to show up. you can also get a free estimate of your services.</p>
        </li>

        <li>
          <p>Pay after work is done</p>
          <p>We will send you a professional craftsman/team who will fix your problem. You pay only after the work is done.</p>
        </li>
      </ol>
    },
    {
      question: 'Do I need inspection before I purchase a warranty?',
      answer: 'Not in most cases. But the information we get from inspection help us provide the most accurate quote for your home warranty service. Still, you can purchase a warranty from adroit handyman services without inspection.'
    },
    {
      question: 'My home systems and appliances are old. Will adroit warranty service cover them?',
      answer: 'Yes. No matter how old your home or your home system and appliances are, adroit warranty service covers them.'
    },
    {
      question: 'What are my payment options?',
      answer: <ol type="A">
        <li>You can do a bank transfer at the end of the job (check our payment page for bank details or ask crafts man).</li>

        <li>You can also pay online using your credit card. Checkout our payment page.</li>
      </ol>
    },
    {
      question: 'Special materials or items need to be purchased for my job. How would this work?',
      answer: 'Once in your home, your craftsman can provide you a list of materials that you can purchase yourself. As an alternative, our professional craftsmen can purchase materials on your behalf.'
    },
  ];

  return (
    <section id="faq-section" aria-label="faq section" className="mb-16 py-4 w-[95vw] md:w-[80vw] mx-auto text-left">
      <div className="container grid max-w-6xl gap-8 md:gap-16">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Questions
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Find the answers to the most common questions about our services.
              Feel free to{" "}
              <Link
                href="/contact"
                className="font-semibold text-foreground underline-offset-4 transition-all hover:underline"
              >
                email us
              </Link>{" "}
              if you still couldn&apos;t find what you were looking for.
            </Balancer>
          </h3>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8">
          {frequentlyAskedQuestions.map((item) => (
            <Accordion key={item.question} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="sm:text-xl sm:leading-8 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground sm:text-lg sm:leading-8">
                  <Balancer>{item.answer}</Balancer>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ;