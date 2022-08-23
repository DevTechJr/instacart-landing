import React from "react";

const CTA = () => {
  return (
    <aside class="overflow-hidden bg-primary sm:grid sm:grid-cols-2 sm:items-center">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="max-w-xl mx-auto text-center sm:text-left">
          <h2 class="text-2xl font-bold text-white md:text-3xl">
            The Grocery Run Just Got <span className="text-accent">Easier</span>
            .
          </h2>

          <p class="hidden text-info-content font-medium md:mt-4 md:block">
            Instacart makes it easy to order from your favorite stores. Shop for
            items from stores near you, with a selection of more than 500
            retailers and trusted local grocers across North America. Then,
            Instacart will connect you with a personal shopper in your area to
            shop and deliver your order.
            <br></br>
            <br></br>
            Simply place your order and choose a pickup time, and a shopper will
            prepare your order at the store. When you get to the store, use the
            Instacart app to notify us. Depending on the store, a shopper or
            store employee will bring the groceries to your car, or you can pick
            them up at the designated area.
          </p>

          <div class="mt-4 md:mt-8 flex w-full justify-items-start p-5">
            <a
              href="#"
              class="relative inline-block group focus:outline-none focus:ring focus:ring-yellow-400 mr-14"
            >
              <span class="relative z-10 block px-12 py-3 text-sm font-medium text-white transition bg-accent rounded group-hover:scale-105">
                Create An Account...
              </span>

              <span class="absolute inset-0 transition scale-105 rounded bg-accent-focus -rotate-3 group-hover:rotate-0"></span>
            </a>
            <a
              href="#"
              class="relative inline-block group focus:outline-none focus:ring focus:ring-yellow-400"
            >
              <span class="relative z-10 block px-12 py-3 text-sm font-medium text-accent transition bg-gray-200 rounded group-hover:scale-105">
                Browse Stores Nearby...
              </span>

              <span class="absolute inset-0 transition scale-105 rounded bg-gray-300 -rotate-3 group-hover:rotate-0"></span>
            </a>
          </div>
        </div>
      </div>

      <img
        alt="#"
        src="https://wpassets.brainstation.io/app/uploads/2017/12/13095824/Loblaw-delivery-2.png"
        class="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end border-l-4 border-t-4 border-gray-900"
      />
    </aside>
  );
};

export default CTA;
