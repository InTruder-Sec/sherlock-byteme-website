import React, { useEffect } from "react";
import "./../../App.css";

function Particles() {
  useEffect(() => {
    // Import the particles.js library script
    const script = document.createElement("script");
    script.src = "/particles.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Initialize and configure particles.js
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        size: {
          value: 3,
          random: false,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0,
            sync: false,
          },
        },
        // Add your particle configuration here
      },
      // Add any other configuration options as needed
    });

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div id="particles-js" className="w-screen h-screen "></div>;
}

export default Particles;
