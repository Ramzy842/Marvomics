import Link from "next/link";
import React from "react";
import Image from "next/image";
const Buttons = () => {
  return (
    <div className="flex flex-col items-center ">
      <Link href="/characters">
        <div className="transform hover:scale-95 hover:bg-main-bg  transition group cursor-pointer capitalize mb-4 bg-white rounded-full px-4 w-11/12 sm:w-4/6 md:w-1/2 mx-auto text-center font-semibold text-md py-3 shadow-md relative">
          <a className="group-hover:text-white transition">Take me to characters</a>
          <div className="flex group-hover:border-none group-hover:flex bg-main-bg absolute md:border -right-1 md:right-0  top-0 bottom-0 p-2 justify-center w-12 items-center rounded-full transition">
            <Image
              src="/assets/icons/chevron-right.svg"
              height={20}
              width={20}
              alt="chevron-right"
            />
          </div>
        </div>
      </Link>
      <Link href="/comics">
        <div className="group transform hover:scale-95 transition cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 capitalize mb-4 bg-white rounded-full px-4 w-11/12 sm:w-4/6 md:w-1/2 mx-auto text-center font-semibold text-md py-3 shadow-md relative">
          <a className="group-hover:text-white transition">Take me to comics</a>
          <div className="transition flex bg-gradient-to-r from-cyan-500 to-blue-500 absolute group-hover:border-none md:border -right-1 md:right-0 top-0 bottom-0 p-2 justify-center w-12 items-center rounded-full ">
            <Image
              src="/assets/icons/chevron-right.svg"
              height={20}
              width={20}
              alt="chevron-right"
            />
          </div>
        </div>
      </Link>
      
    </div>
  );
};

export default Buttons;
