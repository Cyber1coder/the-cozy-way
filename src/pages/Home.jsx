import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8f1f5] px-4 sm:px-6">

      {/* Soft Ambient Glow Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,167,177,0.25),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,220,230,0.35),transparent_60%)]"></div>

      {/* Floating Accents */}
      <div className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-pink-300/20 rounded-full blur-3xl animate-floatSlow top-10 left-5 sm:top-20 sm:left-20"></div>

      <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-rose-200/20 rounded-full blur-3xl animate-floatSlow2 bottom-10 right-5 sm:bottom-20 sm:right-20"></div>

      {/* Hero Content */}
      <div className="relative text-center max-w-4xl mx-auto py-20">

        <p className="uppercase tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm text-[#c08497] mb-5">
          A Soft Creative Space
        </p>

        <h1 className="font-serif text-[#4f3f44] leading-tight mb-6
                       text-4xl
                       sm:text-5xl
                       md:text-6xl
                       lg:text-7xl">
          Learn Crochet
          <span className="block text-[#c08497] font-medium mt-2">
            The Cozy Way 🧶
          </span>
        </h1>

        <p className="text-[#6b5c61] mx-auto mb-8
                      max-w-xl md:max-w-2xl
                      text-base
                      sm:text-lg
                      md:text-xl
                      px-2">
          Structured beginner-friendly tutorials, curated patterns,
          and a calming creative journey designed for modern makers.
        </p>

        <button
          onClick={() => navigate("/learn")}
          className="
            bg-[#c08497]
            text-white
            px-6 py-3
            sm:px-8 sm:py-4
            md:px-10
            rounded-full
            shadow-md
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
            text-sm
            sm:text-base
          "
        >
          Start Learning ✨
        </button>

      </div>
    </div>
  );
};

export default Home;