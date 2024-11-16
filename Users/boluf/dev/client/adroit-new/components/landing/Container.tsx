"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Services } from "@/components/landing/Services";
import Link from "next/link";
import MagicButton from "../MagicButton";
import { Send } from "lucide-react";

export function HeroContainerScroll() {
    return (
        <div className="hidden md:flex flex-col overflow-hidden bg-[#F0F2F5]">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="h-full w-full text-4xl font-semibold text-black mb-10">
                            Explore Our Services
                        </h1>
                        <span className="capitalize text-4xl md:text-[4.5rem] font-bold mt-1 leading-none">
                            Essential solutions for every home and office
                        </span>
                    </>
                }
            >
                <Services />
            </ContainerScroll>

            <Link href="/services" className="text-rose-600 hover:underline">
                <MagicButton
                    title="View all services"
                    icon={<Send size={10} />}
                    position="right"
                />
            </Link>
        </div>
    );
}
