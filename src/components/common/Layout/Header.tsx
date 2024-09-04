'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MbMenu } from "./MbMenu";
import { ThemeToggle } from "@/components/theme-toggle";


export default function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 py-[5px] w-full  animate-fade-in border-b backdrop-blur-[12px] [--animation-delay:600ms] px-5 lg:px-0">
            <div className="max-w-full lg:max-w-[1400px] m-auto flex h-[3.5rem] items-center justify-between">
                <div className="logo_wraper">
                    <Link href="/" className="text-primary dark:text-white text-[24px] font-medium">
                        Saasify
                    </Link>
                </div>
                <nav className="nav_menu flex items-center">
                    <ThemeToggle />
                    <MbMenu />
                    <div className="hidden lg:flex items-center ml-5">
                        <Button className="bg-transparent tracking-tight text-primary dark:text-white text-base mr-[15px]">Log in</Button>
                        <Button className="hover:bg-primary tracking-tight text-base dark:bg-white">Sign Up</Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}