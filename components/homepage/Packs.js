import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
const Packs = () => {
  return <div className="container mx-auto pl-4 md:pl-8 min-h-screen pt-4 " id="packs">
    <div className="flex mb-2  ">
        <h1 className="text-2xl font-semibold text-white mr-2">Packs</h1>
        <Image src="/assets/icons/packs.svg" alt="packs" height={30} width={30} />
    </div>
    <div className="h-px w-1/2 bg-white"></div>
    <Carousel />
  </div>;
};

export default Packs;
