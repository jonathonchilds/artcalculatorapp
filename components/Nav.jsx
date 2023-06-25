"use client";

import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex py-6 bg-[#191717] w-full px-12 sticky top-0 justify-evenly">
      <div className="flex items-center">
        <img
          decoding="async"
          loading="lazy"
          class="w-[500px]"
          src="https://www.digitalartsstudio.net/wp-content/uploads/2020/12/digital-arts-studio-animated-logo-no-loop.gif"
          alt="digital-arts-studio-animated-logo-no-loop"
          itemprop="image"
          data-no-lazy="1"
          title="digital-arts-studio-animated-logo-no-loop"
          width="900"
          height="270"
        />
      </div>
      <div className="sm:flex hidden px-2 text-white space-x-5 text-xl items-center">
        <IoLocationOutline className="mr-1" /> 1082 Huff Rd NW B Atlanta, GA
        30318{" "}
        <div className="flex items-center">
          <AiOutlinePhone className="mr-1" />
          866-352-9779{" "}
        </div>
      </div>
      <div className="flex items-center justify-center ">
        {pathname === "/cancalc" ? (
          <Link href="/" className="">
            <button type="button" className="outline_btn ">
              Print Cost Calculator
            </button>
          </Link>
        ) : (
          <Link href="/cancalc">
            <button type="button" className="outline_btn">
              Canvas Calculator
            </button>
          </Link>
        )}
      </div>
      <div className="flex justify-center items-center">
        <Link href="https://www.digitalartsstudio.net/" target="_blank">
          <button type="button" className="outline_btn">
            Main Site
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
