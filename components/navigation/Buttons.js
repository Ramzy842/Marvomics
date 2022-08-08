import Link from "next/link";
import React from "react";
import Image from "next/image";
const Buttons = () => {
  return (
    <div className="flex flex-col items-center ">
      <Link href="/characters">
        <div className="group cursor-pointer capitalize mb-4 bg-white rounded-full px-4 w-11/12 sm:w-4/6 md:w-1/2 mx-auto text-center font-semibold text-md py-3 shadow-md relative">
          <a className="">Take me to characters</a>
          <div className="hidden group-hover:flex bg-main-bg absolute right-0 border top-0 bottom-0 p-2 justify-center w-12 items-center rounded-full ">
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
        <div className="group cursor-pointer capitalize mb-4 bg-white rounded-full px-4 w-11/12 sm:w-4/6 md:w-1/2 mx-auto text-center font-semibold text-md py-3 shadow-md relative">
          <a className="">Take me to comics</a>
          <div className="hidden group-hover:flex bg-main-bg absolute right-0 border top-0 bottom-0 p-2 justify-center w-12 items-center rounded-full ">
            <Image
              src="/assets/icons/chevron-right.svg"
              height={20}
              width={20}
              alt="chevron-right"
            />
          </div>
        </div>
      </Link>
      <Link href="#packs">
        <div className="group cursor-pointer capitalize bg-main-bg text-white rounded-full px-4 w-11/12 sm:w-4/6 md:w-1/2 mx-auto text-center font-semibold text-md py-3  relative hover:shadow-lg">
          <a className="">View Packs</a>
        </div>
      </Link>
    </div>
  );
};

export default Buttons;
