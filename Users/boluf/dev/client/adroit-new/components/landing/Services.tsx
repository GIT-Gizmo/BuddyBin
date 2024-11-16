"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";
import MagicButton from "../MagicButton";
import { Send } from "lucide-react";
import { FocusCards } from "../ui/focus-cards";

export const Services = () => {

    return (
        <section className='h-full w-full mx-auto bg-blue-100 p-2 md:p-4'>
            <FocusCards cards={services} />
        </section>
    )
}


export const MobileView = () => {
    const cards = services.map((card, index) => (
        <Card key={card.src} card={card} index={index} className="md:hidden" />
    ));

    return (
        <div className="w-full h-full flex flex-col gap-8 py-20 md:hidden">
            <h1 className="text-xl font-semibold text-black">
                Explore Our Services
            </h1>
            <span className="capitalize text-4xl md:text-[4.5rem] font-bold mt-1 leading-none">
                Essential solutions for every home and office
            </span>

            <Carousel items={cards} />

            <Link href="/services" className="w-[80%] mx-auto">
                <MagicButton
                    title="View all services"
                    icon={<Send size={10} />}
                    position="right"
                />
            </Link>
        </div>
    );
}

const services = [
    {
        src: "/assets/images/cleaning.webp",
        title: "CLEANING",
        info: "Thorough residential and commercial cleaning",
    },
    {
        src: "/assets/images/maintenance.webp",
        title: "MAINTENANCE",
        info: "Comprehensive property care and upkeep",
    },
    {
        src: "/assets/images/electrical.webp",
        title: "ELECTRICAL",
        info: "Reliable home and office electrical work",
    },
    {
        src: "/assets/images/installation.webp",
        title: "INSTALLATION",
        info: "Expert installations and home upgrades",
    },
    {
        src: "/assets/images/plumbing.webp",
        title: "PLUMBING",
        info: "Fast, reliable plumbing solutions",
    },
    {
        src: "/assets/images/painting.webp",
        title: "PAINTING",
        info: "Interior and exterior painting services",
    },
    // {
    //     src: "/assets/images/drain-cleaning.webp",
    //     title: "DRAIN CLEANING",
    //     info: "Efficient gutter and drain cleaning",
    // },
    // {
    //     src: "/assets/images/flooring.webp",
    //     title: "FLOORING/TILING",
    //     info: "Professional flooring and tiling services",
    // },
    // {
    //     src: "/assets/images/repair.jpg",
    //     title: "APPLIANCE REPAIR",
    //     info: "Expert appliance repairs and maintenance",
    // },
    // {
    //     src: "/assets/images/hvac.webp",
    //     title: "AIR CONDITIONING",
    //     info: "Residential and commercial AC services",
    // },
    // {
    //     src: "/assets/images/lighting.webp",
    //     title: "LIGHTING",
    //     info: "Lighting solutions for every room",
    // },
    // {
    //     src: "/assets/images/carpentry.webp",
    //     title: "CARPENTRY/FURNITURE",
    //     info: "Quality carpentry and furniture solutions",
    // },
    // {
    //     src: "/assets/images/fencing.webp",
    //     title: "FENCING & GATES",
    //     info: "Secure, reliable fencing solutions",
    // },
    // {
    //     src: "/assets/images/errand.webp",
    //     title: "GENERAL HELP",
    //     info: "All-purpose home help services",
    // },
]