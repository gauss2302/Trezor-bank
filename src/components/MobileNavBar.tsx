"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function MobileNavBar({ user }: MobileNavProps) {
  const pathname = usePathname();
  return (
    <section className={"w-full mex-w-[265px]"}>
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            alt={"menu"}
            width={30}
            height={30}
            className={"cursor-pointer"}
          />
        </SheetTrigger>
        <SheetContent side={"left"} className={"border-none bg-white"}>
          <Link
            href={"/"}
            className={"mb-12 cursor-pointer flex items-center gap-1 px-4"}
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt={"Trezor Logo"}
            />
            <h1
              className={"text-26 font-ibm-plex-serif font-bold text-black-1"}
            >
              Tezor
            </h1>
          </Link>
          <div className={"mobilenav-sheet"}>
            <SheetClose asChild>
              <nav className={"flex h-full flex-col gap-6 pt-16 text-white"}>
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <Link
                      href={item.route}
                      key={item.label}
                      className={cn("mobilenav-sheet_close w-full", {
                        "bg-bank-gradient": isActive,
                      })}
                    >
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                        className={cn({
                          "brightness-[4] invert-0": isActive,
                        })}
                      ></Image>

                      <p
                        className={cn("text-16 font-semibold text-black-2", {
                          "text-white": isActive,
                        })}
                      >
                        {item.label}
                      </p>
                    </Link>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNavBar;
