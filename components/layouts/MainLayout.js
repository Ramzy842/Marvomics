import React from "react";
import Footer from "../footer/Footer";

import Navbar from "../navigation/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-main-bg min-h-screen  ">
      <Navbar />
      <div className="">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
