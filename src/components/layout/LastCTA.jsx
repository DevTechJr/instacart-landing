import React from "react";

const LastCTA = () => {
  return (
    <div className="w-full p-8 bg-primary rounded-lg">
      <section className="w-full p-8 bg-white rounded-lg">
        <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  class="absolute inset-0 object-cover w-full h-full"
                  src="https://hips.hearstapps.com/hmg-prod/images/instacart-handout-1586307914.jpg"
                  alt="Indoors house"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-gray-100">
              <span class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">
                  Groceries Don't Have To Be A Hassle. Get Them{" "}
                  <span className="text-primary-focus">Instantly</span> With{" "}
                  <span className="text-accent"> InstaCart</span> Today.
                </h2>

                <p class="mt-4 text-gray-600">
                  Instacart makes it easy to order from your favorite stores.
                  Shop for items from stores near you, with a selection of more
                  than 500 retailers and trusted local grocers across North
                  America. Then, Instacart will connect you with a personal
                  shopper in your area to shop and deliver your order.
                  <br></br>
                  <br></br>
                  Simply place your order and choose a pickup time, and a
                  shopper will prepare your order at the store. When you get to
                  the store, use the Instacart app to notify us. Depending on
                  the store, a shopper or store employee will bring the
                  groceries to your car, or you can pick them up at the
                  designated area.
                </p>

                {/* <a
                  class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                  href="/contact"
                >
                  Get in Touch
                </a> */}

                <img
                  className="w-48 h-auto ml-auto mr-auto my-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Instacart_logo_and_wordmark.svg/2560px-Instacart_logo_and_wordmark.svg.png"
                />
                <div class="max-w-xl mx-auto mt-8">
                  <form
                    action={() => alert("This is just a landing page. Sorry!")}
                    class="sm:gap-4 sm:flex"
                  >
                    <div class="sm:flex-1">
                      <label for="email" class="sr-only">
                        Search For Stores...
                      </label>

                      <input
                        type="email"
                        placeholder="Search For Stores..."
                        class="w-full p-3 text-white transition bg-primary-content border-primary-content rounded-md shadow-sm focus:ring focus:outline-none focus:ring-primary focus:border-gray-800"
                      />
                    </div>

                    <button class="flex items-center justify-center w-full px-5 py-3 mt-4 text-white transition rounded-md bg-accent sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-accent">
                      <span class="text-sm font-medium"> Shop Now </span>

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
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LastCTA;
