import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Steps = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-10 mt-16 p-10 bg-primary rounded-xl">
      <div className="w-full flex lg:p-28 flex-col items-center p-10 bg-white rounded-xl">
        <div className="lg:divider">
          <h1 className="font-bold text-4xl text-primary text-center">
            It's Just 3 <span className="text-accent">Easy</span> Steps!
          </h1>
        </div>

        <div className="steps flex w-full justify-evenly mt-20 lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col">
          <div class="flex justify-center flex flex-col lg:flex-row">
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-dashed border-4 border-primary mx-8 lg:my-0 my-10">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg lg:h-64 h-30 w-full"
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/12/10/mother-daughter-tablet.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-primary text-xl font-medium mb-2">
                  Select The Items You Want
                </h5>
                <p class="text-primary-focus text-base mb-4">
                  Select items from your favorite grocery stores at
                  Instacart.com or in the app.
                </p>
              </div>
            </div>
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-dashed border-4 border-accent mx-8 lg:my-0 my-10">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg lg:h-64 h-30 w-full"
                  src="https://www.instacart.com/company/wp-content/uploads/2021/08/1N4uGV160kBgELJTb148sCw.png"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-accent text-xl font-medium mb-2">
                  See Real-Time Updates
                </h5>
                <p class="text-accent-focus text-base mb-4">
                  Personal shoppers pick items with care. Chat as they shop and
                  manage your order.
                </p>
              </div>
            </div>
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-dashed border-4 border-primary mx-8 lg:my-0 my-10">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg lg:h-64 h-30 w-full"
                  src="https://www.modernretail.co/wp-content/uploads/sites/5/2020/03/instacart-grocery-bag.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-primary text-xl font-medium mb-2">
                  Get your items same-day
                </h5>
                <p class="text-primary-focus text-base mb-4">
                  Pick a convenient time for you. Enjoy Instacart’s 100% quality
                  guarantee on every order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
