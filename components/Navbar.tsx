"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PublicOnly from "./PublicOnly";
import ClientOnly from "./ClientOnly";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="w-full py-5 flex justify-between items-center static top-0 z-[99]">
      <Link href="/" className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
        Yanz
      </Link>
      <div className="sm:flex gap-5 hidden">
        <PublicOnly>
          <Link
            href="/"
            className="text-[#232323] font-semibold text-lg hover:border-b border-[#232323]"
          >
            Home
          </Link>
          <Link
            href="/skills"
            className="text-[#232323] font-semibold text-lg hover:border-b border-[#232323]"
          >
            Skills
          </Link>
          <Link
            href="/portfolio"
            className="text-[#232323] font-semibold text-lg hover:border-b border-[#232323]"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-[#232323] font-semibold text-lg hover:border-b border-[#232323]"
          >
            Contact
          </Link>
          <Link
            href="/sign-in"
            className="text-[#232323] font-semibold text-lg hover:border-b border-[#232323]"
          >
            Login
          </Link>
        </PublicOnly>
        <ClientOnly>
          <Link
            href="/home"
            className="text-[#232323] font-semibold text-lg hover:border-b border-[#232323]"
          >
            Dashboard
          </Link>
          <MenuDropdown />
        </ClientOnly>
      </div>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center sm:hidden"
      >
        <span
          className={`bg-slate-900 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-slate-900 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-slate-900 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        ></span>
      </button>
      <div
        className={
          "ease-in-out w-full h-[90vh] absolute top-[60px] bottom-0 left-0 right-0 bg-white  justify-center items-center flex-col gap-5 sm:hidden " +
          `${isOpen ? "flex" : "hidden"}`
        }
      >
        <ClientOnly>
          <Link
            href="/home"
            className="text-[#232323] font-semibold text-lg border-b border-white hover:border-[#232323]"
          >
            Dashboard
          </Link>
          <MenuDropdown />
        </ClientOnly>
        <PublicOnly>
          <Link
            href="/"
            className="text-[#232323] font-semibold text-lg border-b border-white hover:border-[#232323]"
          >
            Home
          </Link>
          <Link
            href="/skills"
            className="text-[#232323] font-semibold text-lg border-b border-white hover:border-[#232323]"
          >
            Skills
          </Link>
          <Link
            href="/portfolio"
            className="text-[#232323] font-semibold text-lg border-b border-white hover:border-[#232323]"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-[#232323] font-semibold text-lg border-b border-white hover:border-[#232323]"
          >
            Contact
          </Link>
          <Link
            href="/sign-in"
            className="text-[#232323] font-semibold text-lg border-b border-white hover:border-[#232323]"
          >
            Login
          </Link>
        </PublicOnly>
      </div>
    </nav>
  );
};

export default Navbar;
