"use client";

import React from "react";
import SocialMedia from "./helpers/SocialMedia";

const Footer = () => {
  return (
    <footer className="py-10 mt-32 px-8 sm:px-28 md:px-60 lg:px-72 xl:px-96 flex flex-col bg-[#8266ff] text-[#e5e7eb] dark:text-gray-600">
      <div className="flex flex-col sm:flex-row justify-between pb-10">
        <div className="flex flex-col mb-8 sm:mb-0">
          <h3 className="font-extrabold text-2xl">Atul Nagose</h3>
          <a
            className="underline text-base -mt-1 mb-4"
            href="mailto:atulnagose123@gmail.com"
          >
            atulnagose123@gmail.com
          </a>
          <p className="text-xl italic">
            Living, Learning and Leveling up, one day at a time.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="font-extrabold text-2xl mb-4">SOCIAL</h3>
          <SocialMedia />
        </div>
      </div>

      <hr className="h-px border-0 bg-gray-900" />

      <div className="px-4 pt-4 text-center dark:text-gray-600">
        <small className="mb-2 block text-xs dark:text-gray-600">
          &copy;2024 Atul. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
