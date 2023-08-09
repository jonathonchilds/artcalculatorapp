"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/glowButton.css";

const Nav = () => {
  const pathname = usePathname();

const navigationButton = (pathname) => {
  if (pathname === '/' )
  {
    return (
    <Link href="/cancalc">
    <button
      type="button"
      className="glowingButton uppercase "
    >
      Canvas Prints
    </button>
  </Link>)
  }
  if (pathname === '/cancalc') 
  {
    return (
    <Link href="/" className="">
    <button
      type="button"
      className="glowingButton uppercase "
    >
      Paper Prints
    </button>
  </Link>)
  }
  if (pathname === '/printableTable')
  {
    return (
      <Link href="/" className="">
      <button
        type="button"
        className="glowingButton uppercase"
      >
        Back
      </button>
    </Link>)
  }
}

  return (
    <nav className="sm:flex sm:flex-row flex-col justify-center text-center space-y-6 sm:space-y-0 py-10 bg-[#191717] w-full px-12 sm:sticky sm:top-0 sm:justify-evenly items-center sm:no-print no-print ">
      <div className="sm:flex hidden text-white w-[400px] text-2xl font-light tracking-[8px]">
        (866) 352-9779
      </div>
      <div>
        <Link href="https://www.digitalartsstudio.net/" target="_blank">
          <img
            src="https://www.digitalartsstudio.net/wp-content/uploads/2020/12/digital-arts-studio-animated-logo-no-loop.gif"
            alt="Digital Arts Studio Logo"
            width={450}
            className="2xl:w-[450px] w-[275px]"
          />
        </Link>
      </div>
      <div className="sm:hidden text-white text-xl font-light tracking-[8px]">
        (866) 352-9779
      </div>
      <div className="sm:w-[400px] flex p-2 sm:p-auto justify-center">
        <div>
          {navigationButton(pathname)}
        
        </div>
      </div>
    </nav>
  );
};

export default Nav;
