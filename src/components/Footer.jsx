// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b">
          <div className="md:col-span-4">
            <h2 className="text-4xl text-cyan-500 font-medium mb-4">LOGO</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Experience The Convenience Of Recovery Delivered. Your Trusted Source For Online Medication Delivery. We Bring
              The Pharmacy To Your Doorstep, Ensuring Fast, Discreet, And Reliable Service. Whether You're Managing A Chronic
              Condition Or Need A One-Time Prescription Filled, We Make The Process Simple And Hassle-Free.
            </p>
          </div>

          <div className="md:col-span-2 md:ml-8">
            <h3 className="text-cyan-500 font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Owners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Tenants</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Properties</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-cyan-500 font-medium mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Online Marketplace</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Download App</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Start Treatment</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Online Urgent Care</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-cyan-500 font-medium mb-4">Contact</h3>
            <p className="text-gray-600 text-sm mb-4">
              <a href="tel:1-888-757-0658" className="hover:text-gray-800">1-888-757-0658</a>
            </p>

            <h3 className="text-cyan-500 font-medium mb-2">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-sm text-gray-500">
          <p>©2024 - Recovery Delivered All Rights Reserved</p>
          <p className="text-right text-xs">Designed And Developed By Recovery</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;