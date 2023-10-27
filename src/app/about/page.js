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
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Aboutpage() {
  return (
    <div className="container mx-auto">
      <h1>
        <Navbar />
        <PageWrapper>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-5">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Clothes Specifications
                </h2>
                <p className="mt-4 text-gray-500">
                  High-quality apparel for all ages, sizes, and styles.
                  Extensive collection of clothing, including trendy fashion,
                  classic essentials, and comfortable athleisure.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Origin</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      "Explore the world's fashion, shop global styles at
                      Clothes Origin."
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Material</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Silk, Cotton, Wool, Polyester, Denim, Leather, Linen,
                      Velvet, Nylon, Spandex.
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Dimensions</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Small (S), Medium (M), Large (L), Extra Large (XL)
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Finish</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      High-quality, stylish, diverse, user-friendly, filters,
                      sizes, affordable, shipping, returns, satisfaction.
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Includes</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Buying Above ₹5,000 get 1 t-shirt free
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      Considerations
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Made from natural materials. Grain and color vary with
                      each item.
                    </dd>
                  </div>
                </dl>
              </div>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"
              >
                <motion.img
                  src="https://cdn.shopify.com/s/files/1/0094/6326/7379/products/TS-639_5.jpg?v=1673264696"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                  variants={images}
                />
                <motion.img
                  src="https://dz3aw12iizk17.cloudfront.net/cache/catalog/Marshall_Artist/marshall_artist_siren_polo_shirt_black_3-870x1110.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                  variants={images}
                />
                <motion.img
                  src="https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/r/s/f/3xl-tbh-altu-br-the-bear-house-original-imagrk8g6s3qhezp.jpeg?q=90"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                  variants={images}
                />
                <motion.img
                  src="https://rukminim1.flixcart.com/image/850/1000/xif0q/t-shirt/b/h/1/-original-imagtdppjmgmy3k5.jpeg?q=90"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                  variants={images}
                />
              </motion.div>
            </div>
          </div>
        </PageWrapper>
      </h1>
    </div>
  );
}
