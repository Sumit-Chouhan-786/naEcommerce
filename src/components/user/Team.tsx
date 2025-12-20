import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const team = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: "/images/team.png", 
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: "/images/team.png",
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: "/images/team.png",
    },
  ];

  return (
    <section className="pb-12 lg:pt-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold text-center mb-5 lg:mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 text-center
              border border-gray-200
                         transition-all duration-300"
            >
              {/* Image */}
              <div className="mb-6 flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-auto group-hover:scale-115 transition-all duration-300 object-cover rounded-md"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500 mb-4">
                {member.role}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 text-gray-600">
                <Link
                  href="#"
                  className="hover:text-red-500 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="hover:text-red-500 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  className="hover:text-red-500 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
