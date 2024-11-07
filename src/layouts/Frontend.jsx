import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/admin">
                <input
                    type="button"
                    value="Go to Dashboard"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                />
            </Link>
        </div>
    );
};

export default Home;
