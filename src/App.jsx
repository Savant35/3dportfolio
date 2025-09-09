import Navbar from "./sections/Navbar.jsx"
import Hero from './sections/Hero.jsx'
import About from "./sections/About"
import Projects from "./sections/Projects.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import Experience from "./sections/Experience.jsx"
const App = () => {
  return (
    <main className="max-w-[90rem] mx-auto">
      <Navbar />
       <Hero />
       <Experience/>
       <Projects/>
       <Contact /> 
       <Footer />
    </main>
  )
}

export default App
