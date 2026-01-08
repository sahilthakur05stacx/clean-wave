"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="w-full h-[700px] flex flex-col items-center justify-center gap-10 pt-24 px-4 sm:px-6 lg:px-0 lg:flex-row lg:gap-0"
      style={{
        background: "linear-gradient(to bottom, #87CEEB, #E0F6FF, #FFFFFF)",
      }}
    >
      <div className="w-full h-auto flex flex-col items-center text-center gap-8 lg:w-1/2 lg:h-full lg:justify-center">
        <div className="w-full flex items-center justify-center lg:h-1/4">
          <p className="text-white text-3xl sm:text-4xl font-bold">
            Let Stains Rest in Peace...
          </p>
        </div>
        <div className="w-full flex items-center justify-center lg:h-3/4">
          <Image
            src="/hero-clean-wave.png"
            alt="Clean Wave detergent bottle with folded towels"
            width={400}
            height={600}
            className="w-full max-w-[300px] sm:max-w-[360px] h-auto object-contain -mt-6 sm:-mt-12 lg:max-w-none lg:mt-[-100px]"
            priority
          />
        </div>
      </div>

      <div className="w-full h-auto flex items-center justify-center lg:w-1/2 lg:h-full lg:items-end lg:justify-end">
        <Image
          src="/hero-towels.png"
          alt="Detergent bottle with towels and flowers"
          width={900}
          height={1200}
          className="w-full max-w-[340px] sm:max-w-[460px] h-auto object-contain lg:max-w-none"
          priority
        />
      </div>
    </section>
  );
}
