"use client";

import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col w-full pt-3">
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <Link href="/" className="bg-[#ff5059] p-4 border-2 rounded-xl">
            <Image
              src="/assets/logo.png"
              alt="Digital Arts Studio Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="sm:flex hidden justify-center items-center">
          <IoLocationOutline className="text-xl ml-2 mr-1" /> 1082 Huff Rd NW B
          Atlanta, GA 30318 <AiOutlinePhone className="text-xl ml-2 mr-1" />{" "}
          866-352-9779
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
      </div>
    </nav>
  );
};

export default Nav;
