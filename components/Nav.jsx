"use client";

import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex py-6 bg-[#191717] w-full px-12 sticky top-0 justify-evenly">
      <div className="flex items-center">
        <img
          src="https://www.digitalartsstudio.net/wp-content/uploads/2020/12/digital-arts-studio-animated-logo-no-loop.gif"
          alt="Digital Arts Studio Logo"
          width={500}
          height={300}
        />
      </div>
      <div className="sm:flex hidden px-2 text-white space-x-5 text-xl font-light items-center">
        <IoLocationOutline className="mr-1" /> 1082 Huff Rd NW B Atlanta, GA
        30318{" "}
        <div className="flex items-center">
          <AiOutlinePhone className="mr-1" />
          866-352-9779
        </div>
        <Link
          href="https://www.digitalartsstudio.net/"
          target="_blank"
          className="flex items-center"
        >
          <BsGlobe2 className="mr-1" />
          Home
        </Link>
      </div>
      <div className="flex items-center justify-center ">
        {pathname === "/cancalc" ? (
          <Link href="/" className="">
            <button type="button" className="expButton">
              Print Cost Calculator
            </button>
          </Link>
        ) : (
          <Link href="/cancalc">
            <button type="button" className="expButton uppercase">
              Canvas Calculator
            </button>
          </Link>
        )}
      </div>
      <div className="flex justify-center items-center"></div>
    </nav>
  );
};

export default Nav;
