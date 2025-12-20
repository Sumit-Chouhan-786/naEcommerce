import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const Login = () => {
  return (
    <section className="py-10 lg:py-12 max-w-[1920px] mx-auto relative">
      <div className="container mx-auto">

        <div className="flex items-center lg:min-h-[600px] flex-col lg:flex-row">

          {/* LEFT IMAGE (desktop only) */}
          <div className="hidden lg:block w-7/12 relative overflow-visible h-full">
            <Image
              src="/images/login.png"
              width={650}
              height={550}
              alt="login"
              className="absolute -left-24 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-5/12 flex justify-center px-4 lg:px-0">
            <div className="w-full bg-white rounded-xl shadow-md px-8 py-10">

              <h2 className="text-2xl font-semibold mb-1">Log in to Exclusive</h2>
              <p className="text-sm text-gray-500 mb-6">Enter your details below</p>

              {/* EMAIL */}
              <div className="mb-4 flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
                <AiOutlineMail className="text-gray-400 text-lg" />
                <input
                  placeholder="Email or Phone Number"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-6 flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
                <AiOutlineLock className="text-gray-400 text-lg" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* LOGIN BUTTON */}
              <button className="w-full bg-slate-900 text-white rounded-md py-3 text-sm font-medium hover:opacity-90">
                Login
              </button>

              {/* FORGOT PASSWORD */}
              <p className="text-center text-sm text-gray-500 mt-4">
                Forgot Password?{" "}
                <Link href="#" className="text-red-600 font-medium hover:underline">
                  Reset Here
                </Link>
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Login
