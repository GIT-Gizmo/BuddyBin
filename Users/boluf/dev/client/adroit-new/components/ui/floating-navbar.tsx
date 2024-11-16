"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Prevent scrolling when menu is open
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.nav
                className={cn(
                    "w-full z-50 fixed top-0 left-0 transition-all duration-300 py-4",
                    scrolled ? "bg-[#F0F2F5] shadow-lg py-0" : "bg-transparent"
                )}
            >
                <div className="container px-5 lg:px-16 flex items-center justify-between mx-auto">
                    <Link href="/" className="font-bold text-[2rem] no-underline text-white relative z-10">
                        <Image
                            src="/assets/images/LOGO.webp"
                            alt="Companies logo"
                            width={80}
                            height={80}
                            className="w-12 min-[360px]:w-16 lg:w-18"
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden z-50 text-neutral-600 hover:text-neutral-800 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        <Menu size={24} />
                    </button>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{
                            opacity: 1,
                            y: -100,
                        }}
                        animate={{
                            y: visible ? 0 : -100,
                            opacity: visible ? 1 : 0,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className={cn(
                            "hidden md:flex max-w-fit mx-auto border border-transparent rounded-full bg-slate-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2 pl-8 py-2 md:px-5 lg:px-10 items-center justify-center space-x-4 md:space-x-2 lg:space-x-4",
                            className
                        )}
                    >
                        {navItems.map((navItem, idx) => (
                            <Link
                                key={`nav-item-${idx}`}
                                href={navItem.link}
                                className={cn(
                                    "relative dark:text-neutral-50 items-center flex space-x-3 text-neutral-600 dark:hover:text-neutral-300 hover:text-blue-500"
                                )}
                            >
                                <span className="block sm:hidden">{navItem.icon}</span>
                                <span className="hidden sm:block text-sm lg:text-base">{navItem.name}</span>
                            </Link>
                        ))}
                        <Link
                            href="tel:07044533798"
                            className="border text-sm font-medium relative border-neutral-900 text-black px-4 py-2 rounded-full"
                        >
                            <span>Place a Call</span>
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                        </Link>
                    </motion.div>

                    {/* Mobile Sidebar */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black md:hidden"
                                    onClick={toggleMobileMenu}
                                />
                                <motion.div
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ type: "tween", duration: 0.3 }}
                                    className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-neutral-900 shadow-lg md:hidden p-6 z-50"
                                >
                                    {/* Close Button */}
                                    <button
                                        onClick={toggleMobileMenu}
                                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                        aria-label="Close mobile menu"
                                    >
                                        <X size={24} className="text-neutral-600 dark:text-neutral-200" />
                                    </button>

                                    <div className="flex flex-col space-y-6 mt-16">
                                        {navItems.map((navItem, idx) => (
                                            <Link
                                                key={`mobile-nav-${idx}`}
                                                href={navItem.link}
                                                className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-lg"
                                                onClick={toggleMobileMenu}
                                            >
                                                <div className="flex items-center space-x-2">
                                                    {navItem.icon && <span>{navItem.icon}</span>}
                                                    <span>{navItem.name}</span>
                                                </div>
                                            </Link>
                                        ))}
                                        <Link
                                            href="tel:07044533798"
                                            className="border text-base font-medium border-neutral-900 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full text-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                            onClick={toggleMobileMenu}
                                        >
                                            <span>Place a Call</span>
                                        </Link>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </AnimatePresence>
    );
};

export default FloatingNav;