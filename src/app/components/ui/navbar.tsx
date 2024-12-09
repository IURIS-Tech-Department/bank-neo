"use client";

import useResponsive from "@/app/hooks/useResponsive";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

interface NavbarType {
  links: { name: string; path: string }[];
  pathname: string;
}

const DekstopVersion = ({ links, pathname }: NavbarType) => {
  return (
    <>
      <div className="flex justify-evenly gap-2 text-center border border-black rounded-full px-4 py-2 text-base">
        {links?.map((item, idx) => {
          const isActive =
            (item.path.startsWith("/services") &&
              pathname.startsWith("/services")) ||
            (item.path.startsWith("/assets") &&
              pathname.startsWith("/assets")) ||
            pathname === item.path;

          const activeClass = isActive
            ? "relative pl-6 bg-grey before:content-[''] before:block before:w-3 before:h-3 before:rounded-full before:bg-black before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2"
            : "";

          return (
            <Link
              key={idx}
              className={`transition-all uppercase rounded-full duration-300 py-2 px-4 hover:bg-grey ${activeClass} text-black`}
              href={item?.path}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <Link
        href="/"
        className="text-black p-3 rounded-xl hover:brightness-90 transition-all font-h5 flex items-center justify-center h-12"
        >
        Open Account
      </Link>
    </>
  );
};

function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [click, setClick] = useState(false);
  const isLargeScreen = useResponsive(1280);
  const pathname = usePathname();
  const closeMenu = () => {
    setClick(false);
  };
  const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "support", path: "/support" },
    { name: "careers", path: "/careers" },
    { name: "about us", path: "/about-us" },
  ];

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setClick(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navBackgroundStyle = isLargeScreen
    ? {
        boxShadow: "2px 0px 5px rgb(0 0 0 / 0.4)",
        backgroundColor: "rgb(255 255 255)",
      }
    : {
        boxShadow: "2px 0px 5px rgb(0 0 0 / 0.4)",
        backgroundColor: "rgb(255 255 255, 0.5)", 
      };

  return (
    <nav
      className="w-full sticky top-0 p-2 sm:p-6 bg-white z-50 backdrop-blur-md mx-auto text-black"
      style={navBackgroundStyle}
    >
      <div
        ref={menuRef}
        className={`flex flex-col w-full items-center justify-between ${
          click ? "border border-black rounded-lg" : "border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <div className="w-30 h-10 flex items-center justify-center text-center text-2xl border-l-4 border-black">
           <div className="p-3 font-bold">
              Neo
           </div>
          </div>
          {isMounted &&
            (isLargeScreen ? (
              <DekstopVersion pathname={pathname} links={links} />
            ) : (
              <div>
                <div
                  className="cursor-pointer"
                  onClick={() => setClick((prev) => !prev)}
                >
                  <Image
                    width={40}
                    height={40}
                    src={
                      !click
                        ? "/icons/icon-hamburger.svg"
                        : "/icons/icon-cross.svg"
                    }
                    alt="icon menu"
                  />
                </div>
              </div>
            ))}
        </div>
        {!isLargeScreen && click && (
          <>
            <div className="flex flex-col py-4 px-6 justify-center w-full border-t border-t-black border-b border-b-black transition-all">
              {links.map((val, idx) => (
                <Link
                  href={val?.path}
                  key={idx}
                  className="font-h5 uppercase py-3"
                  onClick={closeMenu}
                >
                  {val?.name}
                </Link>
              ))}
            </div>
            <div className="w-full text-center p-6 transition-all">
              <Link
                href="/"
                className="text-black p-3 rounded-xl hover:brightness-90 transition-all font-h5 flex items-center justify-center h-12"
              >
                Open Account
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
