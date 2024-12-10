"use client";

import React from "react";

export default function Footer() {
  return (
    <div className="relative">
      <footer className="relative py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-neutral-300 pt-10">
          {/* Find Us */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">/Find Us</h3>
            <address className="not-italic text-sm">
              The Old Rectory, <br />
              Taunton, Ta4 3jt, <br />
              Somerset, <br />
              United Kingdom.
             
            </address>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">/Contact Us</h3>
            <p className="text-sm">
              +44 7983 637117 <br />
              damian@webmindsdesigns.com
              </p>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">/Pricings</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-6 py-3 border border-blue-500 rounded-full text-sm font-semibold transition-all duration-500 transform hover:scale-105 hover:bg-gray-500 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white">
                Web Design
              </span>
              <span className="px-6 py-3 border border-blue-500 rounded-full text-sm font-semibold transition-all duration-500 transform hover:scale-105 hover:bg-gray-500 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white">
                eCommerce
              </span>
              <span className="px-6 py-3 border border-blue-500 rounded-full text-sm font-semibold transition-all duration-500 transform hover:scale-105 hover:bg-gray-500 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white">
                Graphic Design
              </span>
              <span className="px-6 py-3 border border-blue-500 rounded-full text-sm font-semibold transition-all duration-500 transform hover:scale-105 hover:bg-gray-500 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white">
                Digital Marketing Services
              </span>
              <span className="px-6 py-3 border border-blue-500 rounded-full text-sm font-semibold transition-all duration-500 transform hover:scale-105 hover:bg-gray-500 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white">
                Logo Design
              </span>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">/Follow Us</h3>
            <ul className="space-y-1 text-sm">
              <li>INSTAGRAM</li>
              <li>FACEBOOK</li>
              <li>YOUTUBE</li>
              <li>TIKTOK</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
