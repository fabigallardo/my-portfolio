import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';

function Homepage(){
  return(
    <>
      {/*Navbar*/}
        <nav className="fixed top-0 left-0 w-full z-50 p-5 rounded-lg bg-[#001845]">
          <ul className="flex justify-center space-x-8">
            <li><a href="#about" className="px-4 py-2 rounded-md hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">About me</a></li>
            <li><a href="#projects" className="px-4 py-2 rounded-md hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">Projects</a></li>
            <li><a href="#skills" className="px-4 py-2 rounded-md hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">Skills</a></li>
            <li><a href="#contact" className="px-4 py-2 rounded-md hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">Contact</a></li>
          </ul>
        </nav>

      {/* About me Section*/}
      <section id="about" className="py-20 px-10 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[rgb(168,85,247)]">
          Hi, I'm Fabiola
        </h1>
        <p className="mt-4 text-xl">
          <p>Hello everyone!!</p>
          <br />
          <p>I am Fabiola, a recent graduate from UC Davis with a degree in Computer Engineering. I have a passion for technology, innovation, problem-solving and for the arts. My experience spans across both software and hardware development, with hands-on projects, from building an autonomous car with object detection to designing interactive hardware-based games.</p>
          <br />
          <p>I also have a strong background in customer relations from my experience as a Lancome Beauty Sales Advisor at Macy's. Here I developed excellent communication, with managers and clients, adaptability and sales skills which seamlessly translate to the tech industry.</p>
          <br />
          <p>I thrive in collaborative environments, love tackling complex challenges and I am always eager to learn and grow!</p>
          <br />
          <p>Below you will be able to learn more about the projects I created, skills I have, and hobbies I enjoy.</p>
        </p>
      </section>

      {/*Projects Section*/}
      <section id="projects" className="py-20 px-10">
        <h2 className="text-4xl font-semibold text-center">My Projects</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Link to="/project1" className=" bg-[rgba(168,85,247,0.5)] p-6 rounded-lg hover:bg-black hover:bg-[url('group1.png')] bg-cover bg-center hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">
            <h3 className="text-2xl font-bold">Autonomous Car with Object Detection</h3>
            <p className="mt-2 text-[18px] text-[#d3d3d3]">Click here to know more about my senior design project that I did with two other classmates.</p>
          </Link>
          <Link to="/project2" className="bg-[rgba(168,85,247,0.5)] p-6 rounded-lg hover:bg-black hover:bg-[url('group1.png')] bg-cover bg-center hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">
            <h3 className="text-2xl font-bold">172 Brawl</h3>
            <div className="mt-4"></div>
            <p className="mt-2 text-[18px] text-[#d3d3d3]">Click here to know more about my Embedded Systems Development Project that I did with another classmate.</p>
          </Link>
          <Link to="/project3" className="bg-[rgba(168,85,247,0.5)] p-6 rounded-lg hover:bg-black hover:bg-[url('group1.png')] bg-cover bg-center hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">
            <h3 className="text-2xl font-bold">Legend Shell</h3>
            <p className="mt-2 text-[18px] text-[#d3d3d3]">Click here to know more about my Unix-Command Processor Project that I did with another classmate.</p>
          </Link>
          <Link to="/project4" className="bg-[rgba(168,85,247,0.5)] p-6 rounded-lg hover:bg-black hover:bg-[url('group1.png')] bg-cover bg-center hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">
              <h3 className="text-2xl font-bold">Sound Following Robot</h3>
              <p className="mt-2 text-[18px] text-[#d3d3d3]">Click here to know more about my first robot I did in college with another classmate.</p>
          </Link>
        </div>
      </section>
      
      {/* Skills Section*/}
      <section id="skills" className="py-20 px-10">
        <h2 className="text-4xl font-semibold text-center">My Skills</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg=gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Languages</h3>
            <p className="mt-2 text-[18px] text-[#d3d3d3]">I am fluent in two languages, English and Spanish. Spanish is the first language I learned. Both have helped me a lot, especially at work and connecting with my other Hispanic peers.</p>
          </div>
          <div className="bg=gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Programming Languages</h3>
            <p className="mt-2 text-[18px] text-[#d3d3d3]">The programming languages I know are C, C++, Python, Java, Matlab, Verilog, Bach, RISC-V, HTML5, and CSS.</p>
          </div>
          <div className="bg=gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">EDA Tools</h3>
            <p className="mt-2 text-[18px] text-[#d3d3d3]">EDA tools I can work with Altium Designer, OrCad Capture, LT Spice, ModelSim, and Quartus.</p>
          </div>
          <div className="bg=gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Hardware Tools</h3>
            <p className="mt-2 text-[18px] text-[#d3d3d3]">Hardware tools I can work with are microcontrollers (Arduino, TI, Raspberry Pi), Oscilliscope, Function Generator, Spectrum Analyzer, and Digital Multimeter.</p>
          </div>
          <div className="bg=gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Other Skills</h3>
            <p className="mt-2 text-[18px] text-[#d3d3d3]">Other skills that I feel are essential in any workplace is Unix/Linux, Windows, Microsoft Office, Goodle Suite, Amazon Web Services (AWS), Git.</p>
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
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
