import { useNavigate } from "react-router-dom"
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8f1f5]">

      {/* Soft Ambient Glow Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,167,177,0.25),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,220,230,0.35),transparent_60%)]"></div>

      {/* Floating Soft Accent */}
      <div className="absolute w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-floatSlow top-24 left-24"></div>
      <div className="absolute w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-floatSlow2 bottom-24 right-24"></div>

      {/* Hero Content */}
      <div className="relative text-center max-w-4xl px-6">

        <p className="uppercase tracking-[4px] text-sm text-[#c08497] mb-6 animate-fadeUp">
          A Soft Creative Space
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-[#4f3f44] leading-tight mb-6 animate-fadeUp">
          Learn Crochet
          <span className="block text-[#c08497] font-medium">
            The Cozy Way 🧶
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#6b5c61] mb-10 max-w-2xl mx-auto animate-fadeUp">
          Structured beginner-friendly tutorials, curated patterns,
          and a calming creative journey designed for modern makers.
        </p>

        <button
  onClick={() => navigate("/learn")}
  className="bg-[#c08497] text-white px-10 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>
  Start Learning ✨
</button>
      </div>
    </div>
  )
}

export default Home