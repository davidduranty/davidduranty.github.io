import React from "react";
import { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");

      let array = ["Formation", "Performance", "Bienveillance", "Qualité"];
      let wordIndex = 0;
      let letterIndex = 0;

      const createLetter = () => {
        const letter = document.createElement("span");
        target.appendChild(letter);
  
        letter.classList.remove("letter");
        letter.style.opacity = "0";
        letter.style.animation = "anim 7s ease forwards";
        letter.textContent = array[wordIndex][letterIndex];
  
        setTimeout(() => {
          letter.remove();
        }, 2500);
      };
      const loop = () => {
        setTimeout(() => {
          if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
          } else if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
          } else {
            letterIndex = 0;
            wordIndex++;
            setTimeout(loop, 2000);
          }
        }, 100);
      };
      loop();
      
    }, []);

  return (
    <div className="text-dynamic">
      <span>Devises : </span>
      <span id="text-target"></span>
    </div>
  );
};

export default DynamicText;
