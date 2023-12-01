import { useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <p>Hello World</p>
            <div>
            <Link to="/about">About</Link>
            </div>
            <div>
            <Link to="/connexion">Connexion</Link>
            </div> 
        </div>
    );
};

export default Home;