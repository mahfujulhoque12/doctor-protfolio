/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "/public/header/logo.png";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import { FaCalendarDays, FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderBottom = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const displayNames: Record<string, string> = {
    Home: "Home",
    AboutUs: "About Us",
    Services: "Services",
    Blogs: "Blogs",
    Contact: "Contact",
  };

  const menuItems = {
    Home: {
      path: "/",
      subItems: ["Landing Page", "About Us", "Features"],
    },
    AboutUs: {
      path: "/about-us",
      subItems: ["Team", "Pricing", "FAQ", "404 Page"],
    },
    Services: {
      path: "/services",
      subItems: ["Web Design", "Development", "SEO", "Marketing"],
    },
    Blogs: {
      path: "/blogs",
      subItems: ["Latest News", "Articles", "Tutorials", "Reviews"],
    },
    Contact: {
      path: "/contact",
      subItems: ["Get in Touch", "Support", "Locations"],
    },
  };

  // Type mainItem as string
  const toggleSubMenu = (mainItem: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [mainItem]: !prev[mainItem], // Toggle only the clicked menu item
    }));
  };
  return (
    <div className="bg-white">
      <MaxWidthWrapper>
        <div className="flex md:flex-col xl:flex-row items-start xl:items-center justify-between py-5 bg-white gap-5 border-b border-gray-200">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              width={400}
              height={200}
              alt="logo"
              className="w-36 md:w-48"
            />
          </Link>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="md:hidden text-[#002345] z-30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:block relative">
            <ul className="flex space-x-8">
              {Object.entries(menuItems).map(
                ([mainItem, { path, subItems }]) => {
                  const isActive =
                    pathname === path || pathname.startsWith(`${path}/`);

                  return (
                    <li key={mainItem} className="group">
                      <Link
                        href={path}
                        className={`font-semibold py-2 text-base flex items-center gap-1 ${
                          isActive
                            ? "text-[#52CBCB] border-b-2 border-[#52CBCB]"
                            : "text-[#002345] hover:text-[#52CBCB] transition-all duration-300"
                        }`}
                      >
                        {displayNames[mainItem]}
                        <MdOutlineKeyboardArrowDown className="mt-1 font-normal" />
                      </Link>
                      <div
                        className="absolute top-14 bg-white shadow-lg rounded-b-lg py-2 min-w-[200px] z-10 opacity-0 invisible group-hover:visible group-hover:opacity-100
                      transform translate-y-2 group-hover:translate-y-0
                      transition-all duration-300 ease-in-out"
                      >
                        {subItems.map((subItem) => (
                          <Link
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-[#002345] hover:bg-gray-100 hover:text-[#52CBCB]"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </li>                 
                  );
                }
              )}
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:hidden absolute top-16 sm:top-56 left-0 w-full bg-white shadow-lg z-20`}
          >
            <ul className="flex flex-col">
              {Object.entries(menuItems).map(
                ([mainItem, { path, subItems }]) => {
                  const isActive =
                    pathname === path || pathname.startsWith(`${path}/`);
                  const isOpen = openSubMenus[mainItem] || false;

                  return (
                    <li key={mainItem} className="border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <Link
                          href={path}
                          className={`font-semibold py-4 px-6 block text-base flex-1 ${
                            isActive
                              ? "text-[#52CBCB]"
                              : "text-[#002345] hover:text-[#52CBCB]"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {displayNames[mainItem]}
                        </Link>
                        {subItems.length > 0 && (
                          <button
                            className="py-4 px-6 text-[#002345]"
                            onClick={() => toggleSubMenu(mainItem)}
                          >
                            <MdOutlineKeyboardArrowDown
                              className={`transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>
                      <div
                        className={`${
                          isOpen ? "block" : "hidden"
                        } bg-gray-50 transition-all duration-300`}
                      >
                        {subItems.map((subItem) => (
                          <Link
                            key={subItem}
                            href="#"
                            className="block py-3 px-10 text-sm text-[#002345] hover:text-[#52CBCB] hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Right Side Icons - Desktop */}
          <div className="hidden md:flex items-center gap-7">
            <button className="cursor-pointer">
              <FaSearchPlus className="text-[#002345]" size={25} />
            </button>
            <button className="relative cursor-pointer">
              <FaCartShopping className="text-[#002345]" size={25} />
              <span className="absolute -top-2 -right-2 bg-[#52CBCB] text-white w-4 h-4 text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Link
              href="#"
              className="relative flex items-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white overflow-hidden group"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
              <span className="relative z-10 flex items-center gap-2">
                <FaCalendarDays /> Get Appointment
              </span>
            </Link>
          </div>

          {/* Right Side Icons - Mobile */}
          {/* <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden pt-4 pb-6 px-6 bg-white w-full absolute top-[calc(100%+5rem)] left-0 shadow-lg z-20`}
        >
          <div className="flex flex-col gap-4">
            <button className="flex items-center gap-2 text-[#002345]">
              <FaSearchPlus size={20} /> Search
            </button>
            <button className="flex items-center gap-2 text-[#002345] relative">
              <FaCartShopping size={20} /> Cart
              <span className="absolute top-0 left-6 bg-[#52CBCB] text-white w-4 h-4 text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Link
              href="#"
              className="relative flex items-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white overflow-hidden group w-fit"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
              <span className="relative z-10 flex items-center gap-2">
                <FaCalendarDays /> Get Appointment
              </span>
            </Link>
          </div>
        </div> */}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeaderBottom;
