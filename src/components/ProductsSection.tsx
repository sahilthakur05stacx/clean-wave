"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductsSection() {
  return (
    <section
      className="w-full py-8 md:py-12 relative"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #E0F6FF, #87CEEB)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-2 drop-shadow-md">
            Find the Best Product for You!
          </h2>
        </div>

        {/* Compact Product Slider Container */}
        <div className="bg-[#1e3a8a] rounded-2xl shadow-xl overflow-hidden border-2 border-yellow-400/30 max-w-5xl mx-auto">
          <div className="p-4 md:p-6 lg:p-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
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
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
              }}
              className="products-swiper"
            >
              <SwiperSlide>
                <div className="flex items-center justify-center h-[350px] md:h-[400px] lg:h-[450px]">
                  <Image
                    src="/product-slider-1.jpeg"
                    alt="Clean Wave liquid detergent product"
                    width={400}
                    height={500}
                    className="object-contain w-full h-full max-w-sm md:max-w-md lg:max-w-lg mx-auto drop-shadow-lg"
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-[350px] md:h-[400px] lg:h-[450px]">
                  <Image
                    src="/product-slider-2.jpeg"
                    alt="Clean Wave liquid detergent product"
                    width={400}
                    height={500}
                    className="object-contain w-full h-full max-w-sm md:max-w-md lg:max-w-lg mx-auto drop-shadow-lg"
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-[350px] md:h-[400px] lg:h-[450px]">
                  <Image
                    src="/product-slider-3.jpeg"
                    alt="Clean Wave liquid detergent product"
                    width={400}
                    height={500}
                    className="object-contain w-full h-full max-w-sm md:max-w-md lg:max-w-lg mx-auto drop-shadow-lg"
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-[350px] md:h-[400px] lg:h-[450px]">
                  <Image
                    src="/product-slider-4.jpeg"
                    alt="Clean Wave liquid detergent product"
                    width={400}
                    height={500}
                    className="object-contain w-full h-full max-w-sm md:max-w-md lg:max-w-lg mx-auto drop-shadow-lg"
                    priority
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .products-swiper {
          width: 100%;
        }
        .products-swiper .swiper-pagination {
          bottom: 10px !important;
          position: relative;
          margin-top: 10px;
        }
        .products-swiper .swiper-pagination-bullet {
          background-color: #facc15;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          margin: 0 5px;
          transition: all 0.3s ease;
        }
        .products-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
          background-color: #facc15;
        }
      `}</style>
    </section>
  );
}
