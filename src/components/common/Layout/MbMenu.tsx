'use client'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

const menu = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Features",
        link: "/features",
    },
    {
        name: "Pricing",
        link: "/pricing",
    },
    {
        name: "Contact",
        link: "/contact",
    },
]

export function MbMenu() {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button className="block lg:hidden bg-transparent tracking-tight text-primary dark:text-white text-base py-0 pr-5 w-0">
                    <MenuIcon className="w-[28px] h-[28px] text-primary dark:text-white" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader className=" text-left pb-[10px]">
                    <div className="flex items-center pt-5">
                        <Button className="w-full border bg-transparent tracking-tight text-primary dark:text-white text-base mr-[15px]">Log in</Button>
                        <Button className="w-full hover:bg-primary tracking-tight text-base dark:bg-white">Sign Up</Button>
                    </div>
                </SheetHeader>
                <div className="">
                    <ul >
                        {menu.map((item, index) => (
                            <li key={index} className="my-5 text-[17px] ">
                                <Link href={item.link}>
                                    {item?.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </SheetContent>
        </Sheet>
    )
}
