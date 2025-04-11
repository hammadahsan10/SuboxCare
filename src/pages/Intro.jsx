import React from 'react';
import mainImage from "../assets/images/rectangle.png";

const Intro = () => {
  return (
    <section
      id="aboutUs"
      className="w-full py-20 px-6 md:px-10 relative"
      style={{
        backgroundImage: `url(${mainImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto grid gap-14 grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-5">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
            Breaking Barriers to Recovery
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-lg">
            Our mission is to make Medication-Assisted Treatment accessible—whether you live in a bustling city or a quiet rural town.
            We are here to remove the roadblocks and help individuals begin their recovery with dignity and ease.
          </p>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-gray-700 mb-10 text-base leading-loose">
            We're more than just a treatment provider—we're a partner in healing. Our innovative platform bridges the gap between people and care, addressing barriers like stigma, accessibility, and inconvenience head-on.
          </p>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-emerald-500 text-3xl font-bold mb-1">500+</h3>
              <p className="text-gray-700 text-sm">Patients Helped</p>
            </div>
            <div>
              <h3 className="text-emerald-500 text-3xl font-bold mb-1">300+</h3>
              <p className="text-gray-700 text-sm">Locations Covered</p>
            </div>
            <div>
              <h3 className="text-emerald-500 text-3xl font-bold mb-1">4.9/5</h3>
              <p className="text-gray-700 text-sm">Satisfaction Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
