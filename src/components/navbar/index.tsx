"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const handleClick = () => {

        setIsMenuToggled(!isMenuToggled);
    }
    return (
        <>
            <nav className="w-full fixed bg-black border-gray-500/20 z-50 ">
                <div className="bg-gradient-to-r w-4/5 mx-auto from-transparent via-gray-600 to-transparent">
                    <div className="flex items-center justify-between text-white mx-8 md:mx-16 lg:mx-24 py-4 static">
                        <div className="text-lg md:text-xl lg:text-2xl font-semibold font-mono">
                            <Link href={"/"}>MARY LEE</Link>
                        </div>
                        <div className="hidden text-base font-medium lg:flex justify-between items-center lg:gap-6 xl:gap-10">
                            <Link href="/about-me">About Me</Link>
                            <Link href="/realestate">Real Estate</Link>
                            <Link href="/consulting">Consulting</Link>
                            <Link href="/yclstyles">YCL Styles</Link>
                        </div>
                        <div className="hidden lg:flex text-base"><Link href="/contact">Contact Me →</Link></div>
                        {
                            !isMenuToggled && (
                                <div className="lg:hidden flex text-3xl cursor-pointer" onClick={handleClick}><Menu /></div>
                            )
                        }

                        {
                            isMenuToggled && (
                                <div className="flex flex-col space-y-3">
                                    <div className="fixed right-0 top-0 h-full w-[240px] shadow-md bg-black border-gray-500/20 z-50">
                                    <div className="bg-gradient-to-t from-transparent via-gray-600 to-transparent">
                                        {/* CLOSE ICON */}
                                        <div className="flex justify-end p-12 z-20">
                                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                                <X className="h-6 w-6 text-gray-200" />
                                            </button>
                                        </div>
                                        <div className="px-10">
                                            <div className="text-lg font-medium flex flex-col lg:hidden  space-y-4 text-neutral-100">
                                                <Link href="/">Home</Link>
                                                <Link href="/about-me">About Me</Link>
                                                <Link href="/realestate">Real Estate</Link>
                                                <Link href="/consulting">Consulting</Link>
                                                <Link href="/yclstyles">YCL Styles</Link>
                                                <Link href="/contact">Contact Me</Link>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
