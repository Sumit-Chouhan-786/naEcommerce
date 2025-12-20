import Link from "next/link";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">
        
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          
          {/* LEFT BLOCK */}
          <div className="md:max-w-md lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <FiGrid className="w-8 h-8 text-white hover:text-white transition duration-300" />
              <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                TechStore
              </span>
            </Link>

            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-300">
                             
Your trusted online destination for premium gadgets, smart devices, and accessories—delivering innovation, performance, and style right to your doorstep. Enjoy secure shopping, fast delivery, dedicated support, and a seamless experience every time you shop with us.
              </p>
             
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">

            {/* Pages */}
            <div>
              <p className="font-semibold tracking-wide">Pages</p>
              <ul className="mt-2 space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/shop" className="text-gray-400 hover:text-white transition">Shop</Link></li>
                <li><Link href="/blogs" className="text-gray-400 hover:text-white transition">Blogs</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <p className="font-semibold tracking-wide">Categories</p>
              <ul className="mt-2 space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Headphones</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Smart Watches</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Bluetooth Speakers</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Chargers</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Accessories</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <p className="font-semibold tracking-wide">Featured Products</p>
              <ul className="mt-2 space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Wireless Earbuds</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Gaming Headset</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Fast Charging Powerbank</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Smart Fitness Band</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Portable Speaker</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-semibold tracking-wide">Contact Us</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="tel:+91123456" className="text-gray-400 hover:text-white transition">
                    +91 123456
                  </Link>
                </li>
               <li>
  <Link
    href="mailto:demo@gmail.com"
    className="text-gray-400 wrap-break-word hover:text-white transition"
  >
    demo@gmail.com
  </Link>
</li>

                <p className="text-sm text-gray-400">
                 demo
                </p>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM AREA */}
        <div className="flex flex-col-reverse items-center sm:justify-between py-5 border-t border-gray-700 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} NainTek — All rights reserved.
          </p>

          <div className="flex items-center mb-3 space-x-4 sm:mt-0">
            <Link href="/" className="text-gray-400 hover:text-white transition">
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white transition">
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white transition">
              <FaFacebookF className="h-5 w-5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
