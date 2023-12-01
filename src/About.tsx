import { useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p>About</p>
            <button onClick={() => navigate("/")}>Cliquez ici pour naviguer vers home</button>
        </div>
    );
};

export default About;