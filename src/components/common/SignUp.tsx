import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="py-10 lg:py-12 max-w-[1920px] mx-auto relative">
      <div className="container mx-auto">

        <div className="flex items-center lg:min-h-[600px] flex-col lg:flex-row">

          {/* LEFT IMAGE (Hidden on small & medium screens) */}
          <div className="hidden lg:block w-7/12 relative overflow-visible h-full">
            <Image
              src="/images/login.png"
              width={650}
              height={550}
              alt="login"
              className="absolute -left-24 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* RIGHT FORM (Full width on mobile) */}
          <div className="w-full lg:w-5/12 flex justify-center px-4 lg:px-0">
            <div className="w-full bg-white rounded-xl shadow-md px-8 py-10">

              <h2 className="text-2xl font-semibold mb-1">Create an account</h2>
              <p className="text-sm text-gray-500 mb-6">Enter your details below</p>

              {/* NAME */}
              <div className="mb-3 flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
                <AiOutlineUser className="text-gray-400 text-lg" />
                <input
                  placeholder="Name"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-3 flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
                <AiOutlineMail className="text-gray-400 text-lg" />
                <input
                  placeholder="Email or Phone Number"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-4 flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
                <AiOutlineLock className="text-gray-400 text-lg" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* CREATE ACCOUNT */}
              <button className="w-full bg-slate-900 text-white rounded-md py-3 text-sm font-medium hover:opacity-90">
                Create Account
              </button>

              {/* OR LINE */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* GOOGLE SIGNUP */}
              <button className="w-full border flex items-center justify-center gap-2 border-gray-300 rounded-md py-2 hover:shadow-sm bg-white">
                <FcGoogle className="text-xl" />
                <span className="text-sm">Sign up with Google</span>
              </button>

              {/* LOGIN LINK */}
              <p className="text-center text-sm text-gray-500 mt-4">
                Already have account?{" "}
                <Link href="/login" className="text-blue-600 font-medium hover:underline">Log in</Link>
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Login
