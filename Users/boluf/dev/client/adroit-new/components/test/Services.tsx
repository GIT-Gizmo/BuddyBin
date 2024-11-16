"use client";

import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";
import Balancer from "react-wrap-balancer"

import { cn } from '@/lib/utils'
import { buttonVariants } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { services } from "../../data";

export const Services = () => {

    return (
        <section className='py-8 md:py-16 w-full mx-auto bg-blue-100'>
            <h2 className="font-urbanist text-center text-[#202020] text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl my-8">
                <Balancer>
                    Our {' '}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Services
                    </span>
                </Balancer>
            </h2>

            <div className="w-[95vw] mx-auto grid sm:hidden grid-cols-1 grid-rows-14 gap-3 mb-8">
                {services.map((data, index) => (
                    <Drawer key={index}>
                        <DrawerTrigger asChild>

                            <button key={index} className={data.styles} style={{ backgroundImage: `url(${data.image})` }}>

                                <span className={data.titleStyles}>
                                    {data.title}
                                </span>

                            </button>

                        </DrawerTrigger>

                        <DrawerContent className="bg-gradient-to-br from-gray-600/60 to-blue-400/20">
                            <div className="mx-auto w-full max-w-xl">
                                <DrawerHeader>

                                    <DrawerTitle>
                                        <span className="font-bold md:text-2xl">{data.title}</span>
                                    </DrawerTitle>

                                    <DrawerDescription>
                                        <p className="text-black">

                                            <Balancer>
                                                {data.description}
                                            </Balancer>

                                        </p>
                                    </DrawerDescription>

                                </DrawerHeader>

                                <DrawerFooter className="md:flex md:flex-row justify-around">
                                    <Link
                                        href="/book"
                                        className={cn(
                                            buttonVariants({ size: "lg" }),
                                            ""
                                        )}
                                    >
                                        Book Now
                                    </Link>

                                    <Link
                                        href="/estimate"
                                        className={cn(
                                            buttonVariants({ variant: "outline", size: "lg" }),
                                            " bg-blue-50"
                                        )}
                                    >
                                        Get Estimate
                                    </Link>
                                </DrawerFooter>
                            </div>
                        </DrawerContent>
                    </Drawer>
                ))
                }
            </div>

            {/* Large Mobile view 640px - 767px */}
            <div className="w-[95vw] mx-auto hidden sm:grid md:hidden grid-cols-2 grid-rows-7 gap-4 mb-8">
                {services.map((data, index) => (
                    <Drawer key={index}>
                        <DrawerTrigger asChild>

                            <button key={index} className={data.styles} style={{ backgroundImage: `url(${data.image})` }}>

                                <span className={data.titleStyles}>
                                    {data.title}
                                </span>

                            </button>

                        </DrawerTrigger>

                        <DrawerContent className="bg-gradient-to-br from-gray-600/60 to-blue-400/20">
                            <div className="mx-auto w-full max-w-xl">
                                <DrawerHeader>

                                    <DrawerTitle>
                                        <span className="font-bold md:text-2xl">{data.title}</span>
                                    </DrawerTitle>

                                    <DrawerDescription>
                                        <p className="text-black">

                                            <Balancer>
                                                {data.description}
                                            </Balancer>

                                        </p>
                                    </DrawerDescription>

                                </DrawerHeader>

                                <DrawerFooter className="md:flex md:flex-row justify-around">
                                    <Link
                                        href="/book"
                                        className={cn(
                                            buttonVariants({ size: "lg" }),
                                            ""
                                        )}
                                    >
                                        Book Now
                                    </Link>

                                    <Link
                                        href="/estimate"
                                        className={cn(
                                            buttonVariants({ variant: "outline", size: "lg" }),
                                            " bg-blue-50"
                                        )}
                                    >
                                        Get Estimate
                                    </Link>
                                </DrawerFooter>
                            </div>
                        </DrawerContent>
                    </Drawer>
                ))
                }
            </div>

            {/* Tablet and Desktop view 768px upwards */}
            <div className="w-[95vw] mx-auto hidden md:grid grid-cols-11 grid-rows-9 gap-2 mb-8">
                {services.map((data, index) => (
                    <Drawer key={index}>
                        {data.title === "ADROIT" || data.title === "HANDYMAN" || data.title === "SERVICES" ? (
                            <div className={data.styles}>
                                <span className={data.titleStyles}>
                                    {data.title === "ADROIT" ? (
                                        <span className={data.titleStyles}>
                                            <p className='m-0 p-0'>A</p>
                                            <p className='m-0 p-0'>D</p>
                                            <p className='m-0 p-0'>R</p>
                                            <p className='m-0 p-0'>O</p>
                                            <p className='m-0 p-0'>I</p>
                                            <p className='m-0 p-0'>T</p>
                                        </span>
                                    ) :
                                        (data.title === "SERVICES" ? (
                                            <span className={data.titleStyles}>
                                                <p className='m-0 p-0'>S</p>
                                                <p className='m-0 p-0'>E</p>
                                                <p className='m-0 p-0'>R</p>
                                                <p className='m-0 p-0'>V</p>
                                                <p className='m-0 p-0'>I</p>
                                                <p className='m-0 p-0'>C</p>
                                                <p className='m-0 p-0'>E</p>
                                                <p className='m-0 p-0'>S</p>
                                            </span>
                                        ) :
                                            <span className={data.titleStyles}>
                                                {data.title}
                                            </span>
                                        )
                                    }
                                </span>
                            </div>) :
                            (data.title === "LOGO" ?
                                <div key={index} className={data.styles} style={{ backgroundImage: `url(${data.image})` }}>
                                </div> :
                                <DrawerTrigger asChild>

                                    <button key={index} className={data.styles} style={{ backgroundImage: `url(${data.image})` }}>
                                        <span className={data.titleStyles}>
                                            {data.title}
                                        </span>
                                    </button>

                                </DrawerTrigger>
                            )
                        }

                        <DrawerContent className="bg-gradient-to-br from-gray-600/60 to-blue-400/20">
                            <div className="mx-auto w-full max-w-xl">
                                <DrawerHeader>
                                    <DrawerTitle>
                                        <span className="font-bold md:text-2xl">{data.title}</span>
                                    </DrawerTitle>

                                    <DrawerDescription>
                                        <p className="text-black">
                                            <Balancer>
                                                {data.description}
                                            </Balancer>
                                        </p>
                                    </DrawerDescription>
                                </DrawerHeader>

                                <DrawerFooter className="md:flex md:flex-row justify-around">
                                    <Link
                                        href="/book"
                                        className={cn(
                                            buttonVariants({ size: "lg" }),
                                            ""
                                        )}
                                    >
                                        Book Now
                                    </Link>

                                    <Link
                                        href="/estimate"
                                        className={cn(
                                            buttonVariants({ variant: "outline", size: "lg" }),
                                            " bg-blue-50"
                                        )}
                                    >
                                        Get Estimate
                                    </Link>
                                </DrawerFooter>
                            </div>
                        </DrawerContent>
                    </Drawer>
                )
                )
                }
            </div>
        </section>
    )
}


