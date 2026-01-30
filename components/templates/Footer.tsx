"use client"
import Image from "next/image";
import Logo from "../atoms/Icon";
import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <div className="
            w-full min-h-[20vh]
            flex flex-col items-center 
            px-1 sm:px-2 lg:px-4 py-8
            bg-background 
        ">
            <div className="flex flex-col w-full gap-2">

                <span className="flex flex-row items-center gap-1 ">
                    <Logo priority={true} size="md" />
                    <h3 className="font-fredoka text-2xl font-extrabold z-10 text-white">Rupado</h3>
                </span>
                <p className="font-ui font-normal text-sm  sm:text-base text-white/90">No filters. No editing skills. Just better-tested AI prompts that actually work.</p>
                <hr className="text-gray-500 mx-2 my-2 opacity-50" />
                <div className="flex flex-row justify-between items-center">
                    <span className="font-normal text-sm sm:text-base text-white/90">
                        © 2026 Rupado. All Rights Reserved.
                    </span>

                    <span className="flex flex-row gap-2">
                        <a onClick={() => { alert() }}
                            href="https://x.com/MiteshGehl60337"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Rupado on Twitter"
                        >
                            <Twitter className="bg-background border border-gray-700 p-1 rounded shadow shadow-gray-600" size={35} />
                        </a>

                        <a
                            href="https://instagram.com/gehlotmitesh420"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Rupado on Instagram"
                        >
                            <Instagram className="bg-background border border-gray-700 p-1 rounded shadow shadow-gray-600" size={35} />
                        </a>
                    </span>
                </div>

            </div>

        </div>
    )
}
export default Footer;