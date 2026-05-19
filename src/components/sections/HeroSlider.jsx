"use client";

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Modules
import { Autoplay, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

import BaseButton from "../ui/BaseButton";
import { IoArrowForwardOutline } from "react-icons/io5";
import Image from "next/image";


// ======================================================
// Hero Slider Component
// ======================================================
// Displays 3 startup-focused hero banners with:
// - Auto sliding
// - Pagination
// - Background overlay
// - CTA buttons
// ======================================================

const HeroSlider = () => {
  return (
    <section className="relative overflow-hidden">

      {/* =========================================
          Swiper Slider Wrapper
      ========================================== */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-[90vh]"
      >

        {/* ======================================================
            Slide 01
        ====================================================== */}
        <SwiperSlide>

          {/* Slide Container */}
          <div className="relative w-full h-[90vh]">

            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Turn Startup Ideas Into Reality"
              fill
              priority
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Slide Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-4 w-full">

                <div className="max-w-3xl space-y-6">

                  {/* Badge */}
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-2 py-1 text-xs text-white backdrop-blur-md">
                    🚀 Startup Innovation Platform
                  </span>

                  {/* Heading */}
                  <h1 className="text-5xl md:text-6xl font-bold plus-jakarta text-white">
                    Turn Startup Ideas Into Reality
                  </h1>

                  {/* Description */}
                  <p className="text-sm text-gray-200 max-w-2xl">
                    Discover innovative startup concepts, validate ideas,
                    and collaborate with creative minds worldwide.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-5">

                    <BaseButton
                      text={"Explore Ideas"}
                      className={"rounded-xl bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"}
                      rightIcon={<IoArrowForwardOutline />}
                    />

                    <BaseButton
                      text={"Share Your Idea"}
                      className={"rounded-xl bg-white text-muted"}
                    />

                  </div>

                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

        {/* ======================================================
            Slide 02
        ====================================================== */}
        <SwiperSlide>

          <div className="relative w-full h-[90vh]">

            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Explore Trending Innovations"
              fill
              priority
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Slide Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-4 w-full">

                <div className="max-w-3xl space-y-6">

                  {/* Badge */}
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-2 py-1 text-xs text-white backdrop-blur-md">
                    💡 Discover New Opportunities
                  </span>

                  {/* Heading */}
                  <h1 className="text-5xl md:text-6xl font-bold plus-jakarta text-white">
                    Explore Trending Innovations
                  </h1>

                  {/* Description */}
                  <p className="text-sm text-gray-200 max-w-2xl">
                    Browse startup ideas across AI, FinTech, Health,
                    Education, and Green Energy.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-5">

                    <BaseButton
                      text={"Browse Ideas"}
                      className={"rounded-xl bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"}
                      rightIcon={<IoArrowForwardOutline />}
                    />

                    <BaseButton
                      text={"Join Community"}
                      className={"rounded-xl bg-white text-muted"}
                    />

                  </div>

                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

        {/* ======================================================
            Slide 03
        ====================================================== */}
        <SwiperSlide>

          <div className="relative w-full h-[90vh]">

            {/* Background Image */}
            <Image
              src="https://i.ibb.co.com/rKyVVgFb/amelie-mourichon-wus-OJ-2u-Y6w-unsplash.jpg"
              alt="Share Ideas & Get Feedback"
              fill
              priority
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Slide Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-4 w-full">

                <div className="max-w-3xl space-y-6">

                  {/* Badge */}
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-2 py-1 text-xs text-white backdrop-blur-md">
                    🌍 Build The Future Together
                  </span>

                  {/* Heading */}
                  <h1 className="text-5xl md:text-6xl font-bold plus-jakarta text-white">
                    Share Ideas & Get Feedback
                  </h1>

                  {/* Description */}
                  <p className="text-sm text-gray-200 max-w-2xl">
                    Collaborate with founders, innovators, and creators
                    to refine startup concepts together.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-5">

                    <BaseButton
                      text={"Start Sharing"}
                      className={"rounded-xl bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"}
                      rightIcon={<IoArrowForwardOutline />}
                    />

                    <BaseButton
                      text={"Learn More"}
                      className={"rounded-xl bg-white text-muted"}
                    />

                  </div>

                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default HeroSlider;