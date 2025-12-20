import { FaStore, FaDollarSign, FaShoppingBag, FaMoneyBillWave } from "react-icons/fa";

const AboutSales = () => {
  const cards = [
    {
      title: "Sellers active on our site",
      value: "10.5k",
      icon: <FaStore />,
    },
    {
      title: "Monthly Product Sale",
      value: "33k",
      icon: <FaDollarSign />,
    },
    {
      title: "Customer active on our site",
      value: "45.5k",
      icon: <FaShoppingBag />,
    },
    {
      title: "Annual gross sale on our site",
      value: "25k",
      icon: <FaMoneyBillWave />,
    },
  ];

  return (
    <section className="pb-12 lg:pt-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-5 lg:mb-12">Growth Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group rounded-xl p-6 transition-all duration-300
           bg-white text-gray-800
           hover:bg-red-500 hover:text-white
           flex flex-col items-center text-center
           shadow-[0_1px_10px_rgba(0,0,0,0.12)]
           hover:shadow-[0_5px_40px_rgba(0,0,0,0.1)]"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mb-4
                           bg-gray-100 text-gray-700
                           group-hover:bg-white group-hover:text-red-500
                           transition-all duration-300"
              >
                <span className="text-xl">{card.icon}</span>
              </div>

              {/* Value */}
              <h2 className="text-2xl font-bold mb-1">
                {card.value}
              </h2>

              {/* Title */}
              <p className="text-sm text-gray-500 group-hover:text-red-100 transition-all duration-300">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSales;
