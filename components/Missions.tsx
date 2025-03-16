import missions from "@/settings/missionsData";
import React from "react";

const Missions = () => {
  return (
    <section
      id="missions"
      className="relative py-12 bg-linear-to-r from-oceanblue to-skyblue text-lightmist"
    >
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="/assets/mission_hero.webp"
          alt="Mission Background"
          loading="lazy" // Lazy load background image
          width={0}
          height={0}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center">
          Our Mission
        </h2>
        <p className="mt-4 text-lg text-lightmist text-center max-w-3xl mx-auto">
          Our mission is to provide high-quality math education that helps
          students achieve their academic goals. We believe in personalized
          learning plans that cater to each student's unique needs and learning
          style. We are committed to fostering a love for math, encouraging
          critical thinking, and promoting academic excellence.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {missions.map((card, index) => (
            <div
              key={index}
              className="border border-skyblue cursor-pointer rounded-lg shadow-lg p-6 text-center transform hover:scale-95 hover:shadow-2xl hover:bg-sky-800 hover:border-none duration-300 transition-all"
            >
              <h3 className="text-xl font-semibold text-limegreen">
                {card.title}
              </h3>
              <p className="mt-2 text-slate-50">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;
