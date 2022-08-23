import React from "react";
import {
  FaHouseUser,
  FaCity,
  FaUserClock,
  FaUsersCog,
  FaShippingFast,
  FaTags,
} from "react-icons/fa";

const PickUs = () => {
  return (
    <section class="text-white mt-8 p-8 bg-primary rounded-lg">
      <div class="w-full px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-white rounded-lg">
        <div class="max-w-lg mx-auto text-center">
          <h2 class="text-3xl font-bold sm:text-4xl text-accent">
            Why <span className="text-primary-focus">Choose</span> Us?
          </h2>

          <p class="mt-4 text-info-content font-medium">
            <span className="text-accent">InstaCart</span> offers services that
            no competitors offer to their customers. We ensure that there is
            100% transparency and seamless interaction between you, the customer
            and our shopping assistants that help pick up your items at stores.
            Look below at how we stand out from other grocery delivery services!
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <a class="block p-8 transition border-2 border border-accent shadow-xl rounded-xl hover:shadow-accent hover:border-accent-focus">
            <FaHouseUser className="text-accent text-3xl" />

            <h3 class="mt-4 text-xl font-bold text-accent">
              Order From Anywhere!
            </h3>

            <p class="mt-1 text-sm text-info-content">
              You can place orders from anywhere- from your living room, to the
              office. We offer flexibility with your orders. Pick when you want
              them, any day and at anytime! Just think about when you need them,
              let us know, and we got your back!
            </p>
          </a>
          {/* Divider */}
          <a class="block p-8 transition border-2 border border-primary shadow-xl rounded-xl hover:shadow-primary hover:border-primary-focus">
            <FaCity className="text-primary text-3xl" />

            <h3 class="mt-4 text-xl font-bold text-primary">
              Thousands Of Stores
            </h3>

            <p class="mt-1 text-sm text-info-content">
              InstaCart has no barriers when it comes to stores. You can pick
              from the hundreds of thousands of stores we have- INCLUDING
              Membership warehouses such as Sam's Club and Costco! From local
              delis to megamarts and big box stores- you can pick anything!
            </p>
          </a>
          {/* Divider */}
          <a class="block p-8 transition border-2 border border-accent shadow-xl rounded-xl hover:shadow-accent hover:border-accent-focus">
            <FaUserClock className="text-accent text-3xl" />

            <h3 class="mt-4 text-xl font-bold text-accent">
              Timely Deliveries
            </h3>

            <p class="mt-1 text-sm text-info-content">
              Something we pride about at InstaCart is our ON-TIME deliveries.
              Our shopping assistants are trained for hours to make sure they
              are swift, efficient and careful to make sure customer orders are
              on time. Don't worry, lunch won't be delayed!
            </p>
          </a>
          {/* Divider */}
          <a class="block p-8 transition border-2 border border-primary shadow-xl rounded-xl hover:shadow-primary hover:border-primary-focus">
            <FaUsersCog className="text-primary text-3xl" />

            <h3 class="mt-4 text-xl font-bold text-primary">
              Customer Service
            </h3>

            <p class="mt-1 text-sm text-info-content">
              We offer award winning customer service at InstaCart because we
              want to ensure the satisfaction of customers. Didn't get an order
              right? Any issues with your items? Simply let us know! We'll be
              happy to help you sort it out!
            </p>
          </a>
          {/* Divider */}
          <a class="block p-8 transition border-2 border border-accent shadow-xl rounded-xl hover:shadow-accent hover:border-accent-focus">
            <FaShippingFast className="text-accent text-3xl" />

            <h3 class="mt-4 text-xl font-bold text-accent">
              LiveTime Order Updates
            </h3>

            <p class="mt-1 text-sm text-info-content">
              Our app offers an exclusive interface that allows customers to be
              in direct contact with shoppers through interactive chat features,
              phone calls and graphic displays to indicate the progress of your
              orders!
            </p>
          </a>
          {/* Divider */}
          <a class="block p-8 transition border-2 border border-primary shadow-xl rounded-xl hover:shadow-primary hover:border-primary-focus">
            <FaTags className="text-primary text-3xl" />

            <h3 class="mt-4 text-xl font-bold text-primary">Best Prices</h3>

            <p class="mt-1 text-sm text-info-content">
              Unlike other grocery delivery services, we ensure that groceries
              are priced at affordable rates to ensure you get a meal on your
              dining table.
            </p>
          </a>
          {/* Divider */}
        </div>

        <div class="mt-12 text-center">
          <a class="inline-flex items-center px-8 py-3 mt-8 text-white bg-primary-focus border border-primary rounded hover:bg-success focus:outline-none focus:ring">
            <span class="text-sm font-medium"> Start Shopping </span>

            <svg
              class="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PickUs;
