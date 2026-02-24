import React from "react"

const patterns = [
  {
    title: "Cozy Granny Square Blanket",
    level: "Beginner",
    time: "2-3 days",
    image:
      "https://imgs.search.brave.com/yQsysn77O3M96RGvNP7cdPyrlfEuxe5eayOMoNZGmRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90bHlj/YmxvZy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDUv/RFNDMDAwNTQuanBn",
    youtube: "https://www.youtube.com/watch?v=J5xvF6o0H5Q",
  },
  {
    title: "Adorable Amigurumi",
    level: "Intermediate",
    time: "4-5 days",
    image:
      "https://imgs.search.brave.com/zu1WLysPLnbs8BodqE1cNRkBf_1IBfutj-KL3tu6dbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQxMzc1NTk3L2Mv/MjI1MC8yMjUwLzAv/MC9pbC81ZTQ1ZWMv/NDY5NjQ5MzUxMy9p/bF8zMDB4MzAwLjQ2/OTY0OTM1MTNfNDlk/OS5qcGc",
    youtube: "https://youtu.be/UXZyjQZ71UQ?si=HY565us6rU2FYyqn",
  },
  {
    title: "Textured Storage Basket",
    level: "Beginner",
    time: "3-4 hours",
    image:
      "https://imgs.search.brave.com/K1O89QSQNXryhbW9zVYtOGlgGPD22QZzoR2u2B5Iz-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE3NDc5MDY3L2Mv/MjI5MC8yMjkwLzQ3/Ny8zMDEvaWwvMWYw/OGM1LzUxNTY3ODYw/NjQvaWxfMzAweDMw/MC41MTU2Nzg2MDY0/X2ZrMzkuanBn",
    youtube: "https://youtu.be/xXu3nKXrZfY?si=CWFcLGeAxSczSIAu",
  },
]

const Patterns = () => {
  return (
    <div className="bg-cream min-h-screen py-20 px-8">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-[#4f3f44] mb-3">
          Pattern Library
        </h2>
        <p className="text-[#6b5c61]">
          Discover beautiful, free patterns for every skill level
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {patterns.map((pattern, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="h-60 overflow-hidden">
              <img
                src={pattern.image}
                alt={pattern.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-[#4f3f44]">
                {pattern.title}
              </h3>

              <div className="flex justify-between text-sm text-[#6b5c61] mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    pattern.level === "Beginner"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {pattern.level}
                </span>
                <span>{pattern.time}</span>
              </div>

              {/* Button (Unchanged Style, Now Clickable) */}
              <a
                href={pattern.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-dusty font-medium hover:underline"
              >
                View Pattern →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Patterns