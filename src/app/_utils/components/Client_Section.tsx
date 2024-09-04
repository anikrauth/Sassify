"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const data = [
    {
        url: "https://cdn.magicui.design/companies/Google.svg"
    },
    {
        url: "https://cdn.magicui.design/companies/Amazon.svg"
    },
    {
        url: "https://cdn.magicui.design/companies/Microsoft.svg"
    },
    {
        url: "https://cdn.magicui.design/companies/Netflix.svg"
    },
    {
        url: "https://cdn.magicui.design/companies/Spotify.svg"
    },
    {
        url: "https://cdn.magicui.design/companies/Uber.svg"
    },
    {
        url: "https://cdn.magicui.design/companies/Slack.svg"
    },
]

export default function ClientSection() {
    return (
        <section className=" client_section mt-[80px] mb-[80px] lg:mt-0 lg:mb-[120px] max-w-full lg:max-w-[1200px] px-5 lg:px-0">
            <h3 className="text-center text-sm font-semibold text-gray-600 pb-[30px] px-10 md:px-0">
                {" "}
                TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h3>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  bg-background">
                <Marquee pauseOnHover className="[--duration:20s] ">
                    {data.map((item, idx) => (
                        <div className="" key={idx}>
                            <Image className="h-8 w-28 px-2 dark:brightness-0 dark:invert" src={item?.url} alt="client" width={100} height={80} />
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </section>
    );
}
