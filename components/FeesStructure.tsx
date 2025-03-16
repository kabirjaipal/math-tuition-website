import Plans from "@/settings/Plans";
import React from "react";
import { FaCheck } from "react-icons/fa";

const FeesStructure = () => {
  return (
    <section
      id="fees"
      className="bg-linear-to-r from-sky-900 to-slate-900 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-8">
          Fees Structure
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border border-skyblue rounded-lg shadow-lg p-6 transform hover:scale-95 cursor-pointer hover:bg-sky-950 duration-300 transition-all"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-gray-200 mb-2">
                  {plan.price}
                </p>
                <p className="text-lg text-gray-300 mb-4">{plan.duration}</p>
                <ul className="text-left text-gray-200 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <FaCheck className="text-oceanblue mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-4 bg-oceanblue text-white py-3 px-6 text-lg rounded-lg shadow-sm hover:bg-skyblue transition-colors duration-300">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeesStructure;
