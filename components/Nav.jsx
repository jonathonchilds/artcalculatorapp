"use client";

import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full pt-3">
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
        Digital Arts Studio |{" "}
        <IoLocationOutline className="text-xl ml-2 mr-1" /> 1082 Huff Rd NW B
        Atlanta, GA 30318 | <AiOutlinePhone className="text-xl ml-2 mr-1" />{" "}
        (404) 905-2451
      </div>
      {/* desktop navigation */}
      <div className="flex">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <button type="button" onClick={() => {}} className="outline_btn">
              Sign Out
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
