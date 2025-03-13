import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "./atom/Logo";
import Contacts from "./atom/Contacts";
import Pages from "./atom/Pages";
import Services from "./atom/Services";
import Facebook from "./atom/Facebook";
import BottomFooter from "./atom/BottomFooter";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#01578C] pb-16">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
            <div>
              <Logo />
            </div>
            <div>
              <Contacts />
            </div>
            <div>
              <Pages />
            </div>
            <div>
              <Services />
            </div>
            <div>
              <Facebook />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-white p-5">
        <BottomFooter />
      </div>
    </div>
  );
};

export default Footer;
