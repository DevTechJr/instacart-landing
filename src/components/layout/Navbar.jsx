import React from "react";
import {
  FaSearch,
  FaChevronCircleRight,
  FaStore,
  FaPhoneAlt,
  FaUsersCog,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header class="bg-white px-5">
      <div class="navbar bg-base-100 flex items-center">
        <div class="navbar bg-base-100">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64"
              >
                <li>
                  <a className="hover:text-accent flex items-center">
                    <p className="mx-2">Departments</p>{" "}
                    <FaStore className="text-xl" />
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent flex items-center">
                    <p className="mx-2">More Ways To Shop</p>{" "}
                    <FaChevronCircleRight className="text-xl" />
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent flex items-center">
                    <p className="mx-2">Help & Support</p>{" "}
                    <FaUsersCog className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="navbar-center">
            <a class="btn btn-ghost normal-case text-xl">
              <img
                className="w-48 h-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Instacart_logo_and_wordmark.svg/2560px-Instacart_logo_and_wordmark.svg.png"
              />
            </a>
          </div>
          <div class="navbar-end">
            <button class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span class="badge badge-sm badge-primary indicator-item p-1">
                  3
                </span>
              </div>
            </button>
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle p-1">
                <div class="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="badge badge-sm badge-accent indicator-item">
                    8
                  </span>
                </div>
              </label>
              <div
                tabindex="0"
                class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div class="card-body">
                  <span class="font-bold text-lg">8 Items</span>
                  <span class="text-info">Subtotal: $29.89</span>
                  <div class="card-actions">
                    <button class="btn btn-primary btn-block text-white">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown dropdown-end">
              <label
                tabindex="0"
                class="btn btn-ghost btn-circle avatar lg:w-24 w-8"
              >
                <div class="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="hover:text-accent">Profile</a>
                </li>
                <li>
                  <a className="hover:text-accent">Current Orders</a>
                </li>
                <li>
                  <a class="justify-between hover:text-accent">
                    Order History
                    <span class="badge">New</span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent">Settings</a>
                </li>
                <li>
                  <a className="hover:text-accent">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div class="px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <img
            className="w-48 h-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Instacart_logo_and_wordmark.svg/2560px-Instacart_logo_and_wordmark.svg.png"
          />

          <div class="hidden md:block">
            <nav aria-labelledby="header-navigation">
              <h2 class="sr-only" id="header-navigation">
                Header navigation
              </h2>

              <ul class="flex items-center gap-6 text-sm">
                <div class="form-control">
                  <div class="input-group bg-accent flex items-center rounded-lg w-full">
                    <input
                      type="text"
                      placeholder="Search for stores…"
                      class="input  transition duration-500 ease-in-out input-accent input-md"
                    />
                    <div className="p-2 flex items-center justify-center cursor-pointer">
                      <FaSearch className="h-5 active:drop-shadow-2xl text-white" />
                    </div>
                  </div>
                </div>
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:gap-4 sm:flex">
              <a
                class="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow"
                href="/"
              >
                Login
              </a>

              <div class="hidden sm:flex">
                <a
                  class="px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md"
                  href="/"
                >
                  Register
                </a>
              </div>
            </div>

            <div class="block md:hidden">
              <button class="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </header>
  );
};

export default Navbar;
