"use client";

import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styles/glowButton.css";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="sm:flex sm:flex-row flex-col py-6 bg-[#191717] w-full px-12 sticky top-0 justify-evenly items-center">
      <div>
        <img
          src="https://www.digitalartsstudio.net/wp-content/uploads/2020/12/digital-arts-studio-animated-logo-no-loop.gif"
          alt="Digital Arts Studio Logo"
          width={450}
          className="2xl:w-[450px] w-[275px]"
        />
      </div>
      <div className="sm:flex hidden text-white space-x-5 2xl:text-xl text-lg font-light">
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
          <BsGlobe2 className="mr-1 mb-1" />
          Home
        </Link>
      </div>
      <div>
        {pathname === "/cancalc" ? (
          <Link href="/" className="">
            <button type="button" className="glowingButton -rotate-1 uppercase">
              Print Cost Calculator
            </button>
          </Link>
        ) : (
          <Link href="/cancalc">
            <button
              type="button"
              className="glowingButton -rotate-1 uppercase "
            >
              Canvas Calculator
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
