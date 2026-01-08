"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialsSection() {
  const testimonialSwiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Decorative Bubbles - Top Left Cluster */}
      <div className="absolute top-40 left-0 z-0 opacity-70">
        <Image
          src="/bubbles-1.png"
          alt="Bubbles"
          width={200}
          height={200}
          className="w-auto h-auto"
        />
      </div>

      {/* Decorative Bubbles - Bottom Left Cluster */}
      <div className="absolute bottom-0 left-0 z-0 opacity-70">
        <Image
          src="/bubbles.png"
          alt="Bubbles"
          width={180}
          height={180}
          className="w-auto h-auto"
        />
      </div>

      {/* Decorative Bubbles - Bottom Right Cluster */}
      <div className="absolute bottom-0 right-0 z-0 opacity-70">
        <Image
          src="/bubbles-2.png"
          alt="Bubbles"
          width={200}
          height={200}
          className="w-auto h-auto"
        />
      </div>

      <div className="container mx-auto px-8 md:px-12 relative z-10 max-w-7xl">
        {/* Section Title with Gradients */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 font-poppins">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            Customers about
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            Clean Wave
          </span>
        </h2>

        {/* Testimonials Slider */}
        <div className="relative overflow-visible w-full">
          {/* Custom Navigation Buttons */}
          <button
            onClick={() => testimonialSwiperRef.current?.slidePrev()}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            aria-label="Previous testimonials"
          >
            <svg
              className="w-6 h-6 text-[#1e3a8a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <Swiper
            onSwiper={(swiper) => {
              testimonialSwiperRef.current = swiper;
            }}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            centeredSlides={false}
            loop={false}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: false,
              },
            }}
            className="!pb-12"
          >
            <SwiperSlide>
              <div className="bg-white rounded-[25px] p-8 relative z-10 w-full transition-all duration-300 ease-out hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 text-[15px] mb-8 leading-relaxed font-inter">
                  This dual approach drives Top Performance for the brand and
                  redefines how people experience laundry. This dual approach
                  drives Top Performance for the brand and redefines how people
                  experience laundry.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-base font-poppins">
                      Johnson
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold text-xs">A</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-[25px] p-8 relative z-10 w-full transition-all duration-300 ease-out hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 text-[15px] mb-8 leading-relaxed font-inter">
                  This dual approach drives Top Performance for the brand and
                  redefines how people experience laundry. This dual approach
                  drives Top Performance for the brand and redefines how people
                  experience laundry.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white font-semibold text-base">
                        M
                      </span>
                    </div>
                    <p className="font-bold text-gray-900 text-base font-poppins">
                      Marry Jane
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-blue-600 font-bold text-xs">F</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-[25px] p-8 relative z-10 w-full transition-all duration-300 ease-out hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 text-[15px] mb-8 leading-relaxed font-inter">
                  This dual approach drives Top Performance for the brand and
                  redefines how people experience laundry. This dual approach
                  drives Top Performance for the brand and redefines how people
                  experience laundry.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white font-semibold text-sm">
                        E
                      </span>
                    </div>
                    <p className="font-bold text-gray-900 text-base font-poppins">
                      Emiley
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-gray-600 font-bold text-xs">B</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-[25px] p-8 relative z-10 w-full transition-all duration-300 ease-out hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 text-[15px] mb-8 leading-relaxed font-inter">
                  Amazing product! My clothes have never been cleaner. The stain
                  removal is incredible and the fragrance lasts for days. Highly
                  recommend to everyone!
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white font-semibold text-sm">
                        S
                      </span>
                    </div>
                    <p className="font-bold text-gray-900 text-base font-poppins">
                      Sarah
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-[25px] p-8 relative z-10 w-full transition-all duration-300 ease-out hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 text-[15px] mb-8 leading-relaxed font-inter">
                  Best detergent I've ever used! It works perfectly on all types
                  of fabrics and the color protection feature is outstanding. My
                  whites stay white!
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-300 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white font-semibold text-sm">
                        R
                      </span>
                    </div>
                    <p className="font-bold text-gray-900 text-base font-poppins">
                      Robert
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold text-xs">I</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-[25px] p-8 relative z-10 w-full transition-all duration-300 ease-out hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 text-[15px] mb-8 leading-relaxed font-inter">
                  This detergent has changed my laundry routine completely! It's
                  gentle on my hands but tough on stains. The fragrance is fresh
                  and lasts so long.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white font-semibold text-sm">
                        L
                      </span>
                    </div>
                    <p className="font-bold text-gray-900 text-base font-poppins">
                      Lisa
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold text-xs">C</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-[25px] p-8 relative z-10 w-full transition-all duration-300 ease-out hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 text-[15px] mb-8 leading-relaxed font-inter">
                  Excellent quality! I've tried many brands but this one stands
                  out. It's effective, eco-friendly, and the packaging is great.
                  Will definitely buy again!
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-300 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white font-semibold text-sm">
                        D
                      </span>
                    </div>
                    <p className="font-bold text-gray-900 text-base font-poppins">
                      David
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold text-xs">D</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button
            onClick={() => testimonialSwiperRef.current?.slideNext()}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            aria-label="Next testimonials"
          >
            <svg
              className="w-6 h-6 text-[#1e3a8a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
