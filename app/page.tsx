"use client";
import Contacts from "@/component/Contacts";
import Features from "@/component/Features";
import Herosection from "@/component/HeroSection";
import Testimonial from "@/component/Testimonial";

export default function Home() {
  return (
    <>
      <Herosection />
      <Testimonial />
      <Features />
      <Contacts />
    </>
  );
}
