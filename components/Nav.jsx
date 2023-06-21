"use client";

import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const isUserLoggedIn = false;

  const pageButtons =
    "rounded-full shadow-lg border border-black w-60 h-20 py-1.5 px-5 hover:bg-slate-700 hover:text-white transition-all text-center text-lg font-semibold flex items-center justify-center ";

  return (
    <nav className="flex flex-col w-full pt-3">
      <div className="flex w-full justify-between">
        <Link href="/" className="bg-slate-700 rounded p-2">
          <Image
            src="/assets/logo.png"
            alt="Digital Arts Studio Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
        <div className="sm:flex hidden mt-4">
          <IoLocationOutline className="text-xl ml-2 mr-1" /> 1082 Huff Rd NW B
          Atlanta, GA 30318 | <AiOutlinePhone className="text-xl ml-2 mr-1" />{" "}
          866-352-9779
        </div>
        <div className="mt-4">
          <div className="flex gap-3 md:gap-5">
            <Link href="https://www.digitalartsstudio.net/">
              <button type="button" className="outline_btn hover:bg-slate-700">
                Main Site
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:flex flex flex-wrap justify-center  w-full mt-20">
        <div>
          <Link href="/cancalc">
            <button
              type="button"
              className={`${pageButtons} mb-4 sm:mb-0 sm:mr-16 `}
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
