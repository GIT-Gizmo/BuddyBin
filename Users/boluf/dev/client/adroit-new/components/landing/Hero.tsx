import Link from "next/link";
import { motion } from "framer-motion";

import { HeroContainerScroll } from "@/components/landing/Container";
import { MobileView } from "./Services";
import { ImagesSlider } from "@/components/ui/images-slider";
import TextCarousel from "../TextCarousel";

const Hero = () => {
    const images = [
        "/assets/images/plumbing.webp",
        "/assets/images/carpentry.webp",
        "/assets/images/home.webp",
    ];

    return (
        <section
            className="text-center flex flex-col items-center justify-center h-full"
            id="home"
        >
            <ImagesSlider className="h-screen" images={images}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-center items-center"
                >
                    <div className="md:w-3/4 lg:w-4/5 container text-white px-5 md:px-16 mx-auto">
                        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
                            <p>expert handyman services </p>
                            <p>not just any handyman will do</p>
                        </h1>
                        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
                            Get your job done right today with Adroit Handyman Services. We offer reliable and skilled handyman services for <TextCarousel /> you can trust.
                        </p>
                        <div className="flex flex-col items-center min-[343px]:flex-row gap-10 justify-center">
                            <button className="w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-blue-600 hover:border-blue-600 hover:bg-transparent hover:text-blue-600 rounded-full">
                                <Link href="https://github.com/NaseemKhan005" target="_blank">
                                    Book Now
                                </Link>
                            </button>
                            <button className="w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-blue-600 hover:border-blue-600 hover:bg-transparent hover:text-blue-600 rounded-full">
                                <Link href="https://github.com/NaseemKhan005" target="_blank">
                                    Estimate
                                </Link>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </ImagesSlider>
        </section>
    );
};

export default Hero;