"use client";

import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div id="home">
        <HeroSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <SocialMediaSection />
      <div id="contact">
        <ContactSection />
      </div>
      <TestimonialsSection />
    </div>
  );
}
