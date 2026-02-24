import React from "react"

const Yarn = () => {
  const yarns = [
    {
      name: "Cotton Yarn",
      weight: "Light",
      beginner: "Yes",
      image:
        "https://d2culxnxbccemt.cloudfront.net/craft/content/uploads/2015/04/20182938/Screen-Shot-2015-01-24-at-2.32.37-PM.png",
      description:
        "Soft, breathable and perfect for summer projects and beginners.",
    },
    {
      name: "Acrylic Yarn",
      weight: "Medium",
      beginner: "Yes",
      image:
        "https://mysweetcrochet.com/wp-content/uploads/2023/10/05-13.jpg",
      description:
        "Affordable and versatile. Great for practicing stitches.",
    },
    {
      name: "Wool Yarn",
      weight: "Bulky",
      beginner: "No",
      image:
        "https://m.media-amazon.com/images/I/71nhzRSxt9L._AC_SL1500_.jpg",
      description:
        "Warm and cozy. Ideal for winter garments and advanced makers.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8f1f2] py-20 px-8">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#4f3f44] mb-4">
          Yarn Guide 🧶
        </h2>
        <p className="text-[#6b5c61] max-w-xl mx-auto">
          Choose the perfect yarn for your crochet journey.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {yarns.map((yarn, i) => (
          <div
            key={i}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={yarn.image}
                alt={yarn.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#4f3f44] mb-3">
                {yarn.name}
              </h3>

              <p className="text-sm text-[#6b5c61] mb-4">
                {yarn.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">
                  Weight: {yarn.weight}
                </span>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    yarn.beginner === "Yes"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  Beginner: {yarn.beginner}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Yarn