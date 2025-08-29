import { lazy, Suspense } from 'react';
import './App.css'
import Hero from './components/Hero';

const Navbar = lazy(() => import('./components/Navbar'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy (() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <div className="w-full bg-gray-950 transition-colors duration-300 text-left">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Navbar />
        <main>
         <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        </main>
      </Suspense>
    </div>
  )
}

export default App;


