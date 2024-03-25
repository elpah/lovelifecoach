"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-stone-300 shadow-md">
        <nav className="flex w-11/12 m-auto justify-between h-16 items-center text-gray-500 text-lg">
          <Link href="/">
            <div className="cursor-pointer">Logo Container</div>
          </Link>
          <ul className="hidden md:flex gap-2 w-1/2 justify-between pr-6 lg:w-1/3">
            <Link href="/">
              <li className="cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left after:h-[2px] after:bg-sky-700">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left after:h-[2px] after:bg-sky-700">
                About
              </li>
            </Link>
            <Link href="services">
              <li className="cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left after:h-[2px] after:bg-sky-700">
                Services
              </li>
            </Link>
            <Link href="contact">
              <li className="cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left after:h-[2px] after:bg-sky-700">
                Contact
              </li>
            </Link>
          </ul>
          <div className="text-base md:hidden">
            <FaBars onClick={() => setIsOpen(!isOpen)} className="text-2xl" />
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="absolute top-0  w-full h-screen  pt-4 pl-7 pr-7 text-gray-500 mt-0 text-lg bg-stone-300 shadow-md  md:hidden">
          <div className="flex justify-between pt-1 pb-4">
            <div>Logo Container</div>
            <FaTimes onClick={() => setIsOpen(!isOpen)} className="text-2xl" />
          </div>
          <ul className="flex flex-col text-2xl items-end">
            <Link href="/">
              <li onClick={() => setIsOpen(false)} className="pb-8 mt-20">
                Home -
              </li>
            </Link>
            <Link href="/about">
              <li onClick={() => setIsOpen(false)} className="pb-8">
                About -
              </li>
            </Link>
            <Link href="/services">
              <li onClick={() => setIsOpen(false)} className="pb-8">
                Services -
              </li>
            </Link>
            <Link href="/contact">
              <li onClick={() => setIsOpen(false)} className="pb-8">
                Contact -
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
