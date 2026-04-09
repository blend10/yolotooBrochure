"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {


  return (
    // Fixed header with z-index 50
    <div className="bg-black/10 backdrop-blur-2xl fixed top-0 left-0 z-50 w-full transition-all border-b border-white/5">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1400px] mx-auto flex py-4 px-6 justify-center flex-row items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={170}
            height={36}
            className="w-[120px] md:w-[170px] h-auto cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
