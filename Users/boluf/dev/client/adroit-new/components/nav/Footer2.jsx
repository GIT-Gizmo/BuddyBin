import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { cn } from "@lib/utils";
import { buttonVariants } from "@components/ui/button";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

  return (
    <footer
      id="footer"
      aria-label="footer"
      className="grid gap-8 bg-blue-100 pb-8 pt-16"
    >
      <div className="container flex flex-col gap-8 sm:flex-row">

        <div className="hidden flex-col gap-4 sm:flex sm:w-1/3 xl:pl-24">
          <img src="/assets/images/LOGO.webp" alt="Companies logo" className="w-20" />

          <p className="text-sm font-medium leading-5 tracking-wide lg:text-base 2xl:text-lg">
            <Balancer>
              Regardless of the size of your project you can rely on us for exceptional workmanship at affordable rates.
            </Balancer>
          </p>
        </div>

        <div className="grid flex-1 grid-cols-3 gap-4 md:gap-8">
          {navItemsFooter.map((item) => (
            <div
              key={item.title}
              className="space-y-1 text-center sm:text-start md:space-y-2 md:text-start"
            >
              <h4 className="text-sm font-semibold md:text-base lg:text-lg">
                <Balancer>{item.title}</Balancer>
              </h4>
              <ul className="space-y-1 md:space-y-2">
                {item.items.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      target={link?.external ? "_blank" : undefined}
                      rel={link?.external ? "noreferrer" : undefined}
                      className="text-xs text-muted-foreground underline-offset-8 transition-all hover:underline hover:opacity-70 md:text-sm lg:text-lg"
                    >
                      {link.title}
                      <span className="sr-only">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container grid md:grid-cols-2 gap-3 md:gap-0 items-center mx-auto md:justify-between w-[90vw] pt-8 border-t-[1px] border-t-[#3F3E45]">
        <p className="text-sm text-muted-foreground xl:text-base text-center md:text-left">
          <Balancer>Copyright © 2024 Adroit Handyman. All Rights Reserved.</Balancer>
        </p>

        <div className="flex gap-2 md:gap-6 items-center justify-center md:justify-end">
          <a
            href="https://web.facebook.com/Adroit2022"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "icon", variant: "ghost" }),
              "rounded-full p-0.5 text-blue-700 transition-all hover:scale-110"
            )}
          >
            <FaFacebook className="h-full w-full" />
          </a>

          <a
            href="https://www.instagram.com/adroit_ng/"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "icon", variant: "ghost" }),
              "rounded-full text-pink-700 transition-all hover:scale-110"
            )}
          >
            <FaInstagram className="h-full w-full" />
          </a>

          <a
            href="https://wa.me/+2349072256332"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "icon", variant: "ghost" }),
              "rounded-full text-green-700 transition-all hover:scale-110"
            )}
          >
            <FaWhatsapp className="h-full w-full" />
          </a>

          <a
            href="https://twitter.com/Adroit_ng"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "icon", variant: "ghost" }),
              "rounded-full text-{#202020} transition-all hover:scale-110"
            )}
          >
            <FaXTwitter className="h-full w-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer