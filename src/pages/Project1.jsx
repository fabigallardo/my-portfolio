import { Link } from 'react-router-dom';

function Project1() {
    return (
        <div className="min-h-screen p-10 bg-gray-900 text-white">
            <h1 className="text-5xl font-bold mb-6">Autonomous Car with Object Detection</h1>
            <h2 className="font-bold mb-6">Senior Design Project (2024)</h2>
            <h3>Tools used: Python, Raspberry Pi 4, Micropython, Altium, Haar Cascade Classifier</h3>
            <br />
            <p>● Developed a custom electronic speed controller (ESC) circuit for precise motor control in an autonomous RC car 
       <br />● Implemented and retrained the Haar Cascade Classifier to detect and follow desired object 
       <br />● Integrated sensor fusion of the camera and ultrasonic sensors for navigation and improved real-time object recognition  
          using UART, GPIO pins through the Raspberry Pi 4 and Pico </p>

            <Link to="/my-portfolio" className="mt-10 inline-block text-indigo-400 hover:underline">
                <p>go back home</p>
            </Link>
        </div>
    );
}

export default Project1;