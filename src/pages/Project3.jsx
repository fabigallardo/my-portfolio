import { Link } from 'react-router-dom';

function Project3() {
    return (
        <div className="min-h-screen p-10 bg-gray-900 text-white">
            <h1 className="text-5xl font-bold mb-6">Project 3 Details</h1>
            <p>This is the detailed page for Project3. Add your project info, images, links, etc.</p>

            <Link to="/my-portfolio" className="mt-10 inline-block text-indigo-400 hover:underline">
                <p>go back home</p>
            </Link>
        </div>
    );
}

export default Project3;