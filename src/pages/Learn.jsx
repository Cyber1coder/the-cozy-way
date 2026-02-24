import React from "react"

const lessons = [
  {
    title: "How to hold a crochet hook and yarn",
    time: " ",
    link: "https://youtu.be/sgU6XvVWtco?si=xd54_2Z-bLlLcPXW"
  },
  {
    title: "How to crochet a slip knot",
    time: "",
    link: "https://youtu.be/FfuecCpzixI?si=Hk4OVNVk_IjKKLrl"
  },
  {
    title: "How to Single Crochet",
    time: "",
    link: "https://youtu.be/d-UNumGxIUg?si=frN3SybhavtGu02Q"
  },
  {
    title: "How to Half Double Crochet",
    time: "",
    link: "https://youtu.be/haLR1uHZhug?si=aBHjrLMEckGfsDqm"
  },
  {
    title: "How to Double Crochet",
    time: "",
    link: "https://youtu.be/PuOdmevVv0A?si=PLBhi45F43lwIXKL"
  },
  {
    title: "How to triple Crochet",
    time: "",
    link: "https://youtu.be/Y1rC2xqZRR0?si=ihc9PSSwGO6FsE_G"
  },
  {
    title: "First Project",
    time: "",
    link: "https://youtu.be/akHrxVGDm70?si=6irMG8F4VI38UUWe"
  },
  {
    title: "Second Project",
    time: "",
    link: "https://youtu.be/69sPk3eXxyg?si=-TA-6YPeltdQTkCX"
  },
]

const Learn = () => {
  return (
    <div className="p-12 bg-cream min-h-screen">
      <h2 className="text-4xl text-center mb-10 font-serif">
        Your Learning Journey
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {lessons.map((lesson, index) => (
          <a
            key={index}
            href={lesson.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <p className="text-dusty text-2xl font-bold mb-2">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-lg font-semibold mb-2">
              {lesson.title}
            </h3>
            <p className="text-sm text-gray-500">
              {lesson.time}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Learn