export const MobileView = () => {
    const cards = mobileServices.map((card, index) => (
        <Card key={card.src} card={card} index={index} className="sm:hidden" />
    ));

    return (
        <div className="w-full h-full py-20 sm:hidden">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Get to know your iSad.
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const Details = () => {
    return (
        <>
            {mobileServices.map(({ title, description }: { title: string, description: string }) => (
                <Drawer>
                    <DrawerContent className="bg-gradient-to-br from-gray-600/60 to-blue-400/20">
                        <div className="mx-auto w-full max-w-xl">
                            <DrawerHeader>
                                <DrawerTitle>
                                    <span className="font-bold md:text-2xl">{title}</span>
                                </DrawerTitle>
                                <DrawerDescription>
                                    <p className="text-black">
                                        <Balancer>
                                            {description}
                                        </Balancer>
                                    </p>
                                </DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter className="md:flex md:flex-row justify-around">
                                <Link
                                    href="/book"
                                    className={cn(
                                        buttonVariants({ size: "lg" }),
                                        ""
                                    )}
                                >
                                    Book Now
                                </Link>
                                <Link
                                    href="/estimate"
                                    className={cn(
                                        buttonVariants({ variant: "outline", size: "lg" }),
                                        " bg-blue-50"
                                    )}
                                >
                                    Get Estimate
                                </Link>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            ))}
        </>
    )
};

const mobileServices = [
    {
        src: "/assets/images/cleaning.webp",
        title: "CLEANING",
        info: "Thorough residential and commercial cleaning",
        content: <Details />,
        description: "Adroit cleaning service is a dependable service that you can trust for your residential and commercial cleaning services. We are devoted to making your homes and offices gleaming & sparkling with our service. Our indispensable team of experts are ready to get it done at a very affordable price.",
    },
    {
        src: "/assets/images/maintenance.webp",
        title: "MAINTENANCE",
        info: "Comprehensive property care and upkeep",
        content: <Details />,
        description: "Maintaining a home involves more than just fixing occasional issues; it requires consistent care to ensure your property remains in top condition. At Adroit HandyMan Services, we understand the importance of proactive maintenance to preserve the integrity and value of your home. Our comprehensive maintenance services are designed to address a wide range of needs, from routine inspections to preventive repairs, allowing you to enjoy peace of mind knowing that your home is well-cared for.",
    },
    {
        src: "/assets/images/electrical.webp",
        title: "ELECTRICAL",
        info: "Reliable home and office electrical work",
        content: <Details />,
        description: "At adroit, our electrical team can complete a variety of jobs within your homes and offices. Regardless of your size of project our service produces high-quality results from installations to lighting to wiring and many more. Our small jobs cover a variety, such as installing or repairing outlets, switches, and other electrical fixtures.",
    },
    {
        src: "/assets/images/installation.webp",
        title: "INSTALLATION",
        info: "Expert installations and home upgrades",
        content: <Details />,
        description: "Our skilled craftsmen are the perfect solution to all of your installation projects, needs and upgrades around your home and commercials. We assure you of the highest quality craftsmanship. with exquisite training and experience. Adroit handy man service is here to help you with all types of projects and installation services you need, assuring you of highest quality craftsmanship, using the correct tools, right skill, and attention to all details needed for your project. Trust us to help you get it done right!",
    },
    {
        src: "/assets/images/plumbing.webp",
        title: "PLUMBING",
        info: "Fast, reliable plumbing solutions",
        content: <Details />,
        description: "Most of the plumbing problems households face demand quick and durable solutions. At adroit, we deliver specialized plumbing services to residential, commercial, and industrial areas around Lagos and Ogun state. We put heavy emphasis on saving customers time and money by providing sustainable solutions. You have a burst pipe or leaking pipe that requires immediate fixing, don’t stress it! We got your covered with our standby plumbing service.",
    },
    {
        src: "/assets/images/painting.webp",
        title: "PAINTING",
        info: "Interior and exterior painting services",
        content: <Details />,
        description: "Our professional painting service is one of our most highly-sought after service. Adroit handyman service offers a variety of painting options to meet your homes interior and exterior needs. Whether you are looking to emphasize an accent wall to standout, give a facelift to your children’s room, or you want to liven up your home’s exterior trim that has taken a beating from years of harsh weather, painting is a very effective way to beautify and add your desired touch to your home.",
    },
    {
        src: "/assets/images/drain-cleaning.webp",
        title: "DRAIN CLEANING",
        info: "Efficient gutter and drain cleaning",
        content: <Details />,
        description: "Drains and gutters is that aspect of your home maintenance that shouldn’t be overlooked. It requires strict attention in order to serve its intended purpose. Let us do the dirty work for you. Book our professionals today for the proper drain cleaning of your home and environment maintenance.",
    },
    {
        src: "/assets/images/flooring.webp",
        title: "FLOORING/TILING",
        info: "Professional flooring and tiling services",
        content: <Details />,
        description: "Do you want to upgrade your bathroom? Do you have a cracked or loose tile in your home? Or you need your full home or office tile installation? Adroit handyman service is your one-call solution. we will get your job done on time, on budget and done right.",
    },
    {
        src: "/assets/images/repair.jpg",
        title: "APPLIANCE REPAIR",
        info: "Expert appliance repairs and maintenance",
        content: <Details />,
        description: "House hold appliances play a major role in your overall comfort. It can be easy to forget how much work appliances do for us but it becomes clear very quickly when they breakdown. Staying on top of home repairs is our specialty. Professionally trained and skilled craftsmen handle any and all repairs around your home, we ensure it functions effectively and properly maintained to beautify your home.",
    },
    {
        src: "/assets/images/hvac.webp",
        title: "AIR CONDITIONING",
        info: "Residential and commercial AC services",
        content: <Details />,
        description: "Do you need to install your newly bought air conditioning system? Or did your air-conditioning system suddenly loose its cooling power? Our HVAC professionals are always available to handle all your residential and commercial air conditioning services. Quality services at an affordable price.",
    },
    {
        src: "/assets/images/lighting.webp",
        title: "LIGHTING",
        info: "Lighting solutions for every room",
        content: <Details />,
        description: "Lighting plays a crucial role in enhancing the ambiance, functionality, and aesthetics of your home. Whether you’re looking to brighten up a dark corner, add accent lighting to highlight architectural features, or upgrade to energy-efficient LED fixtures, Adroit HandyMan Services is here to help. Our professional lighting services are tailored to meet your unique needs, ensuring that every room in your home is beautifully illuminated to your specifications.",
    },
    {
        src: "/assets/images/carpentry.webp",
        title: "CARPENTRY/FURNITURE",
        info: "Quality carpentry and furniture solutions",
        content: <Details />,
        description: "You need a top rated carpenter to handle your home or office carpentry needs? Our skilled craftsmen can make all of your interior and exterior carpentry projects come to life with our skill and years of experience, we listen to your project desires and depict the right materials and design needed for such project whether residential of commercial. We make your furniture and fittings look good.",
    },
    {
        src: "/assets/images/fencing.webp",
        title: "FENCING & GATES",
        info: "Secure, reliable fencing solutions",
        content: <Details />,
        description: "Your home fencing and gates is an important part of your home, as you should know that it is a practical way to keep children and pets safe, make your property lines, increase your homes overall value, and act as safety barriers and provide your home security. If you need a fence or fence gate installed. Adroit handyman service is always at your service.",
    },
    {
        src: "/assets/images/errand.webp",
        title: "GENERAL HELP",
        info: "All-purpose home help services",
        content: <Details />,
        description: "Life is full of surprises, and so is home ownership. From minor repairs to odd jobs and everything in between, there’s always something that needs attention around the house. That’s where Adroit HandyMan Services steps in. Our general help services are designed to be your go-to solution for tackling those everyday tasks and unexpected challenges, allowing you to focus on what matters most while we take care of the rest.",
    },
]