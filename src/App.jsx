import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Roadmap from "./pages/Learn"
import Yarn from "./pages/Yarn"
import Patterns from "./pages/Patterns"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Roadmap />} />
        <Route path="/yarn" element={<Yarn />} />
        <Route path="/patterns" element={<Patterns />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App