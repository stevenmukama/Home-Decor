import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="text-gray-800 py-4">
      <div className="bg-gray-500 flex">
        <div className="flex flex-1 justify-center items-center text-white text-3xl">
          <p>Get notified for New arrivals</p>
        </div>
        <div className="flex flex-col flex-1 p-4 gap-2 justify-center items-center">
          <input
            type="text"
            placeholder="Your email"
            className="font-bold py-1 px-8 w-72"
          />
          <span className="bg-orange-600 font-bold text-white text-md text-center py-1 px-10 w-fit rounded-lg">
            Subscribe
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 my-8">
        <div className="flex justify-between">
          <div>
            <img src="src/assets/Logo place.svg" alt="logo" className="w-48" />
          </div>
          <div>
            <h3 className="font-bold mb-2">Product</h3>
            <ul>
              <li>
                <a href="/textile" className="hover:underline text-gray-500">
                  Textile
                </a>
              </li>
              <li>
                <a
                  href="/new-arrival"
                  className="hover:underline text-gray-500"
                >
                  New Arrival
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Information</h3>
            <ul>
              <li>
                <a href="/faq" className="hover:underline text-gray-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="hover:underline text-gray-500">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              <li>
                <a href="/blog" className="hover:underline text-gray-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline text-gray-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Subscribe</h3>
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded w-full"
              />
              <button className="bg-gray-800 py-2 px-1 flex items-center justify-center rounded-e-lg">
                <ArrowRightIcon className="h-6 w-6 text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
