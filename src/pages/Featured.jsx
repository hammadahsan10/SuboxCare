import React from 'react';
import image1 from '../assets/images/pic1.png';
import image2 from '../assets/images/pic2.png';
import image3 from '../assets/images/pic3.png';

const Featured = () => {
  return (
    <section className="w-full px-6 py-14 md:py-20 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="flex items-center justify-between flex-wrap gap-y-4">
          <div>
            <p className="text-emerald-500 text-xs font-semibold uppercase tracking-wider mb-1">
              As Seen
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Featured On</h2>
          </div>
          <div>
            <img
              src={image1}
              alt="Network Logo"
              className="h-9 object-contain"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-emerald-500 text-xs uppercase font-semibold tracking-wider text-center mb-2">
          States We Serve
        </p>
        <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold text-center mb-5">
          Currently Serve
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto text-sm leading-relaxed mb-14">
          We believe treatment should be accessible for everyone. That’s why we collaborate with care providers nationwide.
          Tap a green state to view insurance details and connect with Suboxone doctors in your area.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-xl overflow-hidden shadow-sm">
            <div className="relative">
              <img
                src={image2}
                alt="Toronto Location"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute bottom-0 w-full bg-white bg-opacity-90 px-4 py-3">
                <h3 className="text-gray-800 text-lg font-semibold">Toronto</h3>
                <p className="text-emerald-600 text-sm">Ottawa St. & Homer Watson Blvd.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-3">
            <img
              src={image3}
              alt="Map of USA"
              className="w-full h-[340px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
