'use client'
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function HeroSection() {
    return (
        <section className="w-full mb-[0px] ">
            <div className=" relative flex w-full items-center justify-center overflow-hidden bg-background px-5 lg:px-20 pt-[120px] lg:pt-20">
                <div className="z-10 ">
                    <div className="max-w-full lg:max-w-[750px] m-auto">
                        <div className=" flex items-center justify-center pb-5">
                            <ShimmerButton className="shadow-2xl px-[10px] py-[8px]">
                                <span className="whitespace-pre-wrap text-center text-[12px] lg:text-sm font-medium leading-none tracking-tight text-white/80 dark:from-white dark:to-slate-900/10">
                                    ✨ Introducing Saas Template
                                </span>
                            </ShimmerButton>
                        </div>
                        <h2 className=" bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text text-transparent whitespace-pre-wrap text-center text-[32px] md:text-[42px] lg:text-[56px] font-medium tracking-tighter text-black dark:text-white leading-[42px] md:leading-[48px] lg:leading-[60px]">
                            The best platform for cross-functional work.
                        </h2>
                        <div className="mt-[35px] ">
                            <p className="block px-0 lg:px-16 text-center translate-y-[-1rem] animate-fade-in tracking-tight text-[13px] md:text-[14px] lg:text-base dark:text-white/60 text-gray-600 font-medium">
                                Want better results in your organization? Taskify helps teams get clarity, achieve greater impact, and scale to meet company goals.
                            </p>
                        </div>

                        <div className="flex justify-center items-center mt-[32px] md:mt-[35px]">
                            <Button className="  transition-all duration-500 dark:bg-white dark:text-primary hover:bg-primary mr-[15px]">
                                <span>Get Started</span>
                                {/* <ArrowRight className="w-5 h-5 ml-2" /> */}
                            </Button>
                            <Button className=" transition-all duration-500 bg-transparent dark:text-white text-primary hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary">
                                <span>
                                    See how it works</span>
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                    {/*  */}
                    <div className=" rounded-[12px] relative mt-[4rem] md:mt-[8rem] animate-fade-up [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">

                        <div className="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:animate-image-glow">
                            <div className="absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]">

                            </div>
                            <Image src="/hero-dark.png" width="1200" height="800" alt="dark" className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block" />
                            <Image src="/hero-light.png" width="1200" height="800" alt="light" className="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden" />
                        </div>

                        <BorderBeam size={250} duration={12} delay={9} />

                    </div>
                </div>

                <AnimatedGridPattern
                    numSquares={100}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-60%] h-[200%] skew-y-12",
                    )}
                />
            </div>
        </section>
    )
}