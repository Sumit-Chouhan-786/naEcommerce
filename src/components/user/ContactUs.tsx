import React from "react";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import SubHeading from "../common/SubHeading";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="lg:pt-12 pt-10 relative">
      
    <div className="container relative z-10">
        {/* Heading */}
        <SubHeading className="mb-7" children="Contact Us"/>
        {/* Glass Background Wrap */}
        <div className="backdrop-blur-xl bg-white/40 shadow-[0_0px_5px_rgba(0,0,0,0.2)]
 border border-white/20 rounded-2xl sm:p-10 p-5">

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT SIDE ------------------------------------- */}
            <div>
              <p className="mt-2 mb-10 text-lg text-gray-700">
                We'd love to hear from you! Reach out anytime and our team will respond as soon as possible.
              </p>

              <ul className="space-y-8">

                {/* Address */}
                <li className="flex items-start group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow group-hover:scale-110 transition">
                    <FiMapPin className="text-2xl" />
                  </div>

                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Our Address</h3>
                    <p className="text-gray-700">demo</p>
                   
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow group-hover:scale-110 transition">
                    <FiPhone className="text-2xl" />
                  </div>

                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <Link href="tel:+91 123456" className="text-gray-700">+91 1234589</Link><br/>
                    <Link href="mailto:demo@gmail.com" className="text-gray-700">demo@gmail.com</Link>
                  </div>
                </li>

                {/* Working Hours */}
                <li className="flex items-start group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow group-hover:scale-110 transition">
                    <FiClock className="text-2xl" />
                  </div>

                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Working Hours</h3>
                    <p className="text-gray-700">Mon - Fri: 08:00 - 17:00</p>
                    <p className="text-gray-700">Sat & Sun: 08:00 - 12:00</p>
                  </div>
                </li>

              </ul>
            </div>

            {/* RIGHT SIDE FORM -------------------------------- */}
            <div className="sm:backdrop-blur-xl sm:bg-white/60 sm:border border-white/30 sm:p-8 rounded-xl sm:shadow-lg">
              <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-700 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-700 outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message..."
                  className="w-full p-3 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-700 outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition shadow"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
