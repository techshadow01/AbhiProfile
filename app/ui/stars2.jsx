import React, { useEffect } from "react";
import './stars2.css'

const App = () => {

    // Function to generate random box-shadow values
    const generateRandomBoxShadow = (n) => {
        let shadows = [];
        for (let i = 0; i < n; i++) {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            shadows.push(`${x}px ${y}px #FFF`);
        }
        return shadows.join(', ');
    };

    // Use effect to apply random box-shadow to elements on component mount
    useEffect(() => {
        // Set the random box-shadow values for each star element
        document.querySelector('#stars').style.boxShadow = generateRandomBoxShadow(700);
        document.querySelector('#stars2').style.boxShadow = generateRandomBoxShadow(200);
        document.querySelector('#stars3').style.boxShadow = generateRandomBoxShadow(100);
    }, []);

    return (
        <div>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
    );
};

export default App;