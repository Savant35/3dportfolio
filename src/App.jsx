import Navbar from "./sections/navbar"
import Hero from './sections/Hero.jsx'
import About from "./sections/About"
import Projects from "./sections/Projects.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import Experience from "./sections/Experience.jsx"
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
       <Hero />
       <About />
       <Projects/>
       {/*<Clients/> */}
       <Experience/>
       <Contact /> 
       <Footer />
    </main>
  )
}

export default App
