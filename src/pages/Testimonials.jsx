import React from "react";
import { FaStar } from "react-icons/fa";
import { PlayCircle } from "lucide-react";
import imagee from "../assets/images/testimonialsImg.png";

const testimonials = [
  {
    name: "Nicholas O.",
    rating: 4,
    feedback:
      "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
    image: "/path-to-avatar.jpg",
  },
  {
    name: "Christine M.",
    rating: 4,
    feedback:
      "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
    image: "/path-to-avatar.jpg",
  },
  {
    name: "Heather B.",
    rating: 4,
    feedback:
      "If you need help, Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
    image: "/path-to-avatar.jpg",
  },
];

// Rating stars component
const RatingStars = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? "text-yellow-400" : "text-gray-300"}
          size={20}
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16" id="owners">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-5">
          <h3 className="text-emerald-400 font-semibold uppercase tracking-wider">
            Welcome to Recovery Delivered
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Fully Online Suboxone Treatment Platform
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Experience 100% online opioid treatment with licensed buprenorphine
            providers starting at just $99/month.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            With monthly and weekly meetings based on your recovery progress.
            Schedule a same-day appointment with us.
          </p>
        </div>
        <div className="relative">
          <img
            src={imagee}
            alt="Treatment Platform"
            className="w-full rounded-xl shadow-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-14 h-14 text-emerald-400 cursor-pointer hover:text-emerald-500 transition-colors" />
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-emerald-400 font-semibold uppercase tracking-wider">
              Our Clients
            </h3>
            <h2 className="text-3xl font-bold text-gray-800 mt-3">
              Testimonials
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="p-3 rounded-full border hover:bg-gray-50">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="p-3 rounded-full border hover:bg-gray-50">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl space-y-5 transform transition-transform duration-300 hover:scale-105"
            >
              <RatingStars rating={testimonial.rating} />
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.feedback}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <span className="font-semibold text-gray-800">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
