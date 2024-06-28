"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import { ReactNode, useState } from "react";
import MobileNav from "./mobile-nav";
import Image from "next/image";

interface MainNavProps {
  items?: NavItem[];
  children?: ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const closeMobileMenu = () => setShowMobileMenu(false);
  return (
    <div className="flex items-center md:gap-10">
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <Image src="/icon/ロボット円形.svg" alt="Logo" width="30" height="30" />
        <span className="font-bold hidden sm:inline-block">Fumiya Suzuki</span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-lg sm:text-sm font-medium hover:foreground/80"
          >
            <span onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden flex items-center"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && (
        <MobileNav items={items} closeMobileMenu={closeMobileMenu} />
      )}
    </div>
  );
}
