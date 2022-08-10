import React, { useState } from "react";

import Menu from "../navigation/Menu";

import Navbar from "../navigation/Navbar";

const MainLayout = ({ children, menuOpen, setMenuOpen }) => {
  
  return (
    <div className="bg-main-bg min-h-screen  ">
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Menu menuOpen={menuOpen} />
      <div className="">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
