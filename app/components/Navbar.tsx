"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Logo from "/public/images/logo.svg";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-row-reverse items-center justify-center p-5 md:ml-24 md:justify-start md:p-10">
      {/* logo */}
      <div className="relative w-20 h-5 md:w-52 md:h-14">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" fill style={{ objectFit: "cover" }} />
        </Link>
      </div>

      {/* burger */}
      <div className="relative w-4 h-5 px-10 lg:hidden">
        <button
          type="button"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <Image
            src={"/images/icon-hamburger.svg"}
            alt="Burger"
            fill
            style={{ objectFit: "contain" }}
          />
        </button>
      </div>

      {/* burger-menu */}
      {isMenuOpen && (
        <div className="absolute right-0 w-full bg-myDark-light top-[4.5rem] text-myWhite lg:hidden">
          <ul className="flex flex-col flex-wrap items-center content-start justify-center w-1/2 py-4 space-y-4 text-sm font-bold font-manrope-bold">
            <li className="hover:text-orange-dark">
              <a href="#">HOME</a>
            </li>
            <li className="hover:text-orange-dark">
              <a href="#">HEADPHONES</a>
            </li>
            <li className="hover:text-orange-dark">
              <a href="#">SPEAKERS</a>
            </li>
            <li className="hover:text-orange-dark">
              <a href="#">EARPHONES</a>
            </li>
          </ul>
        </div>
      )}

      {/* navbar-button */}
      <div className="hidden ml-3 md:ml-10 xl:ml-8 2xl:ml-40 lg:block">
        <ul className="flex flex-row text-[10px] font-calibriregular md:text-xl">
          <Link href={"/"}>
            <li className="px-2 transition-all hover:underline xl:px-10">
              אודות
            </li>
          </Link>
          <Link href={"/"}>
            <li className="px-2 transition-all hover:underline xl:px-10">
              השירותים שלנו
            </li>
          </Link>
          <Link href={"/"}>
            <li className="px-2 transition-all hover:underline xl:px-10">
              תהליך עבודה
            </li>
          </Link>
          <Link href={"/"}>
            <li className="px-2 transition-all hover:underline xl:px-10">
              דברו איתנו
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
