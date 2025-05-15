import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Project1 from './pages/Project1';

function Homepage(){
  return(
    <>
      {/*Navbar*/}
        <nav className="fixed top-0 left-0 w-full z-50 p-5 rounded-lg bg-black hover:">
          <ul className="flex justify-center space-x-8">
            <li><a href="#about" className="px-4 py-2 rounded-md hover:bg-gray-900 hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">About me</a></li>
            <li><a href="#projects" className="px-4 py-2 rounded-md hover:bg-gray-900 hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">Projects</a></li>
            <li><a href="#skills" className="px-4 py-2 rounded-md hover:bg-gray-900 hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">Skills</a></li>
            <li><a href="#contact" className="px-4 py-2 rounded-md hover:bg-gray-900 hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">Contact</a></li>
          </ul>
        </nav>

      {/* About me Section*/}
      <section id="about" className="py-20 px-10 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          Hi, I'm Fabiola
        </h1>
        <p className="mt-4 text-xl">
          <p>Hello!!</p>
          <br />
          <p>I am Fabiola, a recent graduate from UC Davis with a degree in Computer Engineering. I have a passion for technology, innovation, problem-solving and for the arts. My experience spans across both software and hardware development, with hands-on projects, from building an autonomous car with object detection to designing interactive hardware-based games.</p>
          <br />
          <p>I also have a strong background in customer relations from my experience as a Beauty Sales Advisor at Macy's. Here I developed excellent communication, with managers and clients, adaptability and sales skills which seamlessly translate to the tech industry.</p>
          <br />
          <p>I thrive in collaborative environments, love tackling complex challenges and I am always eager to learn and grow!</p>
        </p>
      </section>

      {/*Projects Section*/}
        
          <section id="projects" className="py-20 px-10">
            <h2 className="text-4xl font-semibold text-center">My Projects</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <Link to="/project1" className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition border-indigo-500">
                <h3 className="text-2xl font-bold">Project 1</h3>
                <p className="mt-2">Description of your project goes here.</p>
              </Link>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-bold">Project 2</h3>
                <p className="mt-2">Description of your project goes here.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-bold">Project 3</h3>
                <p className="mt-2">Description of your project goes here.</p>
              </div>
            </div>
          </section>

      {/* Skills Section*/}
      <section id="skills" className="py-20 px-10">
        <h2 className="text-4xl font-semibold text-center">My Skills</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg=gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Skill 1</h3>
            <p className="mt-2">Skill description.</p>
          </div>
          <div className="bg=gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Skill 2</h3>
            <p className="mt-2">Skill description.</p>
          </div>
          <div className="bg=gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Skill 3</h3>
            <p className="mt-2">Skill description.</p>
          </div>
        </div>
      </section>

      {/*Contact Section*/}
      <section id="contact" className="py-20 px-10">
        <h2 className="text-4xl font-semibold">Contact Me</h2>
        <p className="mt-4 text-xl">Feel free to reach out to me via email at: <a href="mailto:fabigallardo333@gmail.com" className="text-blue-400">fabigallardo333@gmail.com</a></p>
      </section>

      {/*Footer*/}
      <footer className="text-center p-6 text-sm text-gray-400">
        <p>&copy; 2025 Fabiola Gallardo. All rights reserved.</p>
      </footer>
      
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      
      <div className="font-sans text-lg md:text-xl lg:text-2xl text-white">
        

          {/* Routes */}
        <Routes>
          <Route path="/my-portfolio" element={<Homepage />} />
          <Route path="/project1" element={<Project1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
