import React from "react";
import { FaGithub } from "react-icons/fa";

const Announcement = () => {
  return (
    <div class="px-4 py-3 text-white bg-primary-focus sm:justify-between sm:items-center sm:flex sm:px-6 lg:px-8 lg:sticky top-0 z-[100]">
      <p class="font-medium text-white text-center sm:text-left">
        Note : <span className="underline">This is just a landing page.</span>{" "}
        There are limited interactions available on this page.
      </p>

      <a class="cursor-pointer block px-5 py-3 mt-4 text-sm font-medium text-center text-accent transition bg-white rounded-lg sm:mt-0 hover:bg-white/90 active:text-accent-focus focus:outline-none focus:ring flex align-middle">
        <a href="https://github.com/DevTechJr/instacart-landing">Visit GitHub Repo</a> <FaGithub className="text-xl mx-3" />
      </a>
    </div>
  );
};

export default Announcement;
