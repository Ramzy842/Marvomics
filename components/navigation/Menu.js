import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = ({ menuOpen }) => {
  return (
    menuOpen && (
      <div className=" z-40 top-0 absolute bottom-0 left-0 right-0 mt-12 bg-main-bg md:hidden">
        <div className="mx-auto container">
          <ul className=" flex flex-col items-center mx-4">
            <Link href="/characters">
              <div className="w-full flex justify-center items-center bg-white py-8 my-4 rounded-lg shadow-mobile-link bg-characters bg-no-repeat bg-cover relative">
                <div className="h-full w-full bg-black absolute top-0 right-0 left-0 bottom-0 opacity-60 rounded-lg"></div>
                <h1 className="font-bold text-white z-40 text-bas tracking-wide">
                  Characters
                </h1>
              </div>
            </Link>

            <Link href="/comics">
              <div className="w-full flex justify-center items-center bg-white py-8 mb-4 rounded-lg shadow-mobile-link bg-comics bg-no-repeat bg-cover relative">
                <div className="h-full w-full bg-black absolute top-0 right-0 left-0 bottom-0 opacity-60 rounded-lg"></div>
                <h1 className="font-bold text-white z-40 text-bas tracking-wide">
                  Comics
                </h1>
              </div>
            </Link>
            <a href="https://github.com/ramzy842" className=" w-full ">
              <li className="text-white  ">
                <div className=" flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 py-8 rounded-lg shadow-mobile-link">
                  <Image
                    alt="github"
                    src="/assets/icons/github.svg"
                    height={20}
                    width={20}
                  />
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
    )
  );
};

export default Menu;
