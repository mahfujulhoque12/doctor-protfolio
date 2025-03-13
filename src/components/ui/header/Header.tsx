import React from "react";
import HeaderTop from "./atoms/HeaderTop";
import HeaderBottom from "./atoms/HeaderBottom";

const Header = () => {
  return (
    <div className="sticky top-0  z-50 ">
      <div className="hidden sm:block">
        <HeaderTop />
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
