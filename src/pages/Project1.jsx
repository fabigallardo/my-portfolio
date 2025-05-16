import { Link } from 'react-router-dom';

function Project1() {
    return (
        <div className="min-h-screen p-10 text-white">
            <h1 className="text-5xl font-bold mb-6">Autonomous Car with Object Detection</h1>
            
            {/*Project details*/}
            <section id="project1" className = "py-20 px-10">
                <div className="mt-10 grid gird-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="bg-[rgba(168,85,247,0.5)] p-6 rounded-lg">
                        <h3 className="text-2xl font-bold">General Info</h3>
                        <p className= "text-[#d3d3d3]">
                            <p>Course: EEC 195A/195B - Autonomous Vehicle Design Project</p>
                            <p>Duration of Project: January 8, 2024 - June 7, 2024 (two quarters)</p>
                            <p>Number of people in group: 3</p>
                        </p>
                    </div>
                    <div className="bg-[rgba(168,85,247,0.5)] p-6 rounded-lg">
                        <h3 className="text-2xl font-bold">Description</h3>
                        <p className= "text-[#d3d3d3]">Developed a custom electronic speed controller (ESC) circuit for precise motor control in an autonomous RC car.
                            Implemented and retained the Haar Cascade Classifier to detect and follow desired object.
                            Integrated sensor fusion of the camera and ultrasonic sensors for navigation and improved real-time object recognition
                            using UART, GPIO pins through Raspberry Pi 4 and Pico.
                        </p>
                    </div>
                    <div className="bg-[rgba(168,85,247,0.5)] p-6 rounded-lg">
                        <h3 className="text-2xl font-bold">Tools Used</h3>
                        <p className= "text-[#d3d3d3]">
                            <p>Programming Languages: Python, Micropython <br /> Software: Haar Cascade Classifier, Altium</p>
                            <p>Hardware: Raspberry Pi 4 and Pico, RC car, camera, ultrasonic sensors, custom 3D printed mounts</p>
                        </p>
                    </div>
                </div>
            </section>

            {/* explore other Projects or go back home*/}
            <section>
                <div className="mt-10 grid gird-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                    <h3 className="text-2xl font-bold">Explore my other Projects</h3>
                    <Link to="/project2" className="bg-[rgba(168,85,247,0.5)] p-6 rounded-lg hover:bg-black hover:bg-[url('group1.png')] bg-cover bg-center hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">
                        <h3 className="text-2xl font-bold">172 Brawl</h3>
                        <div className="mt-4"></div>
                        <p className="mt-2 text-[18px] text-[#d3d3d3]">Click here to know more about my Embedded Systems Development Project that I did with another classmate.</p>
                    </Link>
                    <Link to="/project3" className="bg-[rgba(168,85,247,0.5)] p-6 rounded-lg hover:bg-black hover:bg-[url('group1.png')] bg-cover bg-center hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] transition duration-300">
                        <h3 className="text-2xl font-bold">Legend Shell</h3>
                        <p className="mt-2 text-[18px] text-[#d3d3d3]">Click here to know more about my Unix-Command Processor Project that I did with another classmate.</p>
                    </Link>
                    <Link to="/project4" className="bg-[rgba(168,85,247,0.5)] p-6 rounded-lg hover:bg-black hover:bg-[url('group1.png')] bg-cover bg-center hover:shado-[0_0_15px_5px_rgba(168,85,247, 0.5)] transition duration-300">
                        <h3 className="text-2xl font-bold">Sound Following Robot</h3>
                        <p className="mt-2 text-[18px] text-[#d3d3d3]">Click here to know more about my first robot I did in college with another classmate.</p>
                    </Link>
                </div>
            </section>

            
            <Link to="/my-portfolio" className="mt-10 inline-block text-indigo-400 hover:underline">
                <p>go back home</p>
            </Link>
        </div>
    );
}

export default Project1;