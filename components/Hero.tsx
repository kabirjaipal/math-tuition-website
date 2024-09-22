import Link from "next/link";
import Image from "next/image"; // Import next/image component
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-oceanblue overflow-hidden w-full">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero.webp" // Preload webp format for faster loading
          alt="Math Tuition Background"
          layout="fill" // Fill the container with the image
          objectFit="cover" // Maintain aspect ratio and cover container
          quality={75} // Image quality (0 - 100)
          loading="eager" // Eager loading for immediate loading
        />
        <div className="absolute inset-0 bg-gradient-to-r from-oceanblue to-skyblue opacity-75"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Master Math with Us</span>
            <span className="block text-limegreen">Achieve Your Goals</span>
          </h1>
          <p className="mt-4 text-lg text-lightmist sm:mt-6">
            Join our top-rated math tuition program and boost your skills with
            personalized learning plans and expert tutors.
          </p>
          <Link
            href="#fees"
            className="mt-8 inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-oceanblue bg-limegreen hover:bg-skyblue transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
