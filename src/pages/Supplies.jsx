import React from "react";

const supplies = [
  {
    name: "Yarn",
    description: "Soft cotton or acrylic yarn used for crochet projects.",
    link: "https://magicneedles.in/collections/yarns",
    icon: "🧶"
  },
  {
    name: "Crochet Hook",
    description: "The main tool used to create stitches.",
    link: "https://magicneedles.in/collections/crochet-hooks",
    icon: "🪝"
  },
  {
    name: "Scissors",
    description: "Used to trim yarn neatly when finishing.",
    link: "https://www.amazon.in/s?k=craft+scissors",
    icon: "✂️"
  },
  {
    name: "Tapestry Needle",
    description: "Helps weave loose yarn ends into the project.",
    link: "https://www.amazon.in/s?k=tapestry+needle",
    icon: "🪡"
  },
  {
    name: "Stitch Markers",
    description: "Used to track stitches and rows.",
    link: "https://www.amazon.in/s?k=stitch+markers+crochet",
    icon: "📍"
  }
];

const Supplies = () => {
  return (
    <div className="min-h-screen bg-[#fdf7f8] py-16 px-10">

      <h1 className="text-4xl font-semibold text-center text-[#5a4449] mb-12">
        Crochet Essentials
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {supplies.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 border border-pink-100"
          >
            <div className="text-3xl mb-3">{item.icon}</div>

            <h2 className="text-xl font-semibold text-[#4f3f44] mb-2">
              {item.name}
            </h2>

            <p className="text-gray-600 mb-4">
              {item.description}
            </p>

            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#c08497] text-white px-4 py-2 rounded-full hover:bg-[#b06a84] transition"
            >
              View Options
            </a>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Supplies;