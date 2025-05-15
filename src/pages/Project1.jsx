import { Link } from 'react-router-dom';

function Project1() {
    return (
        <div className="min-h-screen p-10 bg-gray-900 text-white">
            <h1 className="text-5xl font-bold mb-6">Project 1 Details</h1>
            <p>This is the detailed page for Project1. Add your project info, images, links, etc.</p>

            <Link to="/" className="mt-10 inline-block text-indigo-400 hover:underline">
                <p>go back home</p>
            </Link>
        </div>
    );
}

export default Project1;