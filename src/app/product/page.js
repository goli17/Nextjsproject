"use client";

import { motion } from "framer-motion";
import { Navbar } from "./../navbar";
import { PageWrapper } from "./../page-wrapper";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Productpage() {
  return (
    <div className="container mx-auto">
      <h1>
        <Navbar />
        <PageWrapper>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 pt-24 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-0">
              <div>
                <div class="w-full">
                  <div class="mb-12 max-w-[620px] lg:mb-20">
                    <span class="mb-2 block text-lg font-semibold text-primary">
                      All Products
                    </span>
                    <h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                      New T-Shirt Collections
                    </h2>
                    <p class="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                      Discover our exquisite collection of shirts for every
                      occasion. Elevate your style with premium fabrics,
                      timeless designs, and a perfect fit. From casual to
                      formal, we have the perfect shirt for you. Shop now and
                      experience effortless online shopping at its finest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
              <motion.div variants={images} class="group relative">
                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://dcassetcdn.com/design_img/3967256/693586/26976942/q7nw6bk7s9w9vmjgfxwh8hs7p1_image.png"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Bold, Store Martial Art T-shirt Design
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">White</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">₹4,500</p>
                </div>
              </motion.div>

              <motion.div variants={images} class="group relative">
                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://dcassetcdn.com/design_img/3967256/873177/26980232/nc1bz6p9hdhx6srxek80cw9qas_image.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Bold, Screen Printing Martial Art T-shirt Design
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">₹4,900</p>
                </div>
              </motion.div>

              <motion.div variants={images} class="group relative">
                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://cdn.shopaccino.com/feranoid/products/who-cares-maroon-t-shirt-634335_m.jpg?v=499"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Maroon T-Shirt
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Maroon</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">₹5,900</p>
                </div>
              </motion.div>

              <motion.div variants={images} class="group relative">
                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://uploads-ssl.webflow.com/644936ee98f322622c685779/645ce6722ad9dd61c8f739a1_Classic-T-Shirt-Gery-Navy.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Inspire Adult T-Shirts
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Navy</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">₹3,900</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </PageWrapper>
      </h1>
    </div>
  );
}
