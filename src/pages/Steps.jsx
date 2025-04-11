import React from 'react';
import myImageee from '../assets/images/steps.png';

const Steps = () => {
  return (
    <div className="bg-[#f0f9f9] py-16 px-4 overflow-x-auto">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm uppercase mb-2">GET SAME DAY ONLINE</p>
          <h2 className="text-gray-800 text-3xl font-medium">Suboxone Treatment In 10 Minutes</h2>
          <button className="bg-emerald-400 text-white px-6 py-2 rounded mt-4 hover:bg-emerald-500 transition-colors">
            Download The App Today →
          </button>
        </div>

        {/* Treatment Process Steps */}
        <div className="relative mt-20">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-62 h-62 hidden md:block" style={{ marginTop: '-50px' }}>
            <img
              src={myImageee}
              alt="Treatment Process"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Steps */}
          <div className="flex justify-center min-w-[800px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-64 gap-y-20">
              <div className="bg-white p-6 rounded-lg shadow-md w-100">
                <h3 className="font-medium mb-2">Step 1 - Download The App</h3>
                <p className="text-gray-600 text-sm">Click the link to download our app to get started.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md w-100">
                <h3 className="font-medium mb-2">Step 2 - Complete Onboarding Process & Documents</h3>
                <p className="text-gray-600 text-sm">Provide medical history and sign treatment forms.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md w-100">
                <h3 className="font-medium mb-2">Step 3 - Schedule Your First Visit</h3>
                <p className="text-gray-600 text-sm">Our scheduling team will work with you to book your first meeting. Many times, this is the same day.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md w-100">
                <h3 className="font-medium mb-2">Step 4 - Meet With Licensed Provider</h3>
                <p className="text-gray-600 text-sm">At the time of your appointment, open the app on your phone to start your visit.</p>
              </div>
            </div>
          </div>

          {/* Final Step */}
          <div className="bg-white p-6 rounded-lg shadow-md w-100 mx-auto mt-20">
            <h3 className="font-medium mb-2">Step 5 - Pick Up Medication</h3>
            <p className="text-gray-600 text-sm">Your script will be sent to your pharmacy of choice for pick up the same day.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
