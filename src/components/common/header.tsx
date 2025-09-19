"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  BrainCircuit,
  Menu,
  X,
  CircleUserRound,
  User,
  Layers,
  CircleDollarSign,
  LogIn,
  House,
  Crown,
  LogOut,
} from "lucide-react";
import { NavLink, MobileLink } from "./nav-links";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mm_iconSize = "20";

  const isLoggedIn = true;

  return (
    <nav className=" container flex justify-between py-6 items-center  z-30">
      <div className="">
        <Link href="/" className=" flex items-center font-black text-2xl group">
          <BrainCircuit className="mr-1.5 mb-0.5 group-hover:rotate-180 transform transition duration-400 ease-in-out" />{" "}
          Tattva
        </Link>
      </div>
      <div className=" justify-between hidden md:flex ">
        <div className="px-3">
          <NavLink href="/#about">About</NavLink>
        </div>
        <div className="px-3">
          <NavLink href="/#docs">Docs</NavLink>
        </div>
        <div className="px-3">
          <NavLink href="/#pricing">Pricing</NavLink>
        </div>

        {isLoggedIn ? (
          <div className="px-3">
            <NavLink href="/#dashboard">Dashboard</NavLink>
          </div>
        ) : undefined}
      </div>
      {isLoggedIn ? (
        <div className="hidden md:flex items-center ">
          <Crown size={mm_iconSize} className="mr-4" />
          <NavLink href="/upload">Upload</NavLink>
          <NavLink href="/#signin">
            <LogOut className="ml-4" size={mm_iconSize} />
          </NavLink>
        </div>
      ) : (
        <div className="hidden md:flex">
          <NavLink href="/#signin">Sign In</NavLink>
        </div>
      )}
      <button
        className="md:hidden focus:outline-none p-2 rounded-xl bg-primary text-white  z-30"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="z-20" size={28} /> : <Menu size={28} />}
      </button>
      {/*------------- Mobile Sidebar Navlinks ----------------*/}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-accent text-white shadow-md transform transition-transform duration-300 ease-in-out z-20
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-row items-center p-6 ">
          <CircleUserRound size={"40px"} />
          <div className="px-2">
            <p>
              Welcome,
              <span className="text-primary text-md font-bold">
                {" "}
                Hrithik Ghutke
              </span>
            </p>
            <p className="text-gray-400 text-sm">Free Tier</p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4 px-6 py-6">
          <MobileLink href="/#dashboard" setIsOpen={setIsOpen}>
            <House size={mm_iconSize} />
            <p className="px-2.5">Dashboard</p>
          </MobileLink>
          <MobileLink href="/#about" setIsOpen={setIsOpen}>
            <User size={mm_iconSize} />
            <p className="px-2.5">About</p>
          </MobileLink>
          <MobileLink href="/#docs" setIsOpen={setIsOpen}>
            <Layers size={mm_iconSize} />
            <p className="px-2.5">Docs</p>
          </MobileLink>
          <MobileLink href="/#pricing" setIsOpen={setIsOpen}>
            <CircleDollarSign size={mm_iconSize} />
            <p className="px-2.5">Pricing</p>
          </MobileLink>
          {isLoggedIn ? (
            <MobileLink href="/signin" setIsOpen={setIsOpen}>
              <LogOut size={mm_iconSize} />
              <p className="px-2.5">Sign Out</p>
            </MobileLink>
          ) : (
            <MobileLink href="/signout" setIsOpen={setIsOpen}>
              <LogIn size={mm_iconSize} />
              <p className="px-2.5">Sign In</p>
            </MobileLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
