"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductsSection() {
  return (
    <section
      className="w-full h-[750px] overflow-hidden"
      style={{
        background: "linear-gradient(to top, #87CEEB, #E0F6FF, #FFFFFF)",
      }}
    >
      {/* Dark Blue Box Container */}
      <div className="bg-[#1e3a8a] mx-auto w-[95%] max-w-[95%]  rounded-lg px-6 py-16 my-8">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-12">
          Find the Best product for you!
        </h2>

        {/* Slider Container */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
            }}
            className="products-swiper pb-16"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center h-full">
                <div className="text-white text-center">
                  <Image
                    src="/product-slider-1.jpeg"
                    alt="Clean Wave liquid detergent product"
                    width={400}
                    height={400}
                    style={{ width: "400px", height: "400px" }}
                    priority
                    className="object-contain max-h-[600px]"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center h-full">
                <div className="text-white text-center">
                  <Image
                    src="/product-slider-2.jpeg"
                    alt="Clean Wave liquid detergent product"
                    width={400}
                    height={400}
                    style={{ width: "400px", height: "400px" }}
                    priority
                    className="object-contain max-h-[600px]"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center h-full">
                <div className="text-white text-center">
                  <Image
                    src="/product-slider-3.jpeg"
                    alt="Clean Wave liquid detergent product"
                    width={400}
                    height={400}
                    style={{ width: "400px", height: "400px" }}
                    priority
                    className="object-contain max-h-[600px]"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center h-full">
                <div className="text-white text-center">
                  <Image
                    src="/product-slider-4.jpeg"
                    alt="Clean Wave liquid detergent product"
                    width={400}
                    height={400}
                    style={{ width: "400px", height: "400px" }}
                    priority
                    className="object-contain max-h-[600px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <style jsx global>{`
          .products-swiper .swiper-pagination {
            bottom: 0 !important;
          }
          .products-swiper .swiper-pagination-bullet {
            background-color: #facc15;
            opacity: 0.6;
          }
          .products-swiper .swiper-pagination-bullet-active {
            opacity: 1;
          }
        `}</style>
      </div>
    </section>
  );
}
