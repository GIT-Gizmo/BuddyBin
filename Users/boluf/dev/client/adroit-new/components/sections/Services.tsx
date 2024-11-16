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

const Services = () => {

    const services = [
        {
            image: "/assets/images/cleaning.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-3 md:row-span-2 overflow-hidden md:aspect-[4/3] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "CLEANING",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'Adroit cleaning service is a dependable service that you can trust for your residential and commercial cleaning services. We are devoted to making your homes and offices gleaming & sparkling with our service. Our indispensable team of experts are ready to get it done at a very affordable price.',
        },
        {
            image: "/assets/images/maintenance.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-2 md:row-span-3 md:col-start-4 md:aspect-[9/16]  bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "MAINTENANCE",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'Maintaining a home involves more than just fixing occasional issues; it requires consistent care to ensure your property remains in top condition. At Adroit HandyMan Services, we understand the importance of proactive maintenance to preserve the integrity and value of your home. Our comprehensive maintenance services are designed to address a wide range of needs, from routine inspections to preventive repairs, allowing you to enjoy peace of mind knowing that your home is well-cared for.',
        },
        {
            image: "/assets/images/electrical.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-3 md:row-span-2 md:col-start-6 md:aspect-[4/3] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "ELECTRICAL",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'At adroit, our electrical team can complete a variety of jobs within your homes and offices. Regardless of your size of project our service produces high-quality results from installations to lighting to wiring and many more. Our small jobs cover a variety, such as installing or repairing outlets, switches, and other electrical fixtures.',
        },
        {
            image: "/assets/images/installation.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-3 md:row-span-3 md:col-start-9 md:aspect-[3.5/4] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "INSTALLATIONS",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'Our skilled craftsmen are the perfect solution to all of your installation projects, needs and upgrades around your home and commercials. We assure you of the highest quality craftsmanship. with exquisite training and experience. Adroit handy man service is here to help you with all types of projects and installation services you need, assuring you of highest quality craftsmanship, using the correct tools, right skill, and attention to all details needed for your project. Trust us to help you get it done right!',
        },
        {
            image: "/assets/images/plumbing.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-2 md:row-span-3 md:row-start-3 md:aspect-[9/16] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "PLUMBING",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'Most of the plumbing problems households face demand quick and durable solutions. At adroit, we deliver specialized plumbing services to residential, commercial, and industrial areas around Lagos and Ogun state. We put heavy emphasis on saving customers time and money by providing sustainable solutions. You have a burst pipe or leaking pipe that requires immediate fixing, don’t stress it! We got your covered with our standby plumbing service.',
        },
        {
            image: "/assets/images/painting.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-3 md:row-span-2 md:col-start-7 md:row-start-4 md:aspect-[4/3] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "PAINTING",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: `Our professional painting service is one of our most highly-sought after service. Adroit handyman service offers a variety of painting options to meet your homes interior and exterior needs. Whether you are looking to emphasize an accent wall to standout, give a facelift to your children’s room, or you want to liven up your home’s exterior trim that has taken a beating from years of harsh weather, painting is a very effective way to beautify and add your desired touch to your home.`,
        },
        {
            image: "/assets/images/drain-cleaning.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-2 md:row-span-3 md:col-start-10 md:row-start-4 md:aspect-[9/16] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "DRAIN CLEANING",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'Drains and gutters is that aspect of your home maintenance that shouldn’t be overlooked. It requires strict attention in order to serve its intended purpose. Let us do the dirty work for you. Book our professionals today for the proper drain cleaning of your home and environment maintenance.',
        },
        {
            image: "/assets/images/flooring.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-3 md:row-span-2 md:col-start-1 md:row-start-6 md:aspect-[4/3] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "FLOORING/TILING",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'Do you want to upgrade your bathroom? Do you have a cracked or loose tile in your home? Or you need your full home or office tile installation? Adroit handyman service is your one-call solution. we will get your job done on time, on budget and done right.',
        },
        {
            image: "/assets/images/repair.jpg",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-3 md:row-span-2 md:col-start-7 md:row-start-8 md:aspect-[4/3] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "APPLIANCE REPAIR",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'House hold appliances play a major role in your overall comfort. It can be easy to forget how much work appliances do for us but it becomes clear very quickly when they breakdown. Staying on top of home repairs is our specialty. Professionally trained and skilled craftsmen handle any and all repairs around your home, we ensure it functions effectively and properly maintained to beautify your home.',
        },
        {
            image: "/assets/images/hvac.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-2 md:row-span-3 md:col-start-10 md:row-start-7 md:aspect-[9/16] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "AIR CONDITIONING",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'Do you need to install your newly bought air conditioning system? Or did your air-conditioning system suddenly loose its cooling power? Our HVAC professionals are always available to handle all your residential and commercial air conditioning services. Quality services at an affordable price.',
        },
        {
            image: "/assets/images/lighting.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-7 md:aspect-[9/16] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "LIGHTING",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'Lighting plays a crucial role in enhancing the ambiance, functionality, and aesthetics of your home. Whether you’re looking to brighten up a dark corner, add accent lighting to highlight architectural features, or upgrade to energy-efficient LED fixtures, Adroit HandyMan Services is here to help. Our professional lighting services are tailored to meet your unique needs, ensuring that every room in your home is beautifully illuminated to your specifications.',
        },
        {
            image: "/assets/images/carpentry.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-4 md:aspect-[4/4.7] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-300 hover:bg-gray-500 bg-blend-multiply",
            title: "CARPENTRY/FURNITURE",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full',
            description: 'You need a top rated carpenter to handle your home or office carpentry needs? Our skilled craftsmen can make all of your interior and exterior carpentry projects come to life with our skill and years of experience, we listen to your project desires and depict the right materials and design needed for such project whether residential of commercial. We make your furniture and fittings look good.',
        },
        {
            image: "/assets/images/fencing.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-4 md:row-span-2 md:col-start-1 md:row-start-8 md:aspect-video bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-400 hover:bg-gray-500 bg-blend-multiply",
            title: "FENCING & GATES",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#2aa19855] w-full bg-[#3B82F615]',
            description: 'Your home fencing and gates is an important part of your home, as you should know that it is a practical way to keep children and pets safe, make your property lines, increase your homes overall value, and act as safety barriers and provide your home security. If you need a fence or fence gate installed. Adroit handyman service is always at your service.',
        },
        {
            styles: "hidden row-span-3 col-start-3 row-start-3 md:flex items-center justify-center blue-cyan",
            title: "ADROIT",
            titleStyles: 'text-xl font-extrabold tracking-tighter text-white',
        },
        {
            styles: "hidden col-span-3 col-start-6 row-start-3 md:flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600",
            title: "HANDYMAN",
            titleStyles: 'text-xl font-extrabold text-white',
        },
        {
            title: "LOGO",
            image: "/assets/images/LOGO.webp",
            styles: "hidden md:flex md:col-start-4 md:row-start-7 bg-cover md:aspect-square bg-cyan-600",
            titleStyles: 'hidden',
        },
        {
            image: "/assets/images/errand.webp",
            styles: "flex items-end lg:text-xl aspect-square w-full h-full md:col-span-2 md:row-span-2 md:col-start-8 md:row-start-6 md:aspect-[3/3.5] bg-cover bg-center rounded-md transition-all duration-500 ease-out  md:hover:scale-95 bg-gray-400 hover:bg-gray-500 bg-blend-multiply",
            title: "GENERAL HELP",
            titleStyles: 'text-white py-2 px-auto bg-[#3B82F655] transition-all hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full hover:bg-[#ffffff55] hover:text-white hover:py-6 rounded-md w-full',
            description: 'Life is full of surprises, and so is home ownership. From minor repairs to odd jobs and everything in between, there’s always something that needs attention around the house. That’s where Adroit HandyMan Services steps in. Our general help services are designed to be your go-to solution for tackling those everyday tasks and unexpected challenges, allowing you to focus on what matters most while we take care of the rest.',
        },
        {
            styles: "hidden row-span-2 col-start-7 row-start-6 md:flex items-center justify-center blue-cyan",
            title: "SERVICES",
            titleStyles: 'text-xl font-extrabold tracking-tighter text-white',
        },
    ]

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
                    <Drawer>
                        <DrawerTrigger asChild>

                            <button key={index} className={data.styles} style={{ backgroundImage: `url(${data.image})` }}>

                                <h3 className={data.titleStyles}>
                                    {data.title}
                                </h3>

                            </button>

                        </DrawerTrigger>

                        <DrawerContent className="bg-gradient-to-br from-gray-600/60 to-blue-400/20">
                            <div className="mx-auto w-full max-w-xl">
                                <DrawerHeader>

                                    <DrawerTitle>
                                        <h3 className="font-bold md:text-2xl">{data.title}</h3>
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
                    <Drawer>
                        <DrawerTrigger asChild>

                            <button key={index} className={data.styles} style={{ backgroundImage: `url(${data.image})` }}>

                                <h3 className={data.titleStyles}>
                                    {data.title}
                                </h3>

                            </button>

                        </DrawerTrigger>

                        <DrawerContent className="bg-gradient-to-br from-gray-600/60 to-blue-400/20">
                            <div className="mx-auto w-full max-w-xl">
                                <DrawerHeader>

                                    <DrawerTitle>
                                        <h3 className="font-bold md:text-2xl">{data.title}</h3>
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
                    <Drawer>
                        {data.title === "ADROIT" || data.title === "HANDYMAN" || data.title === "SERVICES" ? (
                            <div className={data.styles}>
                                <h3 className={data.titleStyles}>
                                    {data.title === "ADROIT" ? (
                                        <h3 className={data.titleStyles}>
                                            <p className='m-0 p-0'>A</p>
                                            <p className='m-0 p-0'>D</p>
                                            <p className='m-0 p-0'>R</p>
                                            <p className='m-0 p-0'>O</p>
                                            <p className='m-0 p-0'>I</p>
                                            <p className='m-0 p-0'>T</p>
                                        </h3>
                                    ) :
                                        (data.title === "SERVICES" ? (
                                            <h3 className={data.titleStyles}>
                                                <p className='m-0 p-0'>S</p>
                                                <p className='m-0 p-0'>E</p>
                                                <p className='m-0 p-0'>R</p>
                                                <p className='m-0 p-0'>V</p>
                                                <p className='m-0 p-0'>I</p>
                                                <p className='m-0 p-0'>C</p>
                                                <p className='m-0 p-0'>E</p>
                                                <p className='m-0 p-0'>S</p>
                                            </h3>
                                        ) :
                                            <h3 className={data.titleStyles}>
                                                {data.title}
                                            </h3>
                                        )
                                    }
                                </h3>
                            </div>) :
                            (data.title === "LOGO" ?
                                <div key={index} className={data.styles} style={{ backgroundImage: `url(${data.image})` }}>
                                </div> :
                                <DrawerTrigger asChild>

                                    <button key={index} className={data.styles} style={{ backgroundImage: `url(${data.image})` }}>
                                        <h3 className={data.titleStyles}>
                                            {data.title}
                                        </h3>
                                    </button>

                                </DrawerTrigger>
                            )
                        }

                        <DrawerContent className="bg-gradient-to-br from-gray-600/60 to-blue-400/20">
                            <div className="mx-auto w-full max-w-xl">
                                <DrawerHeader>
                                    <DrawerTitle>
                                        <h3 className="font-bold md:text-2xl">{data.title}</h3>
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

export default Services