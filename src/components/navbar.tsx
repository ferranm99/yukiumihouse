"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const seasons: { name: string; href: string; description: string }[] = [
  {
    name: "Winter",
    href: "/winter.html",
    description:
      "Ride the best snow in the world and fulfill your powder dreams",
  },
  {
    name: "Spring",
    href: "/spring.html",
    description:
      "Mountain hikes, hut and snow caves stays, long descents, and rafting",
  },
  {
    name: "Summer",
    href: "/summer.html",
    description: "Trekking, trail running and rock climbing",
  },
  {
    name: "Autumn",
    href: "/autumn.html",
    description:
      "Surfing, salmon fishing and delicious menus with the fresh-caught salmon",
  },
];

const locations: { title: string; href: string; description: string }[] = [
  {
    title: "Daily Tours",
    href: "/daily-tours/index.html",
    description: "Choose your destination",
  },
  {
    title: "Kurodake-Kamikawa",
    href: "/kamikawa/index.html",
    description:
      "Multi-day tour in Hokkaido’s best mountains and backcountry paradise.",
  },
  {
    title: "Furano",
    href: "/furano/index.html",
    description:
      "Experience Furano's top snow, cozy lodge, and epic mountain trips.",
  },
];

export default function Navbar() {
  return (
    <div className="md:pl-[16%] flex items-center justify-start md:gap-[16%] h-full w-full">
      <div className="cursor-pointer h-full max-h-[4.7vw] rounded-md overflow-hidden">
        <Link href="/" legacyBehavior passHref>
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/04/senal-yukiumi-colors.png?w=1024"
            alt=""
            width={164.22}
            height={62.73}
            className="h-full w-full object-contain"
          />
        </Link>
      </div>
      <NavigationMenu className="z-[100]">
        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <Link href="/house" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn("no-underline", navigationMenuTriggerStyle())}
              >
                HOUSE
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>LOCATIONS</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {locations.map((loc) => (
                  <ListItem key={loc.title} title={loc.title} href={loc.href}>
                    {loc.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/book-your-bed-room/index.html" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn("no-underline", navigationMenuTriggerStyle())}
              >
                BOOKING
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/reviews" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn("no-underline", navigationMenuTriggerStyle())}
              >
                REVIEWS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn("no-underline", navigationMenuTriggerStyle())}
              >
                BLOG
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact.html" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn("no-underline", navigationMenuTriggerStyle())}
              >
                CONTACT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
