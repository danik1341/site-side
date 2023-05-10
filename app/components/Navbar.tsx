"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "/public/images/logo.svg";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex flex-row-reverse items-center justify-center p-5 md:justify-start md:p-10">
      {/* logo */}
      <div className="relative w-20 h-5 md:w-52 md:h-14">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" fill style={{ objectFit: "cover" }} />
        </Link>
      </div>

      {/* navbar-button */}
      <div className="ml-3 md:ml-10 xl:ml-8 2xl:ml-40">
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
