import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-neutral-300 pt-10">
        {/* Find Us */}
        <div>
          <h3 className="text-sm font-bold uppercas mb-4">
            /Find Us
          </h3>
          <address className="not-italic text-sm ">
            No 74, New Old Factory, <br />
            Taunton, Somerset, <br />
            United Kingdom.
          </address>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-sm font-bold uppercas mb-4">
            /Contact Us
          </h3>
          <p className="text-sm">
            +44 7983 637117 <br />
            damien@webmindsdesigns.com
          </p>
        </div>

        {/* Pricing */}
        <div>
          <h3 className="text-sm font-bold uppercas mb-4">
            /Pricings
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 border border-blue-400 rounded-full text-s">
              Web Design
            </span>
            <span className="px-4 py-2 border border-blue-400 rounded-full text-s">
              eCommerce
            </span>
            <span className="px-4 py-2 border border-blue-400 rounded-full text-s">
              Graphic Design
            </span>
            <span className="px-4 py-2 border border-blue-400 rounded-full text-s">
              Digital Marketing Services
            </span>
            <span className="px-4 py-2 border border-blue-400 rounded-full text-s">
              Logo Design
            </span>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-sm font-bold uppercase mb-4">
            /Follow Us
          </h3>
          <ul className="space-y-1 text-sm">
            <li>INSTAGRAM</li>
            <li>FACEBOOK</li>
            <li>YOUTUBE</li>
            <li>TIKTOK</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
