"use client";

import React from "react";
import Image from "next/image";

type FeatureIcon =
  | { type: "image"; src: string; alt: string }
  | { type: "bottle"; variant?: "default" | "sparkle" };

type Feature = {
  id: string;
  titlePrimary: string;
  titleSecondary: string;
  icon: FeatureIcon;
};

const topRowItems: Array<Feature | { type: "product" }> = [
  {
    id: "better-dissolution",
    titlePrimary: "Better",
    titleSecondary: "Dissolution",
    icon: {
      type: "image",
      src: "/better-dissolution.png",
      alt: "Better Dissolution icon",
    },
  },
  {
    id: "faster-stain-removal",
    titlePrimary: "Faster",
    titleSecondary: "Stain Removal",
    icon: {
      type: "image",
      src: "/faster-satin-removal.png",
      alt: "Faster stain removal icon",
    },
  },
  { type: "product" },
];

const bottomRowItems: Feature[] = [
  {
    id: "super-fragrance",
    titlePrimary: "Super",
    titleSecondary: "Fragrance",
    icon: {
      type: "image",
      src: "/super-fragrance.png",
      alt: "Super fragrance icon",
    },
  },
  {
    id: "colour-care",
    titlePrimary: "Colour",
    titleSecondary: "Care",
    icon: {
      type: "image",
      src: "/colour-care.png",
      alt: "Colour care icon",
    },
  },
  {
    id: "safe-on-hands",
    titlePrimary: "Safe on",
    titleSecondary: "Hands",
    icon: {
      type: "image",
      src: "/safe-on-hands.png",
      alt: "Safe on hands icon",
    },
  },
];

const BottleIcon = ({
  variant = "default",
}: {
  variant?: "default" | "sparkle";
}) => (
  <div className="relative w-14 h-16 md:w-16 md:h-20">
    <div className="absolute inset-x-3 bottom-0 h-12 bg-linear-to-b from-pink-400 via-pink-500 to-pink-600 rounded-t-[18px]" />
    <div className="absolute inset-x-5 bottom-10 h-6 bg-yellow-400 rounded-full" />
    <div className="absolute inset-x-4 bottom-12 h-3 bg-slate-800 rounded-lg" />
    <div className="absolute inset-x-6 bottom-[68px] h-3 bg-slate-700 rounded-sm" />
    {variant === "sparkle" && (
      <>
        <div className="absolute -right-3 bottom-8 h-3 w-3 rounded-full bg-blue-200 opacity-70" />
        <div className="absolute -left-2 bottom-12 h-4 w-4 rounded-full bg-blue-100 opacity-70" />
        <div className="absolute inset-x-1 bottom-4 h-3 bg-white/50 rounded-full blur-[1px]" />
      </>
    )}
  </div>
);

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#87CEEB] flex items-center justify-center mb-4 shadow-md">
      {feature.icon.type === "image" ? (
        <Image
          src={feature.icon.src}
          alt={feature.icon.alt}
          width={64}
          height={64}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          priority
        />
      ) : (
        <BottleIcon variant={feature.icon.variant} />
      )}
    </div>
    <p className="text-lg md:text-xl font-semibold">
      <span className="text-yellow-500">{feature.titlePrimary}</span>{" "}
      <span className="text-blue-600">{feature.titleSecondary}</span>
    </p>
  </div>
);

export default function AboutSection() {
  return (
    <section
      className="relative overflow-hidden pt-32 md:pt-36 pb-24"
      style={{
        background: "linear-gradient(to bottom, #87CEEB, #E0F6FF, #FFFFFF)",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#E91E63" }}
            >
              About us
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              As a leading innovator in the detergent industry, Clean Wave
              brings a refreshing revolution to laundry care. Blending advanced
              cleaning technology with a gentle touch, Clean Wave delivers
              powerful stain removal while preserving the softness and color of
              every fabric. With every wash, Clean Wave ensures freshness,
              brightness, and a wave of cleanliness that redefines the way you
              experience laundry.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 space-y-12 lg:space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 items-start justify-items-center sm:justify-items-start">
              {topRowItems.map((item, index) => (
                <div key={index} className="w-full">
                  {"type" in item && item.type === "product" ? (
                    <div className="relative flex flex-col items-center justify-center w-full">
                      <div className="absolute top-4 right-6 sm:top-0 sm:right-0 md:-top-6 md:-right-4 lg:-top-10 lg:-right-8 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 opacity-60">
                        <Image
                          src="/bubbles.png"
                          alt="Decorative bubbles"
                          width={200}
                          height={200}
                          className="w-full h-full object-contain"
                          priority
                        />
                      </div>
                      <Image
                        src="/about-bottles-removebg-preview.png"
                        alt="BRAND POWER Ocean Breeze detergent bottles"
                        width={420}
                        height={520}
                        className="relative w-full max-w-[220px] sm:max-w-sm md:max-w-md lg:max-w-full -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-[280px] mx-auto lg:ml-[-120px] object-contain drop-shadow-2xl transition-transform duration-700"
                        style={{
                          animation: "floatBottle 7s ease-in-out infinite",
                        }}
                        priority
                      />
                    </div>
                  ) : (
                    <FeatureCard feature={item as Feature} />
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 justify-items-center sm:justify-items-start">
              {bottomRowItems.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes floatBottle {
          0%,
          100% {
            transform: translateY(-6px);
          }
          50% {
            transform: translateY(8px);
          }
        }
      `}</style>
    </section>
  );
}
