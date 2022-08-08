import Image from "next/image";
import React from "react";

const NotFound = ({ children }) => {
  return (
    <div className="flex flex-col justify-center h-screen">
      {children}
      <div className=" mx-auto">
        <Image src="/assets/404.svg" height={1400} width={4000} alt="not-found" />
      </div>
    </div>
  );
};

export default NotFound;
