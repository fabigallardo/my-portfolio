import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="font-sans  text-white">
      {/*Navbar*/}
      <nav className="p-5">
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
          I'm a passionate Software Engineer with a background in computer engineering. I love creating solutions that impact the world positively.
        </p>
      </section>

      {/*Projects Section*/}
      <section id="projects" className="py-20 px-10">
        <h2 className="text-4xl font-semibold text-center">My Projects</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Project 1</h3>
            <p className="mt-2">Description of your project goes here.</p>
          </div>
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
    </div>
  );
}

export default App
