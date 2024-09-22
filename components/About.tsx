import settings from "@/settings/settings";
import React from "react";

const About = () => {
  return (
    <section id="aboutus" className="bg-slate-100 text-oceanblue">
      <div className="bg-lightmist py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-oceanblue sm:text-5xl">
            About Us
          </h2>
          <div className="mt-8">
            <img
              src="/assets/teacher.webp"
              alt="Teacher"
              className="mt-8 mx-auto w-full max-w-screen-md"
              loading="lazy"
            />
            <p className="mt-4 text-lg text-gray-700">{settings.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
