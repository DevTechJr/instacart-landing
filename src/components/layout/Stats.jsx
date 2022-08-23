import React from "react";

const Stats = () => {
  return (
    <section class="bg-white">
      <div class="max-w-screen-xl px-4  py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-accent sm:text-4xl">
            Trusted By Your Local Stores
          </h2>

          <p class="mt-4 text-info-content sm:text-xl font-medium">
            Hundreds of thousands of grocery stores across the world trust{" "}
            <span className="text-accent">InstaCart</span> with the task of
            delivering your groceries from their store- just look at the
            numbers!
          </p>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex flex-col p-8 text-center border bg-primary-focus border-gray-100 rounded-lg">
              <div className="flex flex-col px-4 py-6 bg-white rounded-lg">
                <dt class="order-last text-lg font-medium text-info-content mt-4">
                  Total Participating Stores
                </dt>

                <dd class="text-4xl font-extrabold text-accent md:text-5xl ">
                  780,000+
                </dd>
              </div>
            </div>
            <div class="flex flex-col p-8 text-center border bg-primary-focus border-gray-100 rounded-lg">
              <div className="flex flex-col px-4 py-6 bg-white rounded-lg">
                <dt class="order-last text-lg font-medium text-info-content mt-4">
                  Items Delivered Every Hour
                </dt>

                <dd class="text-4xl font-extrabold text-accent md:text-5xl">
                  12,000+
                </dd>
              </div>
            </div>
            <div class="flex flex-col p-8 text-center border bg-primary-focus border-gray-100 rounded-lg">
              <div className="flex flex-col px-4 py-6 bg-white rounded-lg">
                <dt class="order-last text-lg font-medium text-info-content mt-4">
                  Happy Customers Daily
                </dt>

                <dd class="text-4xl font-extrabold text-accent md:text-5xl">
                  25.6m+
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
