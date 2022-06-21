import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to={'/chats'}>
                <h3>
                    Chats
                </h3>
            </Link>
            <Link to={'/profile'}>
                <h3>
                    Profile
                </h3>
            </Link>
    
        </div>
        
    );
};

export default Home;