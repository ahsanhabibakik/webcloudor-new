import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to Our Web Agency</h1>
            <p>Your one-stop solution for all web development needs.</p>
        </div>
    );
};

export default Home;