import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = ({setMenuOpen, menuOpen}) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  
  return (
    <nav className=" container mx-auto flex justify-between items-center py-4 absolute top-0 right-0 left-0 z-40">
      <Link href="/">
        <a className="outline-none text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-widest ml-4 md:ml-8">
          MARVOMICS
        </a>
      </Link>
      <div className="mr-4 md:hidden flex" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <Image src="/assets/icons/x.svg" height={24} width={24} alt="menu" /> : <Image src="/assets/icons/menu.svg" height={12} width={22} alt="menu" /> } 
      </div>

      

      <ul className="hidden justify-between max-w-xl mr-8 md:flex items-center">
        <Link href="/">
          <li
            className={`transition ${
              currentRoute === "/"
                ? "bg-white "
                : "hover:bg-gradient-to-r from-cyan-500 to-blue-500  "
            } text-white ml-4 px-4 py-1 rounded  cursor-pointer `}
          >
            <a
              className={`${
                currentRoute === "/"
                  ? "text-transparent bg-clip-text bg-main-bg "
                  : ""
              }`}
            >
              Home
            </a>
          </li>
        </Link>

        <Link href="/characters">
          <li
            className={`transition ${
              currentRoute === "/characters"
                ? "bg-white"
                : "hover:bg-gradient-to-r from-cyan-500 to-blue-500"
            } text-white ml-4 px-4 py-1 rounded cursor-pointer `}
          >
            <a
              className={`${
                currentRoute === "/characters"
                  ? "text-transparent bg-clip-text bg-main-bg"
                  : ""
              }`}
            >
              Characters
            </a>
          </li>
        </Link>

        <Link href="/comics">
          <li
            className={`${
              currentRoute === "/comics"
                ? "bg-white"
                : "hover:bg-gradient-to-r from-cyan-500 to-blue-500"
            } text-white ml-4 px-4 py-1 rounded cursor-pointer `}
          >
            <a
              className={`${
                currentRoute === "/comics"
                  ? "text-transparent bg-clip-text bg-main-bg"
                  : ""
              }`}
            >
              Comics
            </a>
          </li>
        </Link>

        <li className="text-white ml-4 px-3 ">
          <a
            href="https://github.com/ramzy842"
            className=" rounded-full border-2 border-white flex p-2 items-center justify-center"
          >
            <Image
              alt="github"
              src="/assets/icons/github.svg"
              height={20}
              width={20}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
