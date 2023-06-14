"use client";

import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Nav = () => {
  const isUserLoggedIn = true;

  const pageButtons =
    "rounded-full shadow-lg border border-black w-60 h-20 py-1.5 px-5 transition-all hover:bg-black hover:text-white text-center text-lg font-semibold flex items-center justify-center ";

  return (
    <nav className="flex flex-col w-full pt-3">
      <div className="flex w-full justify-between">
        <Link href="/" className="flex gap-2">
          <Image
            src="/assets/logo.png"
            alt="Digital Arts Studio Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">Digital Arts Studio</p>
        </Link>
        <div className="sm:flex hidden">
          <IoLocationOutline className="text-xl ml-2 mr-1" /> 1082 Huff Rd NW B
          Atlanta, GA 30318 | <AiOutlinePhone className="text-xl ml-2 mr-1" />{" "}
          (404) 905-2451
        </div>
        <div>
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
              <button
                type="button"
                onClick={() => {}}
                className="outline_btn shadow-lg"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex gap-3 md:gap-5">
              <button type="button" onClick={() => {}} className="outline_btn">
                Admin
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="sm:flex flex flex-wrap justify-center  w-full mt-20">
        <div>
          <Link href="/cancalc">
            <button
              type="button"
              className={`${pageButtons} mb-4 sm:mb-0 sm:mr-16`}
            >
              Canvas Calculator
            </button>
          </Link>
        </div>
        <div>
          <Link href="/">
            <button type="button" className={`${pageButtons} `}>
              Print Cost Calculator
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
