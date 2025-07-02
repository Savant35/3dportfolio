import Navbar from "./sections/navbar"
import Hero from './sections/Hero.jsx'
import About from "./sections/About"
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
       <Hero />
       <About />
    </main>
  )
}

export default App
