"use client";


import { footer } from "@/data";
import { IconBrandFacebookFilled, IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled, IconBrandTwitterFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const Footer = () => {
    return (
        <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <Link href={"/"} className="text-3xl">
                            <Image
                                src="/assets/images/LOGO.webp"
                                alt="Companies logo"
                                width={50}
                                height={50}
                                className="w-20"
                            />
                        </Link>
                        <p className="max-w-xs mt-4 text-sm">
                            <Balancer>
                                Regardless of the size of your project you can rely on us for exceptional workmanship at affordable rates.
                            </Balancer>
                        </p>
                        <div className="flex mt-8 space-x-6">
                            <Link
                                href="https://www.facebook.com/profile.php?id=100017192357822&sk"
                                target="_blank"
                            >
                                <IconBrandFacebookFilled className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
                            </Link>
                            <Link href="https://github.com/NaseemKhan005" target="_blank">
                                <IconBrandGithubFilled className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/naseem-khan-275275258/"
                                target="_blank"
                            >
                                <IconBrandLinkedinFilled className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
                            </Link>
                            <Link href="https://twitter.com/NaseemK69128903" target="_blank">
                                <IconBrandTwitterFilled className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/naseem_khan005/"
                                target="_blank"
                            >
                                <IconBrandInstagramFilled className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
                        {footer.map(({ title, navLinks }) => (
                            <div key={title}>
                                <p className="font-medium">{title}</p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm">
                                    {navLinks.map(({ link, href, external }) => (
                                        <Link
                                            key={link}
                                            href={href}
                                            target={external ? "_blank" : undefined}
                                            rel={external ? "noreferrer" : undefined}
                                            className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                                        >
                                            {link}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="mt-8 text-xs"><Balancer>Copyright © 2024 Adroit Handyman. All Rights Reserved.</Balancer></p>
            </div>
        </footer>
    );
};

export default Footer;