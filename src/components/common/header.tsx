import Link from "next/link";
import React from "react";
import { BrainCircuit } from "lucide-react";

function Header() {
  return (
    <nav className="container flex justify-between py-6 items-center">
      <div className="">
        <Link href="/" className="flex items-center font-black text-2xl group">
          <BrainCircuit className="mr-2 mb-0.5 group-hover:rotate-180 transform transition duration-400 ease-in-out" />{" "}
          Tattva
        </Link>
      </div>

      <div className="flex justify-between ">
        <div className="px-3">
          <Link href="/#about">About</Link>
        </div>
        <div className="px-3">
          <Link href="/#docs">Docs</Link>
        </div>
        <div className="px-3">
          <Link href="/#pricing">Pricing</Link>
        </div>
      </div>

      <div className="">
        <Link href="/#signin">Sign In</Link>
      </div>
    </nav>
  );
}

export default Header;
