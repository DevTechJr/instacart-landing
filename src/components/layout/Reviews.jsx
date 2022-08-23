import React from "react";
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import { FaUsers } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between p-24 mt-0">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl mt-8 mb-8 font-bold text-accent sm:text-4xl">
          Trusted <span className="text-primary-focus">Reviews From</span> Our
          Customers :
        </h2>
      </div>
      {/* Divider */}
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <div class="max-w-5xl px-4 lg:py-8 mx-auto">
            <section class="p-8 bg-gray-100 rounded-lg">
              <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                <div class="relative">
                  <div class="aspect-w-1 aspect-h-1">
                    <img
                      src="https://placeimg.com/640/480/people?t=1"
                      alt=""
                      class="object-cover rounded-lg"
                    />
                  </div>

                  <div class="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
                    <span class="inline-block w-12 h-10 bg-accent rounded-lg text-white"></span>
                  </div>
                </div>

                <blockquote class="sm:col-span-2">
                  <p class="lg:text-md text-xs font-medium">
                    I have used Instacart several times since Covid started, and
                    every experience was great! Communication was awesome, the
                    quality of the produce chosen was great, and bagging was
                    perfect too. I couldn't be happier with their service. I
                    usually give an additional tip to the baggers/deliverers as
                    well because they're great, and I appreciate their service
                    and friendly communication.
                  </p>

                  <cite class="inline-flex items-center mt-8 not-italic">
                    <span class="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                    <p class="text-sm text-gray-500 uppercase sm:ml-3">
                      <strong>Patrick Star</strong>, Bikini Bottom
                    </p>
                  </cite>
                </blockquote>
              </div>
            </section>
          </div>

          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              class="btn border border-2 border-accent-focus bg-accent btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              class="btn border border-2 border-accent-focus bg-accent btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <div class="max-w-5xl px-4 py-8 mx-auto">
            <section class="p-8 bg-gray-100 rounded-lg">
              <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                <div class="relative">
                  <div class="aspect-w-1 aspect-h-1">
                    <img
                      src="https://placeimg.com/640/480/people?t=166"
                      alt=""
                      class="object-cover rounded-lg"
                    />
                  </div>

                  <div class="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
                    <span class="inline-block w-12 h-10 bg-accent rounded-lg"></span>
                  </div>
                </div>

                <blockquote class="sm:col-span-2">
                  <p class="lg:text-md text-xs font-medium">
                    The customer service is amazing, I got really shocked when I
                    saw they have 1-2 stars on trustpilot... I have been using
                    their services for about 2 years now and have had many
                    troubles, but every single one was addressed fully and in a
                    timely manner by the customer service. That's what she said.
                  </p>

                  <cite class="inline-flex items-center mt-8 not-italic">
                    <span class="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                    <p class="text-sm text-gray-500 uppercase sm:ml-3">
                      <strong>Michael Scott</strong>, Scranton
                    </p>
                  </cite>
                </blockquote>
              </div>
            </section>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              class="btn border border-2 border-accent-focus bg-accent btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide3"
              class="btn border border-2 border-accent-focus bg-accent btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <div
            class="max-w-5xl px-4 py-8 mx-auto"
            id="slide1 slide2 slide3 slide4 slide5"
          >
            <section class="p-8 bg-gray-100 rounded-lg">
              <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                <div class="relative">
                  <div class="aspect-w-1 aspect-h-1">
                    <img
                      src="https://placeimg.com/640/480/people?t=1661204564"
                      alt=""
                      class="object-cover rounded-lg"
                    />
                  </div>

                  <div class="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
                    <span class="inline-block w-12 h-10 bg-accent rounded-lg"></span>
                  </div>
                </div>

                <blockquote class="sm:col-span-2">
                  <p class="lg:text-md text-xs font-medium">
                    As a Instacart Shopper I love it. Easy to navigate for me
                    I'm 59 & I tried to do Point pick up & it was a nightmare..
                    I HIGHLY RECOMMEND working with Instacart and Using them to
                    order.. Great Company.
                  </p>

                  <cite class="inline-flex items-center mt-8 not-italic">
                    <span class="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                    <p class="text-sm text-gray-500 uppercase sm:ml-3">
                      <strong>Jim Halpert</strong>, Stamford
                    </p>
                  </cite>
                </blockquote>
              </div>
            </section>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              class="btn border border-2 border-accent-focus bg-accent btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide4"
              class="btn border border-2 border-accent-focus bg-accent btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <div class="max-w-5xl px-4 py-8 mx-auto">
            <section class="p-8 bg-gray-100 rounded-lg">
              <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                <div class="relative">
                  <div class="aspect-w-1 aspect-h-1">
                    <img
                      src="https://placeimg.com/640/480/people?t=1661204564071"
                      alt=""
                      class="object-cover rounded-lg"
                    />
                  </div>

                  <div class="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
                    <span class="inline-block w-12 h-10 bg-accent rounded-lg"></span>
                  </div>
                </div>

                <blockquote class="sm:col-span-2">
                  <p class="lg:text-md text-xs font-medium">
                    I love instacart. I don't shop at stores anymore. Great
                    shoppers, great app. Great customer service; almost
                    instantaneous. My only suggestion is that not all shoppers
                    shop frozen items last, so I do get melted icecream
                    occasionally. A small price to pay for the convenience.
                  </p>

                  <cite class="inline-flex items-center mt-8 not-italic">
                    <span class="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                    <p class="text-sm text-gray-500 uppercase sm:ml-3">
                      <strong>Peter Parker</strong>, New York City
                    </p>
                  </cite>
                </blockquote>
              </div>
            </section>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              class="btn border border-2 border-accent-focus bg-accent btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              class="btn border border-2 border-accent-focus bg-accent btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
