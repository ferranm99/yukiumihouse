"use client";

import React, { ReactNode, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { usePathname } from "next/navigation";

import { motion, useCycle } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
  subMenu?: boolean;
  subMenuItems?: NavLink[];
}

type MenuItemWithSubMenuProps = {
  item: NavLink;
  toggleOpen: () => void;
};

const navItemsTop: NavLink[] = [
  { label: "HOUSE", href: "/house" },
  {
    label: "TOURS & PACKS",
    href: "",
    subMenu: true,
    subMenuItems: [
      { label: "Daily tours", href: "/daily-tours/index.html" },
      { label: "Kurodake-Kamikawa", href: "/kamikawa/index.html" },
      { label: "Furano", href: "/furano/index.html" },
    ],
  },
  { label: "BOOKING", href: "/materials" },
  {
    label: "SEASONS",
    href: "",
    subMenu: true,
    subMenuItems: [
      { label: "Winter", href: "/winter.html" },
      { label: "Spring", href: "/spring.html" },
      { label: "Summer", href: "/summer.html" },
      { label: "Autumn", href: "/autumn.html" },
    ],
  },
  { label: "CONTACT", href: "/contact" },
];

const navbar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const MobileNav = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`inset-0 w-full lg:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-white"
        variants={navbar}
      />
      <motion.div
        variants={variants}
        className="absolute flex flex-col justify-between w-full px-10 py-16 h-screen overflow-y-auto"
      >
        <motion.ul variants={variants} className="grid gap-3">
          <MenuItem className="mx-auto mb-2">
            <Link href={"/landing"} onClick={() => toggleOpen()}>
              <Image
                src="https://yukiumihouse.files.wordpress.com/2023/04/senal-yukiumi-colors.png?w=1024"
                alt=""
                width={322}
                height={123}
              />
            </Link>
          </MenuItem>

          {navItemsTop.map((item, idx) => {
            const isLastItem = idx === navItemsTop.length - 1; // Check if it's the last item

            return (
              <div key={idx}>
                {item.subMenu ? (
                  <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
                ) : (
                  <MenuItem>
                    <Link
                      href={item.href}
                      onClick={() => toggleOpen()}
                      className={`flex justify-center w-full text-2xl ${
                        item.href === pathname ? "font-bold" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </MenuItem>
                )}

                {!isLastItem && (
                  <MenuItem className="my-3 h-px w-full bg-gray-300" />
                )}
              </div>
            );
          })}
        </motion.ul>
      </motion.div>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

export default MobileNav;

const MenuToggle = ({ toggle }: any) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-4 top-[14px] z-30"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="relative justify-center w-full text-2xl"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          {/* <div className="flex flex-row text-center"> */}
          <span
            //   className={`${pathname.includes(item.href) ? "font-bold" : ""}`}
            className=""
          >
            {item.label}
          </span>
          <svg
            className={`absolute right-0 top-1 h-auto transform transition duration-300 ${
              subMenuOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
          </svg>
        </button>
      </MenuItem>
      <div className="mt-2 ml-2 flex flex-col items-center space-y-2">
        {subMenuOpen && (
          <>
            {item.subMenuItems?.map((subItem, subIdx) => {
              return (
                <MenuItem key={subIdx}>
                  <Link
                    href={subItem.href}
                    onClick={() => toggleOpen()}
                    className={` ${
                      subItem.href === pathname ? "font-bold" : ""
                    }`}
                  >
                    {subItem.label}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};
